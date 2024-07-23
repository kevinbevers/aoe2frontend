/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboard, fetchMatches, fetchProfile } from '../helper/api';
import {
    ILeaderboardDef,
    ILeaderboardPlayer,
    ILobbiesMatch,
} from '../helper/api.types';
import { isEmpty, merge, orderBy, uniqBy } from 'lodash';
import {
    formatAgo,
    formatDateShort,
    formatMonth,
    formatTime,
    formatYear,
} from '../helper/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faArrowsRotate,
    faCaretDown,
    faCaretUp,
    faCrown,
    faExternalLink,
    faSkull,
    faSpinner,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
    differenceInSeconds,
    format,
    formatISO,
    getUnixTime,
    isAfter,
    subWeeks,
} from 'date-fns';
import { Fragment, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { AoeSpeed, getSpeedFactor, initMatchSubscription } from './ongoing';
import { useTransition, animated, SpringValue } from 'react-spring';
import { Dialog, Transition } from '@headlessui/react';
import {
    LineSegment,
    VictoryAxis,
    VictoryChart,
    VictoryLine,
    VictoryScatter,
    VictoryTheme,
} from 'victory';
import { getConfig } from '../helper/config';
import Countdown from 'react-countdown';

const config = getConfig();
const endDate = new Date(1722178800000);

const formatDuration = (durationInSeconds: number) => {
    if (!durationInSeconds) return '00:00'; // divide by 0 protection
    const minutes = Math.abs(
        Math.floor(durationInSeconds / 60) % 60
    ).toString();
    const hours = Math.abs(Math.floor(durationInSeconds / 60 / 60)).toString();
    return `${hours.length < 2 ? hours : hours}:${
        minutes.length < 2 ? 0 + minutes : minutes
    } h`;
};

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
        <main
            className="flex flex-col 2xl:flex-row px-4 md:px-12 py-8 gap-12 text-white min-h-screen relative items-center 2xl:items-stretch"
            style={{ colorScheme: 'dark' }}
        >
            <div className="fixed bg-[url('/red-bull-wololo-el-reinado-background.jpg')] bg-cover inset-0" />
            <div className="fixed inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black" />
            <div className="flex-1 relative order-2 2xl:order-1 self-center md:self-start xl:self-center 2xl:self-center">
                <PlayerList leaderboard={leaderboard} search="" />
                <Footer className="block 2xl:hidden" />
            </div>

            <div className="relative w-[384px] flex flex-col justify-between order-1 2xl:order-2">
                <div className="flex flex-col gap-4">
                    <img
                        src="/red-bull-wololo-el-reinado.png"
                        className="h-[506px] w-[384px]"
                    />
                    <p className="text-lg inline-block text-center">
                        On the 28th of July, the four players with the
                        highest-achieved rating will be directly invited to the
                        main event at Castillo de Almodóvar del Río in Spain.
                    </p>

                    <Countdown
                        date={endDate}
                        renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                        }) => {
                            return (
                                <div className="bg-blue-800 px-4 py-2 rounded-lg flex flex-col items-center justify-center">
                                    {completed ? (
                                        <p className="text-2xl font-bold">
                                            Qualification has Ended
                                        </p>
                                    ) : (
                                        <>
                                            <div className="font-bold">
                                                Qualification ends in...
                                            </div>
                                            <div className="flex justify-center text-center">
                                                {(days > 0
                                                    ? [
                                                          ['DAY', days],
                                                          ['HRS', hours],
                                                          ['MIN', minutes],
                                                          ['SEC', seconds],
                                                      ]
                                                    : [
                                                          ['HRS', hours],
                                                          ['MIN', minutes],
                                                          ['SEC', seconds],
                                                      ]
                                                ).map(([label, seg], index) => (
                                                    <>
                                                        {index !== 0 && (
                                                            <div className="w-8 text-2xl font-bold">
                                                                :
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="text-2xl font-bold leading-tight">
                                                                {seg
                                                                    .toString()
                                                                    .padStart(
                                                                        2,
                                                                        '0'
                                                                    )}
                                                            </div>
                                                            <div className="text-sm">
                                                                {label}
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        }}
                    />

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
                </div>

                <Footer className="hidden 2xl:block" />
            </div>
        </main>
    );
}

export const Footer = ({ className }: { className?: string }) => (
    <div className={className}>
        <p className="text-center mb-4 italic">
            Inspired by{' '}
            <a
                className="underline"
                href="https://www.twitch.tv/dave_aoe"
                target="_blank"
                rel="noreferrer"
            >
                Dave_AoE
            </a>
            &apos;s{' '}
            <a
                href="/dave-aoe-redbull-graphic.jpg"
                target="_blank"
                className="underline"
            >
                amazing graphic
            </a>
        </p>
        <p className="text-center mb-4 italic">
            For bug reports or suggestions, join the Discord below
        </p>
        <div className="flex gap-2 justify-center mb-4">
            <a
                href="https://discord.gg/gCunWKx"
                target="_blank"
                rel="noreferrer"
            >
                <img src="https://img.shields.io/discord/727175083977736262.svg?label=Discord&logo=discord&logoColor=ffffff&labelColor=7289DA&color=2c2f33" />
            </a>
            <div style={{ height: '10px' }} />
            <a
                href="https://www.buymeacoffee.com/denniskeil"
                target="_blank"
                rel="noreferrer"
            >
                <img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshields-io-buymeacoffee.vercel.app%2Fapi%3Fusername%3Ddenniskeil" />
            </a>
        </div>
        <p className="text-xs text-center">
            Age of Empires II© Microsoft Corporation. {config.host} was created
            under Microsoft&apos;s &quot;
            <a
                className="text-gray-500"
                href="https://www.xbox.com/en-US/developers/rules"
                rel="noreferrer noopener"
            >
                Game Content Usage Rules
            </a>
            &quot; using assets from{' '}
            <a
                className="text-gray-500"
                href={config.ms.url}
                rel="noreferrer noopener"
            >
                {config.ms.name}
            </a>
            , and it is not endorsed by or affiliated with Microsoft.
        </p>
    </div>
);

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

                        const profileIds = match.players.map(
                            (p) => p.profileId
                        );

                        setTimeout(async () => {
                            const { matches } = await fetchMatches({
                                leaderboardIds:
                                    leaderboard.leaderboardId as unknown as number[],
                                profileIds: profileIds.join(
                                    ','
                                ) as unknown as number[],
                            });

                            setEvents((prev) =>
                                prev.map((e) => {
                                    if (
                                        e.event === 'removed' &&
                                        matches
                                            .map((m) => m.matchId)
                                            .includes(e.match.matchId)
                                    ) {
                                        const newMatchPlayers = matches
                                            .find(
                                                (m) =>
                                                    m.matchId ===
                                                    e.match.matchId
                                            )
                                            ?.teams.flatMap((t) => t.players);
                                        return {
                                            ...e,
                                            match: {
                                                ...e.match,
                                                players: e.match.players.map(
                                                    (x) => {
                                                        const newP =
                                                            newMatchPlayers.find(
                                                                (p) =>
                                                                    x.profileId ===
                                                                    p.profileId
                                                            );
                                                        return {
                                                            ...x,
                                                            rating: newP.rating,
                                                            ratingDiff:
                                                                newP.ratingDiff,
                                                        };
                                                    }
                                                ),
                                            },
                                        };
                                    } else {
                                        return e;
                                    }
                                })
                            );

                            refetch();
                        }, 15000);
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
                perPage: 50,
            });

            const matchPlayers = uniqBy(
                events
                    ?.flatMap(({ match }) => match.players)
                    .filter((p) => p.rating && p.ratingDiff),
                'profileId'
            );

            const leaderboardPlayers = leaderboardData.players.map((p) => {
                const player = matchPlayers.find(
                    (x) => x.profileId === p.profileId
                );

                if (player) {
                    const rating = player.rating + player.ratingDiff;
                    return {
                        ...p,
                        rating,
                        maxRating: rating > p.maxRating ? rating : p.maxRating,
                    };
                } else {
                    return p;
                }
            });

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
        data?.players.map((p) => [
            p.profileId,
            { name: p.name, icon: p.countryIcon },
        ]) ?? []
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

    const mappedPlayers = data?.players.map((player) => {
        const match =
            events.find((e) =>
                e.match.players.some((p) => p.profileId === player.profileId)
            )?.match ??
            matches.find((m) =>
                m.players.some((p) => p.profileId === player.profileId)
            );

        return {
            ...player,
            wins: (player.wins / player.games) * 100,
            lastMatchTime:
                match?.started ?? match?.finished ?? player.lastMatchTime,
        };
    });
    const sortedPlayerIds = orderBy(mappedPlayers, 'maxRating', 'desc')
        ?.slice(0, 25)
        .map((p) => p.profileId);
    const qualifiedPlayers = sortedPlayerIds?.slice(0, 4);
    const players = orderBy(
        orderBy(mappedPlayers, 'maxRating', 'desc')?.slice(0, 25),
        ...sort
    )?.slice(0, 25);

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
            <div className="pb-2 mb-8 border-b-2 border-[#EAC65E] flex flex-col md:flex-row justify-between items-center">
                <h2 className="text-xl md:text-5xl uppercase font-bold">
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
            <table className={`w-full text-sm text-left relative z-20`}>
                <thead className={`text-lg uppercase block`}>
                    <tr className="flex">
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-20 hidden md:block"
                        >
                            Rank
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-48 md:w-72"
                        >
                            Player
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-48"
                            columnName="maxRating"
                        >
                            Highest Rating
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-48 hidden md:block"
                            columnName="rating"
                        >
                            Current Rating
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-64 hidden md:block"
                            columnName="lastMatchTime"
                        >
                            Last Match
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-24 hidden md:block"
                            columnName="wins"
                        >
                            Win %
                        </HeadCell>
                        <HeadCell
                            sort={sort}
                            setSort={setSort}
                            className="w-24 hidden md:block"
                            columnName="games"
                        >
                            Games
                        </HeadCell>
                    </tr>
                </thead>
                <tbody className="block min-h-[1600px]" ref={ref}>
                    {!players || players.length === 0 ? (
                        <tr className="flex h-96 items-center justify-center">
                            <FontAwesomeIcon spin icon={faSpinner} size="2xl" />
                        </tr>
                    ) : (
                        transitions((style, player, { key }, index) => {
                            const match =
                                events.find((e) =>
                                    e.match.players.some(
                                        (p) => p.profileId === player.profileId
                                    )
                                )?.match ??
                                matches.find((m) =>
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
                                        height: 64,
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
                        })
                    )}
                </tbody>
            </table>
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
    playerNames: Record<string, { name: string; icon?: string }>;
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
    const opponentName =
        playerNames[opponent?.profileId]?.name ?? opponent?.name;
    const statusClasses: Record<'invited' | 'qualified' | 'none', string> = {
        invited: 'border-[#EAC65E]',
        qualified: 'border-[#D00E4D]',
        none: 'border-transparent',
    };
    const { ratingDiff } =
        match?.players.find((p) => p.profileId === player.profileId) ?? {};

    const [isOpen, setIsOpen] = useState(false);

    return (
        <animated.tr
            key={player.profileId}
            className="flex"
            style={style}
            data-id={player.profileId}
        >
            <Cell
                className={`w-20 border-l-4 hidden md:flex ${statusClasses[status]}`}
            >
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
                <PlayerModal
                    playerNames={playerNames}
                    player={{ ...player, rank }}
                    onClose={() => setIsOpen(false)}
                    isVisible={isOpen}
                />
            </Cell>
            <Cell
                className="font-bold w-48 md:w-72 cursor-pointer hover:text-[#EAC65E] transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <span className="text-2xl mr-2 align-middle">
                    {player.countryIcon}
                </span>
                <span className="text-ellipsis overflow-hidden">
                    {player.name}
                </span>
            </Cell>
            <Cell className="font-bold w-48">{player.maxRating}</Cell>
            <Cell className="w-48 hidden md:flex">{player.rating}</Cell>
            <Cell className="w-64 group py-2 hidden md:flex">
                {match ? (
                    <div className="relative cursor-pointer max-w-full">
                        {match.finished ? (
                            <div className="text-base">
                                {formatAgo(match.finished)}
                                <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                    {ratingDiff
                                        ? `${
                                              ratingDiff > 0 ? 'Gained' : 'Lost'
                                          } ${Math.abs(ratingDiff)} points ${
                                              ratingDiff > 0 ? 'from' : 'to'
                                          } `
                                        : 'vs '}
                                    {opponentName}
                                </p>
                            </div>
                        ) : (
                            <div className="text-base">
                                <b className="text-[#EAC65E]">LIVE</b> on{' '}
                                {match.mapName}
                                <br />
                                <p className="text-sm">vs {opponentName}</p>
                            </div>
                        )}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 mx-auto scale-0 bg-blue-800 rounded-lg border-gray-800 px-3 py-2 group-hover:scale-100 z-10 flex flex-row w-96 gap-3 items-center text-sm shadow-2xl transition-transform">
                            <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-blue-800 absolute -top-2 mx-auto left-0 right-0"></div>
                            <MatchCard
                                userId={player.profileId}
                                match={match}
                                playerNames={playerNames}
                            />
                        </div>
                    </div>
                ) : (
                    formatAgo(player.lastMatchTime)
                )}
            </Cell>
            <Cell className="w-24 hidden md:flex">
                {player.wins.toFixed(0)}%
            </Cell>
            <Cell className="w-24 hidden md:flex">{player.games}</Cell>
        </animated.tr>
    );
};

const HeadCell = ({
    className,
    children,
    columnName,
    sort,
    setSort,
    ...props
}: {
    className?: string;
    children: React.ReactNode;
    columnName?: keyof ILeaderboardPlayer;
    sort: [keyof ILeaderboardPlayer, 'desc' | 'asc'];
    setSort: (s: [keyof ILeaderboardPlayer, 'desc' | 'asc']) => void;
} & HTMLAttributes<HTMLTableCellElement>) => (
    <th
        scope="col"
        className={`py-2 px-6 whitespace-nowrap block ${className}`}
        {...props}
    >
        <button
            type="button"
            disabled={!columnName}
            onClick={() =>
                setSort([
                    columnName,
                    sort[1] === 'asc' || sort[0] !== columnName
                        ? 'desc'
                        : 'asc',
                ])
            }
        >
            {children}
            {columnName && (
                <>
                    {' '}
                    <FontAwesomeIcon
                        icon={sort[1] === 'asc' ? faAngleUp : faAngleDown}
                        color={sort[0] === columnName ? 'white' : 'transparent'}
                    />
                </>
            )}
        </button>
    </th>
);

const Cell = ({
    className,
    children,
    ...props
}: {
    className?: string;
    children: React.ReactNode;
} & HTMLAttributes<HTMLTableCellElement>) => (
    <td
        className={`py-3 px-6 text-lg border-t border-t-gray-700 whitespace-nowrap flex items-center ${className}`}
        {...props}
    >
        {children}
    </td>
);

const MatchCard = ({
    match,
    playerNames,
    userId,
}: {
    userId?: number;
    match: ILobbiesMatch;
    playerNames: Record<string, { name: string; icon?: string }>;
}) => {
    return (
        <div className="relative flex flex-row gap-3 items-center text-sm w-full">
            {match.players.some(
                (p) => p.profileId === userId && p.won === true
            ) && (
                <FontAwesomeIcon
                    icon={faCrown}
                    color="#f9b806"
                    className="absolute top-1"
                />
            )}

            {match.players.some(
                (p) => p.profileId === userId && p.won === false
            ) && <FontAwesomeIcon icon={faSkull} className="absolute top-1" />}

            {!match.finished && (
                <a
                    href={`aoe2de://1/${match.matchId}`}
                    target="_blank"
                    className="text-[#EAC65E] absolute top-0"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faExternalLink} />
                </a>
            )}

            <img src={match.mapImageUrl} className="w-16 h-16" />
            <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between">
                    <b className="text-base font-semibold">{match.mapName}</b>
                    <time
                        dateTime={formatISO(match.started)}
                        className="flex gap-2 items-center"
                    >
                        {match.finished
                            ? formatAgo(match.finished)
                            : formatDuration(
                                  differenceInSeconds(
                                      match.finished || new Date(),
                                      match.started
                                  ) * getSpeedFactor(match.speed as AoeSpeed)
                              )}
                    </time>
                </div>
                {match.players.map((p) => (
                    <div className="flex justify-between" key={p.profileId}>
                        <div className="flex gap-1.5">
                            <img src={p.civImageUrl} className="w-5 h-5" />
                            <span
                                className={
                                    p.profileId === userId ? 'font-bold' : ''
                                }
                            >
                                {playerNames[p.profileId]?.name ?? p.name}
                            </span>
                        </div>

                        <span className="flex gap-2">
                            {p.ratingDiff && (
                                <span
                                    className={
                                        p.ratingDiff > 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {signed(p.ratingDiff)}
                                </span>
                            )}
                            {p.rating}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const formatTick = (tick: any, index: number, ticks: any[]) => {
    const date = ticks[index] as Date;
    if (
        date.getMonth() == 0 &&
        date.getDate() == 1 &&
        date.getHours() == 0 &&
        date.getMinutes() == 0 &&
        date.getSeconds() == 0
    ) {
        return formatYear(date);
    }
    if (
        date.getDate() == 1 &&
        date.getHours() == 0 &&
        date.getMinutes() == 0 &&
        date.getSeconds() == 0
    ) {
        return formatMonth(date);
    }
    if (
        date.getHours() == 0 &&
        date.getMinutes() == 0 &&
        date.getSeconds() == 0
    ) {
        return formatDateShort(date);
    }
    return formatTime(ticks[index]);
};

const PlayerModal = ({
    player,
    onClose,
    isVisible,
    playerNames,
}: {
    player: ILeaderboardPlayer;
    isVisible: boolean;
    onClose: () => void;
    playerNames: Record<string, { name: string; icon?: string }>;
}) => {
    const { data, isLoading } = useQuery(
        ['leaderboard-player', player.profileId],
        async (context) => {
            const { matches } = await fetchMatches({
                leaderboardIds: 'ew_1v1_redbullwololo' as unknown as number[],
                profileIds: player.profileId as unknown as number[],
            });

            return matches;
        },
        {
            enabled: isVisible,
            staleTime: 30 * 1000,
        }
    );
    const { data: profile, isLoading: isProfileLoading } = useQuery(
        ['leaderboard-player-stats', player.profileId],
        () =>
            fetchProfile({
                profileId: player.profileId,
                extend: 'stats',
            }),
        {
            enabled: isVisible,
            staleTime: 5 * 60 * 1000,
        }
    );

    let streakText = '';
    if (player.streak === 1) {
        streakText = 'Win';
    } else if (player.streak > 1) {
        streakText = 'Wins';
    } else if (player.streak === -1) {
        streakText = 'Loss';
    } else {
        streakText = 'Losses';
    }

    let ratingHistory = profile?.ratings?.find(
        (r) => r.leaderboardId === 'ew_1v1_redbullwololo'
    );
    const since = subWeeks(new Date(), 1);

    ratingHistory = ratingHistory
        ? {
              ...ratingHistory,
              ratings: ratingHistory.ratings.filter(
                  (d) => since == null || isAfter(d.date, since)
              ),
          }
        : undefined;

    const themeCustomizations = {
        axis: {
            style: {
                tickLabels: {
                    fill: 'white',
                },
            },
        },
    };

    const stats = profile?.stats.find(
        (s) => s.leaderboardId === 'ew_1v1_redbullwololo'
    );

    const chartTheme = merge({ ...VictoryTheme.material }, themeCustomizations);

    const tabs = ['Civilizations', 'Maps', 'Opponents'] as const;
    const [tab, setTab] = useState<typeof tabs[number]>('Civilizations');
    let tabData: Array<{
        games: number;
        wins: number;
        key: string;
        imageUrl?: string;
        name: string;
        icon?: string;
    }> = [];
    if (stats) {
        switch (tab) {
            case 'Civilizations':
                tabData = stats.civ.map((c) => ({
                    ...c,
                    key: c.civ,
                    imageUrl: c.civImageUrl,
                    name: c.civName,
                }));
                break;
            case 'Maps':
                tabData = stats.map.map((m) => ({
                    ...m,
                    key: m.map,
                    imageUrl: m.mapImageUrl,
                    name: m.mapName,
                }));
                break;
            case 'Opponents':
                tabData = stats.opponents.map((o) => ({
                    ...o,
                    key: o.profileId.toString(),
                    name: playerNames[o.profileId]?.name ?? o.name,
                    icon: playerNames[o.profileId]?.icon ?? o.countryIcon,
                }));
                break;
            default:
                tabData = [];
                break;
        }
    }

    tabData = orderBy(tabData, ['games', 'wins'], ['desc', 'desc']);

    return (
        <>
            <Transition appear show={isVisible} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div
                        className="fixed inset-0 overflow-y-auto"
                        style={{ colorScheme: 'dark' }}
                    >
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full md:max-w-md lg:max-w-6xl transform overflow-hidden rounded-2xl bg-blue-950 p-6 text-left align-middle shadow-xl transition-all text-white">
                                    <div className="flex justify-between">
                                        <Dialog.Title
                                            as="h2"
                                            className="text-xl font-semibold"
                                        >
                                            <span className="text-3xl mr-2 align-middle">
                                                {player.countryIcon}
                                            </span>
                                            {player.name}
                                        </Dialog.Title>

                                        <button onClick={onClose}>
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                size="xl"
                                            />
                                        </button>
                                    </div>

                                    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-stretch">
                                        <div className="flex-1 flex flex-col gap-3">
                                            <h3 className="text-lg font-bold -mb-2">
                                                Statistics
                                            </h3>
                                            <div className="flex flex-wrap gap-3 justify-center">
                                                {[
                                                    {
                                                        name: 'Rank',
                                                        value: `#${player.rank}`,
                                                        desc: `${
                                                            player.rank > 4
                                                                ? `${
                                                                      player.rank -
                                                                      4
                                                                  } Below Qualifying`
                                                                : 'Qualified Position'
                                                        }`,
                                                    },
                                                    {
                                                        name: 'Highest Rating',
                                                        value: player.maxRating,
                                                        desc: `Current Rating ${player.rating}`,
                                                    },
                                                    {
                                                        name: 'Streak',
                                                        value: `${player.streak}`,
                                                        desc: `${Math.abs(
                                                            player.streak
                                                        )} ${streakText} in a Row`,
                                                    },
                                                    {
                                                        name: 'Games Played',
                                                        value: `${player.games}`,
                                                        desc: `${player.wins} Wins, ${player.losses} Losses`,
                                                    },
                                                ].map((stat) => (
                                                    <div
                                                        className="bg-blue-800 rounded-lg border border-gray-800 p-2 items-center text-center w-36"
                                                        key={stat.name}
                                                    >
                                                        <div className="stat-title">
                                                            {stat.name}
                                                        </div>
                                                        <div className="text-2xl">
                                                            {stat.value}
                                                        </div>
                                                        <div className="text-xs">
                                                            {stat.desc}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {ratingHistory && (
                                                <VictoryChart
                                                    width={350}
                                                    height={250}
                                                    theme={chartTheme}
                                                    padding={{
                                                        left: 50,
                                                        bottom: 30,
                                                        top: 20,
                                                        right: 20,
                                                    }}
                                                    scale={{ x: 'time' }}
                                                >
                                                    <VictoryAxis
                                                        crossAxis
                                                        gridComponent={
                                                            <LineSegment
                                                                active={false}
                                                                style={{
                                                                    stroke: 'transparent',
                                                                }}
                                                            />
                                                        }
                                                        tickFormat={formatTick}
                                                        tickCount={7}
                                                    />
                                                    <VictoryAxis
                                                        dependentAxis
                                                        crossAxis
                                                        gridComponent={
                                                            <LineSegment
                                                                active={false}
                                                                style={{
                                                                    stroke: '#272e43',
                                                                }}
                                                            />
                                                        }
                                                    />
                                                    <VictoryLine
                                                        name={
                                                            'line-' +
                                                            ratingHistory.leaderboardId
                                                        }
                                                        key={
                                                            'line-' +
                                                            ratingHistory.leaderboardId
                                                        }
                                                        data={
                                                            ratingHistory.ratings
                                                        }
                                                        x="date"
                                                        y="rating"
                                                        style={{
                                                            data: {
                                                                stroke: '#D00E4D',
                                                            },
                                                        }}
                                                    />
                                                    <VictoryScatter
                                                        name={
                                                            'scatter-' +
                                                            ratingHistory.leaderboardId
                                                        }
                                                        key={
                                                            'scatter-' +
                                                            ratingHistory.leaderboardId
                                                        }
                                                        data={
                                                            ratingHistory.ratings
                                                        }
                                                        x="date"
                                                        y="rating"
                                                        size={1.5}
                                                        style={{
                                                            data: {
                                                                fill: 'red',
                                                            },
                                                        }}
                                                    />
                                                </VictoryChart>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col gap-3 h-[500px] lg:overflow-y-scroll">
                                            <h3 className="text-lg font-bold -mb-2">
                                                Winrates
                                            </h3>
                                            {isProfileLoading ||
                                            !ratingHistory ? (
                                                <FontAwesomeIcon
                                                    spin
                                                    icon={faSpinner}
                                                    size="2xl"
                                                />
                                            ) : (
                                                <>
                                                    <div className="flex gap-2">
                                                        {tabs.map((t) => (
                                                            <button
                                                                onClick={() =>
                                                                    setTab(t)
                                                                }
                                                                className={`flex-1 uppercase font-bold text-xs px-4 pt-2 pb-1.5 rounded ${
                                                                    tab === t
                                                                        ? 'bg-gold-700'
                                                                        : ''
                                                                }`}
                                                                key={t}
                                                            >
                                                                {t}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div
                                                        className={`flex flex-col ${
                                                            tab === 'Opponents'
                                                                ? 'gap-0'
                                                                : 'gap-3'
                                                        }`}
                                                    >
                                                        <div
                                                            className={`flex text-xs font-bold  ${
                                                                tab ===
                                                                'Opponents'
                                                                    ? 'mb-2'
                                                                    : ''
                                                            }`}
                                                        >
                                                            <div className="flex-1">
                                                                {tab.replace(
                                                                    /(s)$/,
                                                                    ''
                                                                )}
                                                            </div>
                                                            <div className="w-12 text-right">
                                                                Games
                                                            </div>
                                                            <div className="w-16 text-right">
                                                                Won
                                                            </div>
                                                        </div>
                                                        {tabData.map((row) => (
                                                            <div
                                                                key={row.key}
                                                                className="flex items-center"
                                                            >
                                                                <div className="flex gap-2 flex-1 items-center">
                                                                    {row.imageUrl ? (
                                                                        <img
                                                                            src={
                                                                                row.imageUrl
                                                                            }
                                                                            className="w-5 h-5"
                                                                        />
                                                                    ) : (
                                                                        <span className="text-lg align-middle">
                                                                            {
                                                                                row.icon
                                                                            }
                                                                        </span>
                                                                    )}
                                                                    {row.name}
                                                                </div>

                                                                <div className="w-12 text-right">
                                                                    {row.games}
                                                                </div>
                                                                <div className="w-16 text-right">
                                                                    {(
                                                                        (row.wins /
                                                                            row.games) *
                                                                        100
                                                                    ).toFixed(
                                                                        0
                                                                    )}
                                                                    %
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col gap-3 h-[500px] lg:overflow-y-scroll">
                                            <h3 className="text-lg font-bold -mb-2">
                                                Recent Games
                                            </h3>
                                            {isLoading ? (
                                                <FontAwesomeIcon
                                                    spin={isLoading}
                                                    icon={faSpinner}
                                                    size="2xl"
                                                />
                                            ) : (
                                                data?.map((match) => (
                                                    <div
                                                        key={match.matchId}
                                                        className="bg-blue-800 rounded-lg border border-gray-800 px-3 py-2"
                                                    >
                                                        <MatchCard
                                                            userId={
                                                                player.profileId
                                                            }
                                                            match={{
                                                                ...match,
                                                                players:
                                                                    match.teams.flatMap(
                                                                        (t) =>
                                                                            t.players
                                                                    ),
                                                                totalSlotCount: 0,
                                                                blockedSlotCount: 0,
                                                                gameModeName:
                                                                    '',
                                                                averageRating: 0,
                                                            }}
                                                            playerNames={
                                                                playerNames
                                                            }
                                                        />
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

function signed(number: number) {
    if (number == null || number === 0) return '';
    return number > 0 ? '↑' + number : '↓' + Math.abs(number);
}

export default Index;
