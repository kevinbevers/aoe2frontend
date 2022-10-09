
export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

interface IParams {
    [key: string]: any;
}

export function makeQueryString(params: IParams) {
    return  new URLSearchParams(params).toString();
    // return Object.keys(params)
    //     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    //     .join('&');
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

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
    return await response.json();
  } catch (e) {
    console.log(input, 'failed', response?.status);
  }
}
