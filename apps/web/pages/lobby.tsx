import React, {Fragment, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";
import {differenceInSeconds} from "date-fns";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faCrown, faSkull} from "@fortawesome/free-solid-svg-icons";
import {
    ILeaderboardDef,
    ILobbiesMatch,
    ILobbiesMatch2,
    IMatchesMatch,
    IMatchesMatchPlayer,
    IMatchesMatchPlayer2
} from "../helper/api.types";
import {fetchLeaderboards} from "../helper/api";
import {formatAgo} from "../helper/util";
import {ICloseEvent, w3cwebsocket} from "websocket";
import {camelizeKeys} from "humps";
import {cloneDeep, flatten} from "lodash";


export function initConnection(onConnected: () => void, onLobbies: (_lobbies: any[]) => void): Promise<void> {
    return new Promise(resolve => {
        console.log('ENVIRONMENT', process.env.NEXT_PUBLIC_ENVIRONMENT);

        let client: w3cwebsocket;
        if (process.env.NEXT_PUBLIC_ENVIRONMENT == 'development') {
            client = new w3cwebsocket(`ws://aoe2backend-socket.deno.dev/`);
            // client = new w3cwebsocket(`ws://127.0.0.1:8787/api/room/1234/websocket`);
        } else {
            client = new w3cwebsocket(`wss://gartic.denniske.workers.dev/api/room/1234/websocket`);
        }

        client.onopen = () => {
            console.log('WebSocket Client Connected');
            onConnected();
            // mutate(connected());

            // client.send(JSON.stringify({
            //     type: 'ping',
            // }));

            resolve();
        };

        client.onmessage = (messageEvent) => {
            const message = JSON.parse(messageEvent.data as string);
            // console.log('message', message);

            if (message.type != 'pong') {
                onLobbies(message);
            }


            // lobbyClient.message(message);
            // gameClient.message(message);
        };

        client.onerror = (error) => {
            console.log('error', error);
        };

        client.onclose = (event: ICloseEvent) => {
            // mutate(disconnected());

            console.log('closed', event);
            // lobbyClient.close(event.reason);

            // if (event.reason === closeReasonKicked) {
            //     console.log('You were kicked.');
            //     mutate(updateUser({id: undefined, name: undefined}));
            // } else {
            //     console.log('Connection lost.', event);
            // }
        };
    });
}





// const changedLobbies: ILobbiesMatch[] = [];

// const sample = [
//     {
//         type: 'lobby',
//         id: 100,
//         data: {
//             blockedSlotCount: 2,
//             players: [
//                 {
//                     type: 'player',
//                     id: 1,
//                     data: {
//                         profileId: 1,
//                         name: 'Dennis',
//                     },
//                 },
//             ],
//         },
//     },
// ];


// const changeset: ILobbiesMatch[] = [
//     {
//         matchId: 100,
//         blockedSlotCount: 2,
//         players: [
//             {
//                 slot: 1,
//                 profileId: 1,
//                 name: 'Dennis',
//             },
//         ],
//     },
// ] as any;


// const changeset: ILobbiesMatch[] = [
//     {
//         matchId: 100,
//         blockedSlotCount: 2,
//         players: [
//             {
//                 slot: 1,
//                 profileId: 1,
//                 name: 'Dennis',
//             },
//         ],
//     },
// ] as any;


interface ILobbyAddedEvent {
    type: 'lobbyAdded';
    data: ILobbiesMatch;
}

interface ILobbyUpdatedEvent {
    type: 'lobbyUpdated';
    data: ILobbiesMatch;
}

interface ILobbyRemovedEvent {
    type: 'lobbyRemoved';
    data: { matchId: number; };
}

interface ISlotAddedEvent {
    type: 'slotAdded';
    data: IMatchesMatchPlayer2;
}

interface ISlotUpdatedEvent {
    type: 'slotUpdated';
    data: IMatchesMatchPlayer2;
}

