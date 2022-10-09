import {useState} from "react";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {flatten} from "next/dist/shared/lib/flatten";
import Link from "next/link";
import {useRouter} from "next/router";
import {fetchLeaderboards, fetchMatches, fetchProfile} from "../../helper/api";
import {ILeaderboardDef, IMatchesMatch, IMatchesMatchPlayer} from "../../helper/api.types";
import useDebounce from "../../hooks/use-debounce";
import {formatAgo} from "../../helper/util";
import {differenceInSeconds} from "date-fns";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown, faSkull} from "@fortawesome/free-solid-svg-icons";


export default function ProfilePage() {
    const profileIdStr = useRouter().query.profileId as string;
    const profileId = profileIdStr ? parseInt(profileIdStr) : null;
    const [leaderboard, setLeaderboard] = useState(null);
    const [search, setSearch] = useState('');

    const leaderboards = useQuery(['matches'], () => fetchLeaderboards(), {
        onSuccess: (data) => {
            setLeaderboard(data[0]);
        },
    });

    // const profile = useQuery(['profile', profileId], () => fetchProfile());

    const profile = useQuery(
        ['profile', profileId],
        (context) => {
        return fetchProfile({
            ...context,
            profileId: profileId,
        });
    });


    // console.log('data', data);

    return (
        <div className="flex flex-col">

            <div className="flex flex-col ml-6 space-y-1">
                <div className="text-lg">
                    {profile?.data?.profiles[0].name}
                </div>
                <div className="text-md">
                    {profile?.data?.profiles[0].games} games
                </div>
            </div>

            <div className="flex flex-row items-center pb-4">
                {/*<div className="">*/}
                {/*    <label htmlFor="table-search" className="sr-only">Search</label>*/}
                {/*    <div className="relative mt-1">*/}
                {/*        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">*/}
                {/*            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"*/}
                {/*                 fill="currentColor"*/}
                {/*                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path fillRule="evenodd"*/}
                {/*                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
                {/*                      clipRule="evenodd"></path>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*        <input type="text" id="table-search"*/}
                {/*               className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                {/*               placeholder="Search for player"*/}
                {/*               onChange={(e) => {*/}
                {/*                   setSearch(e.target.value)*/}
                {/*               }}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="flex-1"></div>

                <div className="flex flex-row space-x-6">
                    {
                        leaderboards?.data?.map((leaderboardDef: ILeaderboardDef) => (
                            <div key={leaderboardDef.leaderboardId}
                                 className={`flex flex-col  cursor-pointer hover:underline
                                            ${leaderboardDef.leaderboardId === leaderboard?.leaderboardId ? 'font-bold' : ''}
                                 `}
                                 onClick={() => setLeaderboard(leaderboardDef)}>
                                {leaderboardDef.abbreviation}
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                leaderboard && profileId && (
                    <PlayerList leaderboard={leaderboard} search={search} profileId={profileId}/>
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


export function PlayerList({
                               leaderboard,
                               search,
                               profileId
                           }: { leaderboard: ILeaderboardDef, search: string, profileId: number }) {
    const debouncedSearch = useDebounce(search, 600);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        ['matches', profileId, debouncedSearch, leaderboard.leaderboardId],
        (context) => {
            return fetchMatches({
                ...context,
                profileIds: [context.queryKey[1] as number],
                search: context.queryKey[2] as string,
                leaderboardIds: [context.queryKey[3] as number],
            });
        }, {
            getNextPageParam: (lastPage, pages) => lastPage.matches.length === lastPage.perPage ? lastPage.page + 1 : null,
            keepPreviousData: true,
        })

    console.log('data', data);

    return (
        <div className="flex flex-col">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Map / Mode / Duration
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Players
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    flatten(data?.pages?.map(p => p.matches) || []).map((match, index) =>
                        <tr key={match.matchId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6">

                                <div className="flex flex-row space-x-4 items-center w-[200px]">
                                    <img src={match.mapImageUrl} className="w-16 h-16"/>

                                    <div className="flex flex-col">
                                        <div className="font-bold">
                                            {match.mapName}
                                        </div>
                                        <div>{match.leaderboardName}</div>
                                        <div>{formatMatchDuration(match)}</div>
                                    </div>
                                </div>

                            </td>
                            <td className="py-4 px-6">

                                {/*<div>{match.teams.length} TEAMS</div>*/}

                                <div className="flex flex-row space-x-4">
                                {
                                    match.teams.map((teamPlayers, index) => (
                                        <div key={index} className="flex flex-row items-center space-x-3">
                                            <div key={index} className="flex flex-col space-y-3">
                                                {
                                                    teamPlayers.map((player) => (
                                                        <Player key={player.profileId} player={player}/>
                                                    ))
                                                }
                                            </div>
                                            {
                                                index < match.teams.length - 1 &&
                                                <div className="">
                                                    <div className="">VS</div>
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                                </div>

                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>

            <div className="flex flex-row justify-center p-4">
                <button
                    className="btn btn-primary"
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </div>

        </div>
    );
}


interface Props {
    player: IMatchesMatchPlayer;
}

export function Player({ player }: Props) {
    // const boxStyle = {backgroundColor: getPlayerBackgroundColor(player.color)};

    return (
        <div className="flex flex-row space-x-2 items-center">
            <div className="">
                {
                    player.won === true && player.team != -1 &&
                    <FontAwesomeIcon icon={faCrown} color="goldenrod" />
                }
                {
                    player.won === false && player.team != -1 &&
                    <FontAwesomeIcon icon={faSkull} className="" color="grey" />
                }
            </div>

            <div className="flex flex-row items-center justify-center w-5 h-5 border border-black text-black" style={{ backgroundColor: player.colorHex }}>
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
                    <img src={player.civImageUrl} className="w-4 h-4"/>
                    <div className="w-[100px] truncate">{player.civName}</div>
                </div>
            </Link>
        </div>
    )
}

