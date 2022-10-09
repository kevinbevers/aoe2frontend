import {fromUnixTime} from "date-fns";
import {fetchJson, makeQueryString} from "./util";
import {camelizeKeys, decamelizeKeys} from "humps";
import {IFetchLeaderboardParams, ILeaderboard, ILeaderboardDef} from "./api.types";

// const baseUrl = 'https://data.aoe2companion.com';
const baseUrl = 'http://localhost:3334';

export async function fetchLeaderboard(params: IFetchLeaderboardParams) {

    console.log(params);

    const queryString = makeQueryString(decamelizeKeys({
        ...params,
        page: params.pageParam || 1,
    }));

    const url = `${baseUrl}/api/leaderboard/${params.leaderboardId}?${queryString}`;
    return camelizeKeys(await fetchJson('fetchLeaderboard', url)) as ILeaderboard;
}


export async function fetchLeaderboards() {
    const url = `${baseUrl}/api/leaderboard`;
    return camelizeKeys(await fetchJson('fetchLeaderboards', url)) as ILeaderboardDef[];
}

