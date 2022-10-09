import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import Link from "next/link";
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import NoSSRWrapper from "../other/no-ssr-wrapper";

function CustomApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <>
            <Head>
                <title>Welcome to web!</title>
            </Head>
            <main className="app">

                <div className="flex flex-col px-6 py-4 min-h-[100vh]">

                    <div className="flex flex-row space-x-14 my-4 items-center">
                        <div className="text-2xl font-bold">
                            <Link href='/' as={`/`}>
                                <a>AoE II Companion</a>
                            </Link>
                        </div>
                        <div className="">
                            <Link href='/' as={`/`}>
                                <a>App</a>
                            </Link>
                        </div>
                        <div className="">
                            <Link href='/leaderboard' as={`/leaderboard`}>
                                <a>Leaderboard</a>
                            </Link>
                        </div>
                    </div>

                    <QueryClientProvider client={queryClient}>
                        <Hydrate state={(pageProps as any).dehydratedState}>
                            <NoSSRWrapper>
                                <Component {...pageProps} />
                            </NoSSRWrapper>
                        </Hydrate>
                        {/*<ReactQueryDevtools />*/}
                    </QueryClientProvider>


                    <div className="flex-1"></div>

                    <p className="pt-4 text-xs md:text-sm text-center max-w-4xl mx-auto px-4 md:px-8">
                        Age of Empires II©
                        Microsoft Corporation. AoE4World.com was created under Microsoft's "
                        <a className="text-gray-500"
                           href="https://www.xbox.com/en-US/developers/rules"
                           rel="noreferrer noopener">Game
                            Content
                            Usage Rules</a>
                        " using assets from
                        <a className="text-gray-500"
                           href="https://www.ageofempires.com/games/age-of-empires-iv/"
                           rel="noreferrer noopener">Age of Empires II</a>
                        , and it is
                        not endorsed
                        by or affiliated with Microsoft.
                    </p>
                </div>

            </main>
        </>
    );
}

export default CustomApp;
