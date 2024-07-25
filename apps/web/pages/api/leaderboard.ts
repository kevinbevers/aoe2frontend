import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { fromUnixTime, getUnixTime, isAfter, subSeconds } from 'date-fns';
import { fetchLeaderboard } from '../../helper/api';

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
        isAfter(fromUnixTime(mostRecentFile), subSeconds(new Date(), 10))
    ) {
        const cachedData = fs.readFileSync(`${folder}/${mostRecentFile}.json`);

        return response.status(200).json(JSON.parse(cachedData.toString()));
    } else {
        const data = await fetchLeaderboard({
            leaderboardId: 'ew_1v1_redbullwololo' as unknown as number,
            extend: 'max_rating,verified,players.country_icon',
            perPage: 50,
        });

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
