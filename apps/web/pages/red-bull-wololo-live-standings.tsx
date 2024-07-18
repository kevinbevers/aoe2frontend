import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboard } from '../helper/api';
import { ILeaderboardDef, ILeaderboardPlayer } from '../helper/api.types';
import { orderBy } from 'lodash';
import { formatAgo } from '../helper/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';
import { format, formatISO, getUnixTime } from 'date-fns';
import { useEffect, useState } from 'react';

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
            <div className="absolute bg-[url('/red-bull-wololo-el-reinado-background.jpg')] bg-cover inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black" />
            <div className="flex-1 relative">
                <PlayerList leaderboard={leaderboard} search="" />

                <div className="flex flex-row gap-2 items-center justify-end py-4">
                    <div className="w-6 h-6 bg-[#D00E4D]"></div>
                    <p className="text-lg uppercase font-semibold">
                        In Qualified Position
                    </p>
                </div>
            </div>

            <div className="relative w-[473px] flex flex-col gap-4">
                <img
                    src="/red-bull-wololo-el-reinado.png"
                    className="h-[635px] w-[473px]"
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
    const [sort, setSort] = useState(['maxRating', 'desc'] as [
        keyof ILeaderboardPlayer,
        'desc' | 'asc'
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 60000);
        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { data, isFetching, refetch } = useQuery(
        ['leaderboard-players', leaderboard.leaderboardId],
        async (context) => {
            const leaderboardData = await fetchLeaderboard({
                ...context,
                leaderboardId: context.queryKey[1] as number,
                extend: 'max_rating,verified,players.country_icon',
                perPage: 25,
            });

            setTime(new Date());

            return leaderboardData;
        },
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );

    const qualifiedPlayers = orderBy(data?.players, 'maxRating', 'desc')
        ?.slice(0, 4)
        .map((p) => p.profileId);
    const players = orderBy(data?.players, ...sort)?.slice(0, 10);

    return (
        <div>
            <div className="pb-2 mb-8 border-b-2 border-[#EAC65E] flex flex-row justify-between items-center">
                <h2 className="text-5xl uppercase font-bold">Current Top 10</h2>

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
                <table className={`w-full text-sm text-left`}>
                    <thead className={`text-lg uppercase`}>
                        <tr>
                            <th
                                scope="col"
                                className="py-2 px-6 w-72 whitespace-nowrap"
                            >
                                Player
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 w-56 whitespace-nowrap"
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
                                className="py-2 px-6 w-56 whitespace-nowrap"
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
                                className="py-2 px-6 whitespace-nowrap"
                            >
                                Wins
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 whitespace-nowrap"
                            >
                                Games
                            </th>
                            <th
                                scope="col"
                                className="py-2 px-6 whitespace-nowrap"
                            >
                                Last Match
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={player.profileId} className="">
                                <th
                                    scope="row"
                                    className={`py-3 px-6 font-bold text-lg border-t border-l-4 border-t-gray-700 w-72 whitespace-nowrap ${
                                        qualifiedPlayers.includes(
                                            player.profileId
                                        )
                                            ? 'border-[#D00E4D]'
                                            : 'border-transparent'
                                    }`}
                                >
                                    <span className="text-2xl mr-2 align-middle">
                                        {player.countryIcon}
                                    </span>
                                    <span className="text-ellipsis overflow-hidden">
                                        {player.name}
                                    </span>
                                </th>
                                <td className="py-3 px-6 text-lg font-bold border-t border-t-gray-700 w-56 whitespace-nowrap">
                                    {player.maxRating}
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700 w-56 whitespace-nowrap">
                                    {player.rating}
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700 whitespace-nowrap">
                                    {(
                                        (player.wins / player.games) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700 whitespace-nowrap">
                                    {player.games}
                                </td>
                                <td
                                    className="py-3 px-6 text-lg border-t border-t-gray-700 whitespace-nowrap"
                                    key={getUnixTime(time).toString()}
                                >
                                    {formatAgo(player.lastMatchTime)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Index;
