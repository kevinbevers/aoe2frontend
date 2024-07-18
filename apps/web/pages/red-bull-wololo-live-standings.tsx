import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboard, fetchProfile } from '../helper/api';
import { ILeaderboardDef, ILeaderboardPlayer } from '../helper/api.types';
import { orderBy } from 'lodash';
import { formatAgo } from '../helper/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

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
        <main className="flex flex-row px-12 py-8 gap-8 text-white min-h-screen items-center relative">
            <div className="absolute bg-[url('/red-bull-wololo-el-reinado-background.jpg')] bg-cover inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black" />
            <div className="flex-1 relative">
                <p className="text-lg pb-8">
                    On the 28th of July, the four players with the
                    highest-achieved rating will be directly invited to the main
                    event at Castillo de Almodóvar del Río in Spain.
                </p>

                <PlayerList leaderboard={leaderboard} search="" />

                <div className="flex flex-row gap-2 items-center justify-end py-4">
                    <div className="w-6 h-6 bg-[#D00E4D]"></div>
                    <p className="text-lg uppercase font-semibold">
                        In Qualified Position
                    </p>
                </div>
            </div>

            <img
                src="/red-bull-wololo-el-reinado.png"
                className="h-[635px] w-[473px] relative"
            />
        </main>
    );
}

const addMaxRatingToPlayer = async (
    player: ILeaderboardPlayer,
    leaderboardId: string | number
) => {
    const { leaderboards, countryIcon } = await fetchProfile({
        profileId: player.profileId,
    });

    const leaderboard = leaderboards.find(
        (rating) => rating.leaderboardId === leaderboardId
    );

    return {
        ...player,
        countryIcon,
        rating: leaderboard.rating,
        maxRating: leaderboard.maxRating ?? 0,
    };
};

export function PlayerList({
    leaderboard,
    search,
}: {
    leaderboard: ILeaderboardDef;
    search: string;
}) {
    const { data, isFetching, refetch } = useQuery(
        ['leaderboard-players', leaderboard.leaderboardId],
        async (context) => {
            const { players, ...rest } = await fetchLeaderboard({
                ...context,
                leaderboardId: context.queryKey[1] as number,
            });

            const playersWithRatings = await Promise.all(
                players
                    .slice(0, 25)
                    .map((player) =>
                        addMaxRatingToPlayer(player, context.queryKey[1])
                    )
            );

            return { ...rest, players: playersWithRatings };
        },
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );

    const players = orderBy(data?.players, 'maxRating', 'desc')?.slice(0, 10);

    return (
        <div>
            <div className="pb-2 mb-8 border-b-2 border-[#EAC65E] flex flex-row justify-between items-center">
                <h2 className="text-5xl uppercase font-bold">Current Top 10</h2>

                <button onClick={() => refetch()}>
                    <FontAwesomeIcon
                        spin={isFetching}
                        icon={faArrowsRotate}
                        color="#EAC65E"
                        size="lg"
                    />
                </button>
            </div>
            {!players || players.length === 0 ? (
                <p className="text-lg text-center">
                    {isFetching ? 'Loading...' : 'Unable to fetch players'}
                </p>
            ) : (
                <table className={`w-full text-sm text-left`}>
                    <thead className={`text-lg uppercase`}>
                        <tr>
                            <th scope="col" className="py-2 px-6">
                                Player
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Highest Rating
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Current Rating
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Wins
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Games
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Last Match
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={player.profileId} className="">
                                <th
                                    scope="row"
                                    className={`py-3 px-6 font-bold text-lg flex flex-row items-center gap-2 border-t border-t-gray-700 ${
                                        index < 4
                                            ? 'border-l-4 border-[#D00E4D]'
                                            : ''
                                    }`}
                                >
                                    <span className="text-2xl">
                                        {player.countryIcon}
                                    </span>
                                    <span>{player.name}</span>
                                </th>
                                <td className="py-3 px-6 text-lg font-bold border-t border-t-gray-700">
                                    {player.maxRating}
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700">
                                    {player.rating}
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700">
                                    {(
                                        (player.wins / player.games) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700">
                                    {player.games}
                                </td>
                                <td className="py-3 px-6 text-lg border-t border-t-gray-700">
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
