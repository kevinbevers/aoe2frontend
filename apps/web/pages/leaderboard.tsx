import {useState} from "react";
import {fetchLeaderboard, fetchLeaderboards} from "../helper/api";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {flatten} from "next/dist/shared/lib/flatten";
import {ILeaderboardDef} from "../helper/api.types";
import useDebounce from "../hooks/use-debounce";
import Link from "next/link";
import {formatAgo} from "../helper/util";


export default function Index() {
    const [leaderboard, setLeaderboard] = useState(null);
    const [search, setSearch] = useState('');

    const {
        data,
    } = useQuery(['leaderboards'], () => fetchLeaderboards(), {
        onSuccess: (data) => {
            setLeaderboard(data[0]);
        },
    });

    // console.log('data', data);

    return (
        <div className="flex flex-col">

            <div className="flex flex-row items-center">
                <div className="">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                               className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search for player"
                               onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="flex-1"></div>

                <div className="flex flex-row space-x-6">
                    {
                        data?.map((leaderboardDef: ILeaderboardDef) => (
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

            <div className="my-4 text-sm text-gray-500">
                Click on a player name to view their profile and match history
            </div>

            {
                leaderboard && (
                    <PlayerList leaderboard={leaderboard} search={search}/>
                )
            }
        </div>
    );
}

export function PlayerList({leaderboard, search}: { leaderboard: ILeaderboardDef, search: string }) {
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
        ['leaderboard-players', debouncedSearch, leaderboard.leaderboardId],
        (context) => {
            return fetchLeaderboard({
                ...context,
                search: context.queryKey[1] as string,
                leaderboardId: context.queryKey[2] as number,
            });
        }, {
            getNextPageParam: (lastPage, pages) => lastPage.page + 1,
            keepPreviousData: true,
        })

    console.log('data', data);

    return (
        <div className="flex flex-col">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        #
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Rating
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Wins
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Games
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Last Match
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    flatten(data?.pages?.map(p => p.players) || []).map((player, index) =>
                        <tr key={player.profileId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6">
                                {player.rank}
                            </td>
                            <th scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Link href={`/profile/[profileId]`} as={`/profile/${player.profileId}`}>
                                    <div className="cursor-pointer hover:underline">
                                        {player.name}
                                    </div>
                                </Link>
                            </th>
                            <td className="py-4 px-6">
                                {player.rating}
                            </td>
                            <td className="py-4 px-6">
                                {(player.wins / player.games * 100).toFixed(0)} %
                            </td>
                            <td className="py-4 px-6">
                                {player.games}
                            </td>
                            <td className="py-4 px-6">
                                {formatAgo(player.lastMatchTime)}
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
