import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { fromUnixTime, getUnixTime, isAfter, subSeconds } from 'date-fns';
import { fetchLeaderboard, fetchMatches } from '../../helper/api';

export const config = {
    maxDuration: 30,
};

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const folder = '/tmp/leaderboards';
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    const files = fs.readdirSync(folder);
    const sortedFiles = files
        .map((f) => Number(f.replace('.json', '')))
        .sort()
        .reverse();
    const mostRecentFile = sortedFiles[0];
    const oldFiles = sortedFiles.slice(1);

    oldFiles.forEach((file) => {
        fs.rmSync(`${folder}/${file}.json`);
    });

    if (
        mostRecentFile &&
        isAfter(fromUnixTime(mostRecentFile), subSeconds(new Date(), 15))
    ) {
        const cachedData = fs.readFileSync(`${folder}/${mostRecentFile}.json`);

        return response.status(200).json(JSON.parse(cachedData.toString()));
    } else {
        const leaderboard = await fetchLeaderboard({
            leaderboardId: 'ew_1v1_redbullwololo' as unknown as number,
            extend: 'max_rating,verified,players.country_icon',
            perPage: 50,
        });

        if (!leaderboard?.players?.length) {
            throw new Error('Server Error: Leaderboard');
        }
        const profileIds = leaderboard?.players?.map((p) => p.profileId);

        const matchData = await fetchMatches({
            profileIds: profileIds.join(',') as unknown as number[],
        });

        if (!matchData?.matches?.length) {
            throw new Error('Server Error: Matches');
        }

        const data = {
            leaderboard,
            matches: matchData.matches.filter(
                (match) => match.leaderboardId === leaderboard.leaderboardId
            ),
        };

        fs.writeFileSync(
            `/tmp/leaderboards/${getUnixTime(new Date())}.json`,
            JSON.stringify(data),
            {
                flag: 'w',
            }
        );
        return response.status(200).json(data);
    }
}