interface ISlotRemovedEvent {
    type: 'slotRemoved';
    data: { matchId: number; slot: number; };
}

type ILobbyEvent = ILobbyAddedEvent | ILobbyUpdatedEvent | ILobbyRemovedEvent | ISlotAddedEvent | ISlotUpdatedEvent | ISlotRemovedEvent;

const lobbies: ILobbiesMatch[] = [];

function processEvent(event: ILobbyEvent) {
    const lobby = lobbies.find(lobby => lobby.matchId == event.data.matchId);

    switch (event.type) {
        case 'lobbyAdded':
            lobbies.push(event.data);
            break;
        case 'lobbyUpdated':
            Object.assign(lobby, event.data);
            break;
        case 'lobbyRemoved':
            lobbies.splice(lobbies.indexOf(lobby), 1);
            break;
        case 'slotAdded':
            lobby.players[event.data.slot] = event.data;
            break;
        case 'slotUpdated':
            Object.assign(lobby.players[event.data.slot], event.data);
            break;
        case 'slotRemoved':
            delete lobby.players[event.data.slot];
            break;
    }
}




export function initLobbySubscription(onConnected: () => void, onLobbies: (_lobbies: any[]) => void): Promise<void> {
    let lobbyDict: { [key: string]: ILobbiesMatch2 } = {};
    let playerDict: { [key: string]: IMatchesMatchPlayer2 } = {};

    const createArray = () => {
        const lobbies = Object.values(lobbyDict);
        const players = Object.values(playerDict);

        const lobbiesWithPlayers = lobbies.map(lobby => {
            const lobbyPlayers = players.filter(player => player.matchId == lobby.matchId);
            return {
                ...lobby,
                players: lobbyPlayers,
            };
        });

        onLobbies(lobbiesWithPlayers);
    };

    return initConnection(
        () => {
            fetch(`https://aoe2backend-socket.deno.dev/api/lobbies`).then(async (response) => {
                let matches = await response.json() as ILobbiesMatch[];

                let players = flatten(matches.map(l => l.players));

                // lobbies.forEach(l => l.players = l.players.map(p => p.profileId));

                const lobbies: ILobbiesMatch2[] = matches.map(l => ({
                    ...l,
                    players: l.players.map(p => p.profileId),
                }));

                lobbyDict = Object.assign({}, ...lobbies.map((x) => ({[x.matchId]: x})));
                playerDict = Object.assign({}, ...players.map((x) => ({[x.profileId]: x})));

                createArray();
            });
        },
        (changedEntities: IChangedEntity[]) => {
            console.log('changedEntities', changedEntities);

            const changedLobbies = changedEntities.filter(e => e.type === 'lobby');
            for (const lobby of changedLobbies) {
                if (lobby.data == null) {
                    delete lobbyDict[lobby.id];
                } else {
                    const existingLobby = lobbyDict[lobby.id];
                    if (existingLobby) {
                        Object.assign(existingLobby, lobby.data);
                    } else {
                        lobbyDict[lobby.id] = lobby.data;
                    }
                }
            }

            const changedPlayers = changedEntities.filter(e => e.type === 'player');
            for (const player of changedPlayers) {
                if (player.data == null) {
                    delete playerDict[player.id];
                } else {
                    const existingLobby = playerDict[player.id];
                    if (existingLobby) {
                        Object.assign(existingLobby, player.data);
                    } else {
                        playerDict[player.id] = player.data;
                    }
                }
            }

            // createArray();
        });
}

// const baseUrl = process.env.NEXT_PUBLIC_GRAPH_API_URL;

