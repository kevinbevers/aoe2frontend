import {fromUnixTime} from "date-fns";
import {fetchJson, makeQueryString} from "./util";
import {camelizeKeys, decamelizeKeys} from "humps";
import {
    IFetchLeaderboardParams,
    IFetchMatchesParams,
    IFetchProfileParams,
    ILeaderboard,
    ILeaderboardDef,
    IMatchesResult, IProfilesResult
} from "./api.types";

// const baseUrl = 'https://data.aoe2companion.com';
const baseUrl = 'http://localhost:3334';

export async function fetchProfile(params: IFetchProfileParams) {
    console.log('fetchProfile', params);
    const queryString = makeQueryString(decamelizeKeys({
        ...params,
        page: params.pageParam || 1,
    }));
    const url = `${baseUrl}/api/profile?${queryString}`;
    return camelizeKeys(await fetchJson('fetchProfile', url)) as IProfilesResult;
}

export async function fetchMatches(params: IFetchMatchesParams) {
    console.log('fetchMatches', params);
    const queryString = makeQueryString(decamelizeKeys({
        ...params,
        page: params.pageParam || 1,
    }));
    const url = `${baseUrl}/api/matches?${queryString}`;
    return camelizeKeys(await fetchJson('fetchMatches', url)) as IMatchesResult;
}

export async function fetchLeaderboard(params: IFetchLeaderboardParams) {
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

