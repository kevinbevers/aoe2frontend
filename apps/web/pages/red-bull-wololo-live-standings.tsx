import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboard, fetchMatches } from '../helper/api';
import {
    ILeaderboardDef,
    ILeaderboardPlayer,
    ILobbiesMatch,
} from '../helper/api.types';
import { isEmpty, orderBy, uniqBy } from 'lodash';
import { formatAgo } from '../helper/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faArrowsRotate,
    faCaretDown,
    faCaretUp,
    faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import { differenceInSeconds, format, formatISO, getUnixTime } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import {
    AoeSpeed,
    formatDuration,
    getSpeedFactor,
    initMatchSubscription,
} from './ongoing';
import { useTransition, animated, SpringValue } from 'react-spring';

export function Index() {
    const leaderboard = {
        abbreviation: 'RB 1v1',
        abbreviationSubtitle: '1v1',
        abbreviationTitle: 'RB',
        active: true,
        leaderboardId: 'ew_1v1_redbullwololo',
        leaderboardName: 'Red Bull Wololo 1v1',
    } as unknown as ILeaderboardDef;

    return (
        <main className="flex flex-row px-12 py-8 gap-12 text-white min-h-screen items-center relative">
            <div className="fixed bg-[url('/red-bull-wololo-el-reinado-background.jpg')] bg-cover inset-0" />
            <div className="fixed inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black" />
            <div className="flex-1 relative">
                <PlayerList leaderboard={leaderboard} search="" />
            </div>

            <div className="relative w-[473px] flex flex-col gap-4">
                <img
                    src="/red-bull-wololo-el-reinado.png"
                    className="h-[506px] w-[384px]"
                />
                <p className="text-lg pb-8 inline-block text-center">
                    On the 28th of July, the four players with the
                    highest-achieved rating will be directly invited to the main
                    event at Castillo de Almodóvar del Río in Spain.
                </p>
            </div>
        </main>
    );
}