export default function LobbyPage() {
    const [leaderboard, setLeaderboard] = useState(null);
    const [search, setSearch] = useState('test');

    const leaderboards = useQuery(['leaderboards'], () => fetchLeaderboards(), {
        onSuccess: (data) => {
            setLeaderboard(x => x || data[0]);
        },
    });

    return (
        <div className="flex flex-col">

            <div className="flex flex-col my-3 space-y-1">
                <div className="text-lg">
                    Lobbies
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="w-full">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                               className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search for name, map, game mode, server, player name"
                               value={search}
                               onChange={(e) => {
                                   setSearch(e.target.value)
                               }}
                        />
                    </div>
                </div>
            </div>

            {
                leaderboard && (
                    <PlayerList leaderboard={leaderboard} search={search}/>
                )
            }
        </div>
    );
}

export type AoeSpeed = 0 | 1 | 2 | 3;

const speedFactorDict = {
    0: 1.0,
    1: 1.5,
    2: 1.7,
    3: 2.0,
}

export function getSpeedFactor(speed: AoeSpeed) {
    if (speed == null) return 1;
    return speedFactorDict[speed];
}

const formatDuration = (durationInSeconds: number) => {
    if (!durationInSeconds) return '00:00'; // divide by 0 protection
    const minutes = Math.abs(Math.floor(durationInSeconds / 60) % 60).toString();
    const hours = Math.abs(Math.floor(durationInSeconds / 60 / 60)).toString();
    return `${hours.length < 2 ? hours : hours}:${minutes.length < 2 ? 0 + minutes : minutes} h`;
};

function formatMatchDuration(match: IMatchesMatch) {
    let duration: string = '';
    if (match.finished) {
        return formatAgo(match.started);
    }
    if (match.started) {
        const finished = match.finished || new Date();
        duration = formatDuration(differenceInSeconds(finished, match.started) * getSpeedFactor(match.speed as AoeSpeed));
    }
    return duration;
}

interface IChangedEntity {
    type: 'lobby' | 'player';
    id: number;
    data: any;
}

