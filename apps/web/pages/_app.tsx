import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import Link from "next/link";
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import NoSSRWrapper from "../other/no-ssr-wrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkull, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import GlobalSearch from "../components/global-search";

function CustomApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                // refetchOnWindowFocus: false,
            },
        },
    }));

    const [search, setSearch] = useState('');

    return (
        <>
            <Head>
                <title>AoE II Companion</title>
                <link rel="icon" type="image/png" href={`/favicon-16x16.png?v=200706014637`} sizes="16x16"/>
                <link rel="icon" type="image/png" href={`/favicon-32x32.png?v=200706014637`} sizes="32x32"/>
                <link rel="icon" type="image/png" href={`/favicon-96x96.png?v=200706014637`} sizes="96x96"/>

            </Head>

            <QueryClientProvider client={queryClient}>
                <Hydrate state={(pageProps as any).dehydratedState}>
                    <NoSSRWrapper>
                        <main className="flex flex-col items-center">

                            <div className="flex flex-col px-6 py-4 min-h-[100vh] w-full max-w-[1200px] m-x-auto">

                                <div className="flex flex-row space-x-14 mt-4 mb-6 items-center">
                                    <div className="text-2xl font-bold">
                                        <Link href='/' as={`/`}>
                                            <a className="cursor-pointer">AoE II Companion</a>
                                        </Link>
                                    </div>

                                    {/*<div className="">*/}
                                    {/*    <label htmlFor="table-search" className="sr-only">Search</label>*/}
                                    {/*    <div className="relative mt-1">*/}
                                    {/*        <div*/}
                                    {/*            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">*/}
                                    {/*            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"*/}
                                    {/*                 aria-hidden="true" fill="currentColor"*/}
                                    {/*                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*                <path fillRule="evenodd"*/}
                                    {/*                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
                                    {/*                      clipRule="evenodd"></path>*/}
                                    {/*            </svg>*/}
                                    {/*        </div>*/}
                                    {/*        <input type="text" id="table-search"*/}
                                    {/*               className="block p-2 pl-10 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                                    {/*               placeholder="Search for player"*/}
                                    {/*               onChange={(e) => {*/}
                                    {/*                   setSearch(e.target.value)*/}
                                    {/*               }}*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <GlobalSearch></GlobalSearch>

                                    <div className="">
                                        <Link href='/leaderboard' as={`/leaderboard`}>
                                            <a className="cursor-pointer hover:underline">Leaderboard</a>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link href='/lobby' as={`/lobby`}>
                                            <a className="cursor-pointer hover:underline">Lobbies</a>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link href='/ongoing' as={`/ongoing`}>
                                            <a className="cursor-pointer hover:underline">Ongoing Matches</a>
                                        </Link>
                                    </div>

                                    <div className="">
                                        <Link href='/' as={`/`}>
                                            <a className="cursor-pointer hover:underline">App</a>
                                        </Link>
                                    </div>

                                    <div className="">
                                        <Link href='/api-nightbot' as={`/api-nightbot`}>
                                            <a className="cursor-pointer hover:underline">Api / Nightbot</a>
                                        </Link>
                                    </div>


                                </div>

                                <Component {...pageProps} />


                                <div className="flex-1"></div>

                                <div className="flex flex-row space-x-14 mt-4 mb-6 items-center">
                                    <div className="">
                                        <a href="https://status.aoe2companion.com" target="_blank"
                                           className="flex flex-row space-x-2 items-center cursor-pointer hover:underline">
                                            <span>Status</span>
                                            <FontAwesomeIcon icon={faUpRightFromSquare} className="w-4 h-4"
                                                             color="grey"/>
                                        </a>
                                    </div>
                                </div>

                                <p className="pt-8 pb-4 text-xs md:text-sm text-center max-w-4xl mx-auto px-4 md:px-8">
                                    Age of Empires II©
                                    Microsoft Corporation. aoe2companion.com was created under Microsoft's "
                                    <a className="text-gray-500"
                                       href="https://www.xbox.com/en-US/developers/rules"
                                       rel="noreferrer noopener">Game
                                        Content
                                        Usage Rules</a>
                                    " using assets from <a className="text-gray-500"
                                                           href="https://www.ageofempires.com/games/aoeiide/"
                                                           rel="noreferrer noopener">Age of Empires II</a>
                                    , and it is
                                    not endorsed
                                    by or affiliated with Microsoft.
                                </p>
                            </div>

                        </main>
                    </NoSSRWrapper>
                </Hydrate>
                {/*<ReactQueryDevtools />*/}
            </QueryClientProvider>
        </>
    );
}

export default CustomApp;