export function PlayerList({
    leaderboard,
    search,
}: {
    leaderboard: ILeaderboardDef;
    search: string;
}) {
    const [time, setTime] = useState(new Date());
    const [initialRankings, setInitialRankings] = useState<
        Record<string, number>
    >({});
    const [sort, setSort] = useState(['maxRating', 'desc'] as [
        keyof ILeaderboardPlayer,
        'desc' | 'asc'
    ]);
    const [matches, setMatches] = useState<ILobbiesMatch[]>([]);
    const [events, setEvents] = useState<
        Array<{ match: ILobbiesMatch; event: 'added' | 'removed' }>
    >([]);
    const [connected, setConnected] = useState(false);
    const [screenTime, refreshScreen] = useState(getUnixTime(new Date()));
    const ref = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refreshScreen(getUnixTime(new Date()));
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const connect = async (profileIds?: number[]) => {
        return await initMatchSubscription(
            {
                onOpen: () => {
                    setConnected(true);
                },
                onClose: () => {
                    setConnected(false);
                },
                onMatches: (games: ILobbiesMatch[]) => {
                    setMatches(
                        games.filter(
                            (game) =>
                                game.leaderboardId === leaderboard.leaderboardId
                        )
                    );
                },
                onMatchAdded: (match: ILobbiesMatch) => {
                    if (match.leaderboardId === leaderboard.leaderboardId) {
                        setEvents((prev) => [
                            ...prev.filter(
                                (e) => e.match.matchId !== match.matchId
                            ),
                            { event: 'added', match },
                        ]);
                    }
                },
                onMatchRemoved: (match: ILobbiesMatch) => {
                    if (match.leaderboardId === leaderboard.leaderboardId) {
                        setEvents((prev) => [
                            ...prev.filter(
                                (e) => e.match.matchId !== match.matchId
                            ),
                            { event: 'removed', match },
                        ]);

                        setTimeout(() => {
                            refetch();
                        }, 1000);
                    }
                },
            },
            profileIds
        );
    };

    const { data, isFetching, refetch, isLoading } = useQuery(
        ['leaderboard-players', leaderboard.leaderboardId],
        async (context) => {
            const leaderboardData = await fetchLeaderboard({
                ...context,
                leaderboardId: context.queryKey[1] as number,
                extend: 'max_rating,verified,players.country_icon',
                perPage: 25,
            });

            const profileIds = orderBy(
                events.filter((e) => e.event === 'removed'),
                ({ match }) => match.finished,
                'desc'
            )
                .flatMap((e) => e.match.players.map((p) => p.profileId))
                .slice(0, 4);

            let leaderboardPlayers = leaderboardData.players;

            if (profileIds && profileIds.length > 0) {
                const { matches } = await fetchMatches({
                    ...context,
                    leaderboardIds: context.queryKey[1] as unknown as number[],
                    profileIds: profileIds.join(',') as unknown as number[],
                });

                const matchPlayers = uniqBy(
                    matches
                        ?.flatMap((match) =>
                            match.teams.flatMap((team) => team.players)
                        )
                        .filter((p) => p.rating && p.ratingDiff),
                    'profileId'
                );

                leaderboardPlayers = leaderboardData.players.map((p) => {
                    const player = matchPlayers.find(
                        (x) => x.profileId === p.profileId
                    );

                    if (player) {
                        const rating = player.rating + player.ratingDiff;
                        return {
                            ...p,
                            rating,
                            maxRating:
                                rating > p.maxRating ? rating : p.maxRating,
                        };
                    } else {
                        return p;
                    }
                });
            }

            setTime(new Date());

            return { ...leaderboardData, players: leaderboardPlayers };
        },
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );

    const invitedPlayerIds = [196240, 197388];

    const playerNames = Object.fromEntries(
        data?.players.map((p) => [p.profileId, p.name]) ?? []
    );
    const allProfileIds = data?.players.map((p) => p.profileId);

    useEffect(() => {
        let socket = null;
        if (!isFetching && allProfileIds && allProfileIds.length > 0) {
            connect(allProfileIds).then((s) => (socket = s));
        }
        return () => {
            socket?.close();
        };
    }, [isFetching]);

    const sortedPlayerIds = orderBy(data?.players, 'maxRating', 'desc')
        ?.slice(0, 25)
        .map((p) => p.profileId);
    const qualifiedPlayers = sortedPlayerIds?.slice(0, 4);
    const players = orderBy(data?.players, ...sort)?.slice(0, 25);

    const transitions = useTransition(
        players.map((data, i) => ({ ...data, y: i * 64 })),
        {
            from: { position: 'absolute', opacity: 0 } as {
                opacity: number;
                position: React.CSSProperties['position'];
            },
            leave: { height: 0, opacity: 0 },
            enter: ({ y }) => ({ y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            key: (item) => item?.name,
        }
    );

    useEffect(() => {
        if (!isLoading && isEmpty(initialRankings) && sortedPlayerIds) {
            setInitialRankings(
                Object.fromEntries(
                    sortedPlayerIds.map((pid, index) => [pid, index + 1])
                )
            );
        }
    }, [isLoading]);

    return (
        <div>
            <div className="pb-2 mb-8 border-b-2 border-[#EAC65E] flex flex-row justify-between items-center">
                <h2 className="text-5xl uppercase font-bold">
                    Current Top Players
                </h2>

                <div className="flex gap-2">
                    <time dateTime={formatISO(time)}>
                        Last updated {format(time, 'PPpp')}
                    </time>

                    <button onClick={() => refetch()}>
                        <FontAwesomeIcon
                            spin={isFetching}
                            icon={faArrowsRotate}
                            color="#EAC65E"
                            size="lg"
                        />
                    </button>
                </div>
            </div>
            {!players || players.length === 0 ? (
                <p className="text-lg text-center">
                    {isFetching ? 'Loading...' : 'Unable to fetch players'}
                </p>
            ) : (
                <table className={`w-full text-sm text-left relative z-40`}>
                    <thead className={`text-lg uppercase block`}>
                        <tr className="flex">
                            <th
                                scope="col"
                                className="py-2 px-6 w-20 whitespace-nowrap block border-l-4 border-transparent"
                            >
                                Rank
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-72 whitespace-nowrap block"
                            >
                                Player
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-48 whitespace-nowrap block"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSort([
                                            'maxRating',
                                            sort[1] === 'asc' ||
                                            sort[0] !== 'maxRating'
                                                ? 'desc'
                                                : 'asc',
                                        ])
                                    }
                                >
                                    Highest Rating{' '}
                                    <FontAwesomeIcon
                                        icon={
                                            sort[1] === 'asc'
                                                ? faAngleUp
                                                : faAngleDown
                                        }
                                        color={
                                            sort[0] === 'maxRating'
                                                ? 'white'
                                                : 'transparent'
                                        }
                                    />
                                </button>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-48 whitespace-nowrap block"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSort([
                                            'rating',
                                            sort[1] === 'asc' ||
                                            sort[0] !== 'rating'
                                                ? 'desc'
                                                : 'asc',
                                        ])
                                    }
                                >
                                    Current Rating{' '}
                                    <FontAwesomeIcon
                                        icon={
                                            sort[1] === 'asc'
                                                ? faAngleUp
                                                : faAngleDown
                                        }
                                        color={
                                            sort[0] === 'rating'
                                                ? 'white'
                                                : 'transparent'
                                        }
                                    />
                                </button>
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-64 whitespace-nowrap block"
                            >
                                Last Match
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-24 whitespace-nowrap block"
                            >
                                Win %
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-24 whitespace-nowrap block"
                            >
                                Games
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        className="min-h-[640px] block overflow-y-scroll overflow-x-hidden"
                        ref={ref}
                    >
                        {transitions((style, player, { key }, index) => {
                            const match = matches.find((m) =>
                                m.players.some(
                                    (p) => p.profileId === player.profileId
                                )
                            );

                            const isQualified = qualifiedPlayers.includes(
                                player.profileId
                            );

                            return (
                                <PlayerRow
                                    style={{
                                        ...style,
                                        zIndex: 100 - (index + 1),
                                        height:
                                            index === players.length - 1
                                                ? 204
                                                : 64,
                                        paddingBottom:
                                            index === players.length - 1
                                                ? 140
                                                : 0,
                                    }}
                                    initialRank={
                                        initialRankings[player.profileId]
                                    }
                                    rank={
                                        sortedPlayerIds.findIndex(
                                            (pid) => player.profileId === pid
                                        ) + 1
                                    }
                                    player={player}
                                    key={key}
                                    playerNames={playerNames}
                                    match={match}
                                    status={
                                        isQualified
                                            ? 'qualified'
                                            : invitedPlayerIds?.includes(
                                                  player.profileId
                                              )
                                            ? 'invited'
                                            : 'none'
                                    }
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}

            <div className="flex fixed inset-0 top-auto bg-black z-50 px-8 py-4 gap-8 justify-between items-center">
                <div className="flex flex-row gap-6 justify-end py-4">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 bg-[#EAC65E]" />
                        <p className="text-lg uppercase font-semibold inline-block pt-1 whitespace-nowrap">
                            Invited
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 bg-[#D00E4D]" />
                        <p className="text-lg uppercase font-semibold inline-block pt-1 whitespace-nowrap">
                            In Qualified Position
                        </p>
                    </div>
                </div>

                {events && events.length > 0 && (
                    <div className="flex-1">
                        <p className="text-lg">Activity</p>
                        <div className="flex gap-2 flex-wrap h-20 overflow-hidden">
                            {orderBy(
                                events,
                                ({ event, match }) =>
                                    event === 'added'
                                        ? match.started
                                        : match.finished,
                                'desc'
                            ).map(({ event, match }) => (
                                <div
                                    className="flex flex-col bg-blue-800 px-2 pt-2 pb-1 rounded h-20 justify-between min-w-[180px] relative"
                                    key={`${event}-${match.matchId}`}
                                >
                                    <div className="flex gap-1 self-center">
                                        <img
                                            src={match.players[0]?.civImageUrl}
                                            className="w-5 h-5"
                                        />
                                        <span className="whitespace-nowrap">
                                            <b>
                                                {playerNames[
                                                    match.players[0]?.profileId
                                                ] ?? match.players[0]?.name}
                                            </b>{' '}
                                            vs{' '}
                                            <b>
                                                {playerNames[
                                                    match.players[1]?.profileId
                                                ] ?? match.players[1]?.name}
                                            </b>
                                        </span>
                                        <img
                                            src={match.players[1]?.civImageUrl}
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    {event === 'added' ? (
                                        <div className="flex gap-2 justify-between">
                                            <b className="text-[#EAC65E]">
                                                LIVE
                                            </b>

                                            <time
                                                dateTime={formatISO(
                                                    match.started
                                                )}
                                            >
                                                {formatDuration(
                                                    differenceInSeconds(
                                                        match.finished ||
                                                            new Date(),
                                                        match.started
                                                    ) *
                                                        getSpeedFactor(
                                                            match.speed as AoeSpeed
                                                        )
                                                )}
                                            </time>
                                        </div>
                                    ) : (
                                        <p className="whitespace-nowrap">
                                            Game ended
                                        </p>
                                    )}
                                    <div className="flex justify-between items-center">
                                        <time
                                            className="whitespace-nowrap text-xs"
                                            dateTime={formatISO(
                                                event === 'added'
                                                    ? match.started
                                                    : match.finished
                                            )}
                                        >
                                            {formatAgo(
                                                event === 'added'
                                                    ? match.started
                                                    : match.finished
                                            )}
                                        </time>

                                        {event === 'added' && (
                                            <a
                                                href={`aoe2de://1/${match.matchId}`}
                                                target="_blank"
                                                className="text-[#EAC65E]"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faExternalLink}
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const PlayerRow = ({
    player,
    match,
    playerNames,
    initialRank,
    rank,
    status = 'none',
    style,
}: {
    player: ILeaderboardPlayer;
    playerNames: Record<string, string>;
    initialRank?: number;
    rank?: number;
    match?: ILobbiesMatch;
    status?: 'invited' | 'qualified' | 'none';
    style?: {
        position: SpringValue<React.CSSProperties['position']>;
        opacity: SpringValue<number>;
    } & Omit<React.CSSProperties, 'position' | 'opacity'>;
}) => {
    const opponent = match?.players.find(
        (p) => p.profileId !== player.profileId
    );
    const opponentName = playerNames[opponent?.profileId] ?? opponent?.name;
    const statusClasses: Record<'invited' | 'qualified' | 'none', string> = {
        invited: 'border-[#EAC65E]',
        qualified: 'border-[#D00E4D]',
        none: 'border-transparent',
    };

    return (
        <animated.tr
            key={player.profileId}
            className="flex"
            style={style}
            data-id={player.profileId}
        >
            <Cell className={`w-20 border-l-4 ${statusClasses[status]}`}>
                {rank && (
                    <div className="flex gap-2 items-center">
                        #{rank}
                        {initialRank && initialRank !== rank && (
                            <FontAwesomeIcon
                                icon={
                                    initialRank > rank ? faCaretUp : faCaretDown
                                }
                                color={
                                    initialRank > rank ? '#22C55E' : '#EF4444'
                                }
                                className={
                                    initialRank > rank ? '-mt-0.5' : '-mt-1.5'
                                }
                            />
                        )}
                    </div>
                )}
            </Cell>
            <Cell className="font-bold w-72">
                <span className="text-2xl mr-2 align-middle">
                    {player.countryIcon}
                </span>
                <span className="text-ellipsis overflow-hidden">
                    {player.name}
                </span>
            </Cell>
            <Cell className="font-bold w-48">{player.maxRating}</Cell>
            <Cell className="w-48">{player.rating}</Cell>
            <Cell className="w-64 group py-2">
                {match ? (
                    <div className="relative cursor-pointer">
                        <div className="text-base">
                            <b className="text-[#EAC65E]">LIVE</b> on{' '}
                            {match.mapName}
                            <br />
                            <p className="text-sm">vs {opponentName}</p>
                        </div>
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 mx-auto scale-0 bg-blue-800 rounded-lg border-gray-800 px-3 py-2 group-hover:scale-100 z-20 flex flex-row w-80 gap-3 items-center text-sm shadow-2xl">
                            <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-blue-800 absolute -top-2 mx-auto left-0 right-0"></div>
                            <img
                                src={match.mapImageUrl}
                                className="w-16 h-16"
                            />
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <b className="text-base font-semibold">
                                        {match.mapName}
                                    </b>
                                    <time dateTime={formatISO(match.started)}>
                                        {formatDuration(
                                            differenceInSeconds(
                                                match.finished || new Date(),
                                                match.started
                                            ) *
                                                getSpeedFactor(
                                                    match.speed as AoeSpeed
                                                )
                                        )}
                                    </time>
                                </div>
                                {match.players.map((p) => (
                                    <div
                                        className="flex justify-between"
                                        key={p.profileId}
                                    >
                                        <div className="flex gap-1.5">
                                            <img
                                                src={p.civImageUrl}
                                                className="w-5 h-5"
                                            />
                                            <span>
                                                {playerNames[p.profileId] ??
                                                    p.name}
                                            </span>
                                        </div>

                                        {p.rating}
                                    </div>
                                ))}
                                <a
                                    href={`aoe2de://1/${match.matchId}`}
                                    target="_blank"
                                    className="text-[#EAC65E]"
                                    rel="noreferrer"
                                >
                                    <span className="underline">Spectate</span>{' '}
                                    <FontAwesomeIcon icon={faExternalLink} />
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    formatAgo(player.lastMatchTime)
                )}
            </Cell>
            <Cell className="w-24">
                {((player.wins / player.games) * 100).toFixed(0)}%
            </Cell>
            <Cell className="w-24">{player.games}</Cell>
        </animated.tr>
    );
};

const Cell = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <td
        className={`py-3 px-6 text-lg border-t border-t-gray-700 whitespace-nowrap flex items-center ${className}`}
    >
        {children}
    </td>
);

export default Index;