export function PlayerList({
                               leaderboard,
                               search,
                           }: { leaderboard: ILeaderboardDef, search: string }) {
    // const [lobbiesDict, setLobbiesDict] = useState<any>({});
    const [lobbies, setLobbies] = useState<ILobbiesMatch[]>([]);
    const [filteredLobbies, setFilteredLobbies] = useState<ILobbiesMatch[]>([]);
    const [expandedDict, setExpandedDict] = useState<{ [key: string]: boolean }>({});

    const toggleExpanded = (matchId: number) => {
        expandedDict[matchId] = !expandedDict[matchId];
        setExpandedDict({...expandedDict});
    };

    useEffect(() => {
        initLobbySubscription(
            () => {

            },
            (_lobbies: any[]) => {
                setLobbies(_lobbies);
            });
    }, []);

    // useEffect(() => {
    //     setLobbies(Object.values(lobbiesDict) as ILobbiesMatch[]);
    // }, [lobbiesDict]);

    useEffect(() => {
        const parts = search.toLowerCase().split(' ');
        const filtered = lobbies.filter((match) => {
            // console.log(match);
            if (search === '') return true;
            return parts.every(part => {
                return match.name.toLowerCase().includes(part.toLowerCase()) ||
                    match.mapName.toLowerCase().includes(part.toLowerCase()) ||
                    match.gameModeName.toLowerCase().includes(part.toLowerCase()) ||
                    match.server.toLowerCase().includes(part.toLowerCase()) ||
                    match.players.some((player) => player.name?.toLowerCase().includes(part.toLowerCase()));
            });
        });
        setFilteredLobbies(filtered);
    }, [lobbies, search]);

    // console.log('data', data);

    const handleJoin = (e: React.MouseEvent<HTMLButtonElement>, matchId: number) => {
        window.location.href = `aoe2de://0/${matchId}`;
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className="flex flex-col">

            <div className="my-4 text-sm text-gray-500">
                <span>There are {lobbies?.length} open lobbies.</span>
                Click on a row to show player list
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">

                    </th>
                    <th scope="col" className="py-3 px-6">
                        Map / Mode / Duration
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Game Mode
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Avg Rating
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Server
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" className="py-3 px-6">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredLobbies?.map((match, index) =>
                        <Fragment key={match.matchId}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                onClick={() => toggleExpanded(match.matchId)}
                            >

                                <td className="py-4 pl-6">
                                    <FontAwesomeIcon
                                        icon={expandedDict[match.matchId] ? faChevronDown : faChevronRight}
                                        className="w-6 h-6"
                                        color="grey"
                                    />
                                </td>
                                <td className="py-4 px-6">

                                    <div className="flex flex-row space-x-4 items-center w-[200px]">
                                        <img src={match.mapImageUrl} className="w-16 h-16"/>

                                        <div className="flex flex-col">
                                            <div className="font-bold">
                                                {match.mapName}
                                            </div>
                                            <div>{match.name}</div>
                                        </div>
                                    </div>

                                </td>
                                <td className="py-4 px-6">
                                    {match.gameModeName}
                                </td>
                                <td className="py-4 px-6">
                                    ~{match.averageRating?.toFixed(0)}
                                </td>
                                <td className="py-4 px-6">
                                    {match.server} {match.players.length}
                                </td>
                                <td className="py-4 px-6">
                                    {match.blockedSlotCount} / {match.totalSlotCount}
                                </td>
                                <td className="py-4 px-6">
                                    <button disabled={match.blockedSlotCount >= match.totalSlotCount}
                                            className="bg-green-500 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                                            onClick={(e) => handleJoin(e, match.matchId)}
                                    >Join
                                    </button>
                                </td>
                            </tr>
                            {
                                expandedDict[match.matchId] && (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                        <td className="py-4 px-6">
                                        </td>
                                        <td className="py-4 px-6" colSpan={6}>

                                            <div className="flex flex-row space-x-4">
                                                <div className="flex flex-row items-center space-x-3">
                                                    <div className="flex flex-col space-y-3">
                                                        {
                                                            match.players.map((player, playerIndex) => (
                                                                <Player key={playerIndex} player={player}/>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            }
                        </Fragment>
                    )
                }
                </tbody>
            </table>

            {/*<div className="flex flex-row justify-center p-4">*/}
            {/*    <button*/}
            {/*        className="btn btn-primary"*/}
            {/*        onClick={() => fetchNextPage()}*/}
            {/*        disabled={!hasNextPage || isFetchingNextPage}*/}
            {/*    >*/}
            {/*        {isFetchingNextPage*/}
            {/*            ? 'Loading more...'*/}
            {/*            : hasNextPage*/}
            {/*                ? 'Load More'*/}
            {/*                : 'Nothing more to load'}*/}
            {/*    </button>*/}
            {/*    <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>*/}
            {/*</div>*/}

        </div>
    );
}


interface Props {
    player: IMatchesMatchPlayer;
}

export function Player({player}: Props) {
    return (
        <div className="flex flex-row space-x-2 items-center">
            <div className="w-[16px]">
                {
                    player.won === true && player.team != -1 &&
                    <FontAwesomeIcon icon={faCrown} className="w-[16px]" color="goldenrod"/>
                }
                {
                    player.won === false && player.team != -1 &&
                    <FontAwesomeIcon icon={faSkull} className="w-[16px]" color="grey"/>
                }
            </div>

            <div className="flex flex-row items-center justify-center w-5 h-5 border border-black text-black"
                 style={{backgroundColor: player.colorHex}}>
                {player.color}
            </div>
            <div className="w-9">{player.rating}</div>
            <Link href='/profile/[profileId]' as={`/profile/${player.profileId}`}>
                <div className="w-[150px] truncate cursor-pointer hover:underline">
                    {player.name}
                </div>
            </Link>
            <Link href='/profile/[profileId]' as={`/profile/${player.profileId}`}>
                <div className="flex flex-row space-x-1 items-center">
                    {
                        player.civ &&
                        <>
                            <img src={player.civImageUrl} className="w-[18px]"/>
                            <div className="w-[100px] truncate">{player.civName}</div>
                        </>
                    }
                </div>
            </Link>
        </div>
    )
}

