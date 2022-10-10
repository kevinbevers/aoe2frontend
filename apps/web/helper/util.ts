import {formatDistanceToNowStrict} from "date-fns";

export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

interface IParams {
    [key: string]: any;
}

export function removeReactQueryParams(params: any) {
    const {queryKey, pageParam, meta, signal, ...rest} = params;
    return rest;
}

export function makeQueryString(params: IParams) {
    return  new URLSearchParams(params).toString();
    // return Object.keys(params)
    //     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    //     .join('&');
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

function reviver(key, value) {
    // console.log(key, value);
    if (typeof value === "string" && dateFormat.test(value)) {
        // console.log("DATE", value);
        return new Date(value);
    }
    return value;
}

export async function fetchJson(title: string, input: RequestInfo, init?: RequestInit) {
  if (init) {
    console.log(input, init);
  } else {
    console.log(input);
  }
  let response = null;
  try {
    response = await fetch(input, {
        ...init,
        headers: {
            apikey: apiKey,
        },
        // timeout: 60 * 1000,
    });
    const text = await response.text();
    return JSON.parse(text, reviver);
  } catch (e) {
    console.log(input, 'failed', response?.status);
  }
}

export function formatAgo(date: Date) {
    return formatDistanceToNowStrict(date, {addSuffix: true});
    // return formatDistanceToNowStrict(date, {locale: getLocale(), addSuffix: true});
}
