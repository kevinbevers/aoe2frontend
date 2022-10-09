import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="antialiased bg-body text-body text-white font-body bg-gray-800">
    <nav
      className="bg-gray-800 border-b border-gray-600 w-full sticky z-50 top-0 xl:overflow-visible whitespace-nowrap drop-shadow-2xl">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap xl:flex-nowrap items-center">
        <div className="h-[4.5rem]"></div>
        <a
          className="inline-block text-2xl text-white font-bold z-10 focus py-2 my-3 px-3 ml-2 md:ml-5 2xl:-ml-3 rounded-lg focus:outline-none focus:ring focus:ring-white"
          href="/">AoE4 World </a><input
        className="xl:hidden peer appearance-none w-14 absolute right-0 top-0 h-[4.5rem]" type="checkbox"/>
        <div
          className="xl:hidden peer-checked:hidden pointer-events-none grid place-content-center w-14 absolute right-0 top-0 text-gray-100 text-xl h-[4.5rem]">
          <i className="far fa-bars"></i></div>
        <div
          className="hidden peer-checked:flex items-center z-50 bg-gray-700 border-b border-gray-500 w-full pointer-events-none absolute right-0 top-0 xl:!hidden h-[4.5rem]">
          <span className="text-lg font-bold px-5">Navigate to...</span>
          <div className="h-full ml-auto w-14 grid place-content-center text-gray-100 text-xl"><i
            className="far fa-xmark"></i></div>
        </div>
        <ul
          className="overflow-y-auto xl:overflow-visible hidden peer-checked:flex xl:flex basis-full xl:basis-auto xl:justify-evenly flex-auto 2xl:mx-3 flex-col xl:flex-row xl:items-center max-h-[calc(100vh-4.5rem)]">
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a
              className="block font-normal relative py-2 px-5 text-gray-50 z-10 hover:text-white active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white xl:block flex-auto xl:group-hover:bg-gray-600 xl:group-focus-within:bg-gray-600 xl:rounded-t"
              href="/leaderboard/rm_1v1">Leaderboard<i aria-hidden="true"
                                                       className="hidden xl:inline fa fa-angle-down ml-2 text-xs"></i></a>
            <div className="h-14 xl:hidden"></div>
            <input className="xl:hidden basis-14 peer appearance-none bg-gray-600 h-14" type="checkbox"/>
            <div
              className="xl:hidden absolute right-0 top-0 h-14 w-14 pointer-events-none grid place-content-center peer-checked:rotate-180">
              <i aria-hidden="true" className="fa fa-angle-down text-xs"></i></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]"
              style={{columns: 'auto 1'}}>
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-white font-bold"
                href="/leaderboard/rm_1v1" target="">Ranked Match 1v1</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/leaderboard/qm_1v1" target="">Quick Match 1v1</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/leaderboard/qm_2v2" target="">Quick Match 2v2</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/leaderboard/qm_3v3" target="">Quick Match 3v3</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/leaderboard/qm_4v4" target="">Quick Match 4v4</a></li>
              <li className="pt-5 first:pt-0 whitespace-normal" style={{columnSpan: 'all', minWidth: '250px'}}><p
                className="text-sm text-gray-300">Browse the rankings, profiles and matches of multiplayer game
                modes</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a
              className="block font-normal relative py-2 px-5 text-gray-50 z-10 hover:text-white active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white xl:block flex-auto xl:group-hover:bg-gray-600 xl:group-focus-within:bg-gray-600 xl:rounded-t"
              href="/explorer">Explorer<i aria-hidden="true"
                                          className="hidden xl:inline fa fa-angle-down ml-2 text-xs"></i></a>
            <div className="h-14 xl:hidden"></div>
            <input className="xl:hidden basis-14 peer appearance-none bg-gray-600 h-14" type="checkbox"/>
            <div
              className="xl:hidden absolute right-0 top-0 h-14 w-14 pointer-events-none grid place-content-center peer-checked:rotate-180">
              <i aria-hidden="true" className="fa fa-angle-down text-xs"></i></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]"
              style={{columns: auto 2;">
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/abbasid" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/abbasid_dynasty-b722e3e4ee862226395c692e73cd14c18bc96c3469874d2e0d918305c70f8a69.png"/>Abbasid
                Dynasty</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/chinese" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/chinese-2d4edb3d7fc7ab5e1e2df43bd644aba4d63992be5a2110ba3163a4907d0f3d4e.png"/>Chinese</a>
              </li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/delhi" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/delhi_sultanate-7f92025d0623b8e224533d9f28b9cd7c51a5ff416ef3edaf7cc3e948ee290708.png"/>Delhi
                Sultanate</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/english" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/english-8c6c905d0eb11d6d314b9810b2a0b9c09eec69afb38934f55b329df36468daf2.png"/>English</a>
              </li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/french" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/french-c3474adb98d8835fb5a86b3988d6b963a1ac2a8327d136b11fb0fd0537b45594.png"/>French</a>
              </li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/hre" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/holy_roman_empire-fc0be4151234fc9ac8f83e10c83b4befe79f22f7a8f6ec1ff03745d61adddb4c.png"/>Holy
                Roman Emprie</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/mongols" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/mongols-7ce0478ab2ca1f95d0d879fecaeb94119629538e951002ac6cb936433c575105.png"/>Mongols</a>
              </li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/civs/rus" target=""><img
                className="w-3 h-3 outline-1 outline-white object-cover inline-block rounded-full mr-2"
                src="https://static.aoe4world.com/assets/flags/rus-cb31fb6f8663187f63136cb2523422a07161c792de27852bdc37f0aa1b74911b.png"/>Rus</a>
              </li>
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer" target="">Civilizations</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/units" target="">Units</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/buildings" target="">Buildings</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/technologies" target="">Technologies</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/patches/patch-20249" target="">Patch 20249</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/about" target="">About</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/quiz" target="">Quiz</a></li>
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm text-gray-300">Learn about the civilizations, units, buildings and technologies in
                the game.</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a
              className="block font-normal relative py-2 px-5 text-gray-50 z-10 hover:text-white active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white xl:block flex-auto xl:group-hover:bg-gray-600 xl:group-focus-within:bg-gray-600 xl:rounded-t"
              href="/stats/rm_1v1/matchups">Statistics<i aria-hidden="true"
                                                         className="hidden xl:inline fa fa-angle-down ml-2 text-xs"></i></a>
            <div className="h-14 xl:hidden"></div>
            <input className="xl:hidden basis-14 peer appearance-none bg-gray-600 h-14" type="checkbox"/>
            <div
              className="xl:hidden absolute right-0 top-0 h-14 w-14 pointer-events-none grid place-content-center peer-checked:rotate-180">
              <i aria-hidden="true" className="fa fa-angle-down text-xs"></i></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]"
              style={{columns: auto 3;">
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/rm_1v1/matchups" target="">Ranked Mode 1v1</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/rm_1v1/civilizations" target="">RM 1v1 Civilizations</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/rm_1v1/maps" target="">RM 1v1 Maps</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/rm_1v1/ladder" target="">RM 1v1 Ladder</a></li>
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm_1v1/matchups" target="">Quick Match 1v1</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm_1v1/civilizations" target="">QM 1v1 Civilizations</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm_1v1/maps" target="">QM 1v1 Maps</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm_1v1/ladder" target="">QM 1v1 Ladder</a></li>
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm-2v2/civilizations" target="">Quick Match 2v2</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm-3v3/civilizations" target="">Quick Match 3v3</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/stats/qm-4v4/civilizations" target="">Quick Match 4v4</a></li>
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm text-gray-300">Compare winrates of civilizations across maps, matchups and
                ranking</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a
              className="block font-normal relative py-2 px-5 text-gray-50 z-10 hover:text-white active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white xl:block flex-auto xl:group-hover:bg-gray-600 xl:group-focus-within:bg-gray-600 xl:rounded-t"
              href="/tools/twitch-video-finder">Watch</a>
            <div className="h-14 xl:hidden"></div>
            <input className="xl:hidden basis-14 peer appearance-none bg-gray-600 h-14" type="checkbox"/>
            <div
              className="xl:hidden absolute right-0 top-0 h-14 w-14 pointer-events-none grid place-content-center peer-checked:rotate-180">
              <i aria-hidden="true" className="fa fa-angle-down text-xs"></i></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]"
              style={{columns: auto 0;">
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm text-gray-300">Browse and search through games streamed on Twitch</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a
              className="block font-normal relative py-2 px-5 text-gray-50 z-10 hover:text-white active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white xl:block flex-auto xl:group-hover:bg-gray-600 xl:group-focus-within:bg-gray-600 xl:rounded-t"
              href="/tools">More<i aria-hidden="true"
                                   className="hidden xl:inline fa fa-angle-down ml-2 text-xs"></i></a>
            <div className="h-14 xl:hidden"></div>
            <input className="xl:hidden basis-14 peer appearance-none bg-gray-600 h-14" type="checkbox"/>
            <div
              className="xl:hidden absolute right-0 top-0 h-14 w-14 pointer-events-none grid place-content-center peer-checked:rotate-180">
              <i aria-hidden="true" className="fa fa-angle-down text-xs"></i></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]"
              style={{columns: auto 2;">
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/faq#about" target="">About</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/faq" target="">F.A.Q.</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/api" target="">API</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/status" target="">Status</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="https://discord.gg/YCTx8HEecv" target="_blank">Discord<i
                className="far fa-arrow-up-right-from-square ml-2 text-gray-300 text-xs"></i></a></li>
              <li className="break-before-column xl:min-w-[150px]"></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/tools" target="">Tools</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/tools/counter_calculator" target="">Counter calculator</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="/explorer/quiz" target="">Quiz</a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="https://liquipedia.net/ageofempires/Age_of_Empires_IV/Tournaments" target="_blank">Liquipedia<i
                className="far fa-arrow-up-right-from-square ml-2 text-gray-300 text-xs"></i></a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="https://www.reddit.com/r/aoe4/" target="_blank">Reddit<i
                className="far fa-arrow-up-right-from-square ml-2 text-gray-300 text-xs"></i></a></li>
              <li className="xl:min-w-[150px]"><a
                className="whitespace-nowrap font-bold text-gray-100 block -mx-3 px-3 py-2 mt-2 text-md rounded-lg xl:mt-0 hover:text-white hover:bg-gray-500 active:opacity-60 focus:outline-none focus-visible:ring focus:ring-white text-gray-100"
                href="https://forums.ageofempires.com/c/age-of-empires-iv/184" target="_blank">Official Forum<i
                className="far fa-arrow-up-right-from-square ml-2 text-gray-300 text-xs"></i></a></li>
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm text-gray-300">About AoE4World, other tools and more websites</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <a className="px-5 xl:px-3 py-2 font-bold" href="https://ko-fi.com/reneklacan" target="_blank"><i
              className="fas fa-heart text-red-500 mr-2"></i>Support us </a>
            <div className="h-14 xl:hidden"></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]">
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm mb-2 text-gray-100">Support us with a small donation, so we can keep this website
                going, add more features and store and analyze more data.</p><p className="text-sm text-gray-300">AoE4
                World is a fan-made project, non-profit and not associated with Microsoft.</p></li>
            </ul>
          </li>
          <li
            className="group relative flex flex-wrap border-b bg-gray-700 border-gray-500 items-center xl:border-0 xl:bg-transparent">
            <form className="contents" method="post" action="/login">
              <button className="px-5 xl:px-3 py-2 font-bold" type="submit"><i className="fa-fw fab fa-steam mr-1"></i>Login
                with Steam
              </button>
              <input type="hidden" name="authenticity_token"
                     value="khKE-qHPnR1kCwD_84Hnen12W60aec67nCIl8q5ijqWeJiRRTJPny7X79PnPaiC6nA80_9OaJKytG69GzTO81A"
                     autoComplete="off"/></form>
            <div className="h-14 xl:hidden"></div>
            <ul
              className="hidden peer-checked:block basis-full xl:block xl:group-hover:top-10 xl:group-focus-within:top-10 xl:absolute xl:rounded-lg left-0 text-sm gap-10 px-5 pt-3 pb-5 bg-gray-600 group-last:left-auto group-last:right-0 xl:rounded-tl-none xl:group-last:rounded-tl-lg xl:group-last:rounded-tr-none xl:-top-[100vh] w-max-[100vw]">
              <li className="pt-5 first:pt-0 whitespace-normal" style={{column-span: all; min-width: 250px"><p
                className="text-sm text-gray-300">Playing through Steam? Login to manage your profile and view all your
                games</p></li>
            </ul>
          </li>
        </ul>
        <div
          className="flex-auto basis-52 sm:order-last text-sm group sm:ml-auto sm:mr-12 xl:mr-0 sm:pr-5 2xl:pr-0 sm:relative sm:right-0 sm:left-0 absolute right-14 left-0 top-0 flex items-center h-[4.5rem]">
          <input className="sm:hidden peer appearance-none w-12 h-full absolute right-0 top-0 rounded z-30"
                 type="checkbox"/>
          <div
            className="sm:hidden peer-checked:hidden pointer-events-none grid place-content-center z-30 w-12 h-full absolute right-0 top-0 rounded-full text-gray-100 text-xl">
            <i aria-hidden="true" className="far fa-magnifying-glass"></i></div>
          <div
            className="hidden peer-checked:grid pointer-events-none place-content-center z-30 w-12 h-full absolute right-0 top-0 rounded-full text-gray-700 text-xl !xl:hidden">
            <i aria-hidden="true" className="far fa-xmark"></i></div>
          <div
            className="hidden peer-checked:flex sm:flex w-14 z-20 sm:w-full sm:max-w-xs sm:relative sm:top-0 top-3 h-12 peer-checked:w-auto absolute ml-auto peer-checked:left-3 peer-checked:right-0">
            <div className="relative w-full" data-vue-app="">
              <leaderboard-search leaderboard="rm_1v1"></leaderboard-search>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <div className="max-w-screen-2xl p-4 md:p-8 mx-auto">
        <div className="mb-4 lg:mb-4 text-center"><h2
          className="text-4xl lg:text-5xl text-white font-bold font-heading pb-5">Ranked Match 1v1 – Leaderboard</h2>
        </div>
        <div className="text-center mb-6"></div>
        <div className="flex flex-wrap">
          <div className="pt-5 lg:pt-10 border-t border-gray-500 w-full">
            <div className="mb-6 mr-2 float-right">
              <div className="relative"><select
                className="w-full text-gray-100 bg-gray-600 border-gray-400 appearance-none block pl-6 pr-10 py-3 font-bold placeholder-gray-900 border rounded-full focus:outline-none"
                data-leaderboard-select="" name="leaderboard">
                <option selected="" value="rm_1v1">Ranked Match 1v1</option>
                <option value="qm_1v1">Quick Match 1v1</option>
                <option value="qm_2v2">Quick Match 2v2</option>
                <option value="qm_3v3">Quick Match 3v3</option>
                <option value="qm_4v4">Quick Match 4v4</option>
              </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-100">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="mt-8 bg-gray-700 rounded-none sm:rounded-3xl overflow-x-auto relative -mx-3 sm:mx-0 w-screen sm:w-full">
              <table className="table-auto w-full whitespace-nowrap mt-4">
                <thead>
                <tr className="text-gray-300 text-left text-sm uppercase tracking-wider">
                  <th className="font-bold text-right pr-3 py-3">#</th>
                  <th className="font-bold">Nickname</th>
                  <th className="font-bold px-3">Rating</th>
                  <th className="font-bold px-3">Win %</th>
                  <th className="font-bold px-3">Games</th>
                  <th className="font-bold px-3">Last Game</th>
                  <th className="font-bold px-3">Social</th>
                </tr>
                </thead>
                <tbody>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/1270139-Beastyqt">1. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/1270139-Beastyqt"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/67f1aea6fab9345ec84ba1f7526ce59bf7a7cbf6_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/1270139-Beastyqt">Beastyqt</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1270139-Beastyqt">2281</a><span
                    className="text-custom-green-500 ml-2">&#8593; 1 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1270139-Beastyqt">90.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1270139-Beastyqt">175</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/1270139-Beastyqt">7 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/beastyqt"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/BeastyqtSC2" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/channel/UCo4EukJcKyZL6oXoLfsWxfA"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a><a
                      className="flex-none" href="https://www.instagram.com/beastyqtsc2/" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/instagram-66d04f131d2cd947c283b17581f7a4bb8f36145735540ed9263203b71dd16ede.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Beastyqt"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9950482-BEEFORWOLOLO">2. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9950482-BEEFORWOLOLO"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/9950482-BEEFORWOLOLO">#BEEFORWOLOLO</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/6946065-3D-Bee">3D!Bee</a>)</h4><img alt="Conqueror III"
                                                                            className="inline-block ml-auto h-8"
                                                                            src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9950482-BEEFORWOLOLO">2281</a><span
                    className="text-custom-green-500 ml-2">&#8593; 1 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9950482-BEEFORWOLOLO">89.2% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9950482-BEEFORWOLOLO">166</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9950482-BEEFORWOLOLO">12 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/3d_bee"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Bee" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/6943917-Liquid-DeMusliM">3. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/6943917-Liquid-DeMusliM"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/998bc2af6b50670a422df71d2081e08f4564619c_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/6943917-Liquid-DeMusliM">Liquid.DeMusliM</a></h4><img alt="Conqueror III"
                                                                                             className="inline-block ml-auto h-8"
                                                                                             src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6943917-Liquid-DeMusliM">2179</a><span
                    className="text-custom-green-500 ml-2">&#8593; 9 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6943917-Liquid-DeMusliM">83.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6943917-Liquid-DeMusliM">349</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/6943917-Liquid-DeMusliM">5 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/demuslim"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/DeMusliM" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.instagram.com/demuslimsc2" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/instagram-66d04f131d2cd947c283b17581f7a4bb8f36145735540ed9263203b71dd16ede.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/DeMusliM"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/7410194-Potato">4. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/7410194-Potato"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/e1261ddede0daa79f297c43671ecbd36336fb6b7_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/7410194-Potato">Potato</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/1102458-IZI-MarineLorD">IZI.MarineLorD</a>)</h4><img alt="Conqueror III"
                                                                                            className="inline-block ml-auto h-8"
                                                                                            src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7410194-Potato">2174</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7410194-Potato">91.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7410194-Potato">69</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/7410194-Potato">19 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/marinelord"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/MarineLorDsc2" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/MarineLorD"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9087979-BBQMAN666FORWOLOLO">5. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9087979-BBQMAN666FORWOLOLO"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/9087979-BBQMAN666FORWOLOLO">#BBQMAN666FORWOLOLO</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/6943917-Liquid-DeMusliM">Liquid.DeMusliM</a>)</h4><img alt="Conqueror III"
                                                                                              className="inline-block ml-auto h-8"
                                                                                              src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9087979-BBQMAN666FORWOLOLO">2173</a><span
                    className="text-custom-green-500 ml-2">&#8593; 5 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9087979-BBQMAN666FORWOLOLO">78.6% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9087979-BBQMAN666FORWOLOLO">159</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9087979-BBQMAN666FORWOLOLO">7 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/demuslim"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/DeMusliM" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.instagram.com/demuslimsc2" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/instagram-66d04f131d2cd947c283b17581f7a4bb8f36145735540ed9263203b71dd16ede.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/DeMusliM"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9172224-LucifroN">6. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9172224-LucifroN"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9172224-LucifroN">LucifroN</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9172224-LucifroN">2160</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 20 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9172224-LucifroN">77.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9172224-LucifroN">172</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9172224-LucifroN">20 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8416090-Quintus-Sertorius">7. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8416090-Quintus-Sertorius"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/1e73736f3df1e574b9a54d6ad95fcb2936431225_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8416090-Quintus-Sertorius">Quintus
                        Sertorius</a></h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                               src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8416090-Quintus-Sertorius">2068</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 24 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8416090-Quintus-Sertorius">86.4% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8416090-Quintus-Sertorius">154</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8416090-Quintus-Sertorius">20 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8139502-lol">8. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8139502-lol"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/3ecb9e719e441abca6ff718f9dcc20d1810c1839_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8139502-lol">lol</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/1270139-Beastyqt">Beastyqt</a>)</h4><img alt="Conqueror III"
                                                                                className="inline-block ml-auto h-8"
                                                                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8139502-lol">2063</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 48 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8139502-lol">84.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8139502-lol">176</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8139502-lol">19 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/beastyqt"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/BeastyqtSC2" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/channel/UCo4EukJcKyZL6oXoLfsWxfA"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a><a
                      className="flex-none" href="https://www.instagram.com/beastyqtsc2/" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/instagram-66d04f131d2cd947c283b17581f7a4bb8f36145735540ed9263203b71dd16ede.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Beastyqt"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/3637474-OPA">9. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/3637474-OPA"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fc05a59100e6816f77fd71163a3b3fe2ebbecafd_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/3637474-OPA">OPA</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/8442107-Wam01">Wam01</a>)</h4><img alt="Conqueror III"
                                                                          className="inline-block ml-auto h-8"
                                                                          src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3637474-OPA">2045</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 1 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3637474-OPA">83.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3637474-OPA">66</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/3637474-OPA">18 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/3112221-YUImetal">10. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/3112221-YUImetal"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/1b92d3842f837c576af35def27bf29056d764b87_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/3112221-YUImetal">YUImetal</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3112221-YUImetal">2031</a><span
                    className="text-custom-green-500 ml-2">&#8593; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3112221-YUImetal">65.9% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3112221-YUImetal">264</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/3112221-YUImetal">4 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/7753054-sseogeun-yachae">11. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/7753054-sseogeun-yachae"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://static.aoe4world.com/assets/steam/missing_avatar-e242b35d00203aa906f62c1c86d27eefce0320fc9d02de64338abfa732303652.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/7753054-sseogeun-yachae">sseogeun
                        yachae</a></h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                            src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7753054-sseogeun-yachae">2021</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 58 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7753054-sseogeun-yachae">89.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7753054-sseogeun-yachae">76</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/7753054-sseogeun-yachae">26 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10595914-AnnuitCoeptis">12. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10595914-AnnuitCoeptis"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/10595914-AnnuitCoeptis">AnnuitCœptis</a></h4><img alt="Conqueror III"
                                                                                         className="inline-block ml-auto h-8"
                                                                                         src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10595914-AnnuitCoeptis">2015</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 44 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10595914-AnnuitCoeptis">76.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10595914-AnnuitCoeptis">205</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10595914-AnnuitCoeptis">24 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/1160570-mYi-ZertoN">13. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/1160570-mYi-ZertoN"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/edce51dc8bde50e74662dcdb7a9c6f4b7f71843c_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/1160570-mYi-ZertoN">mYi.ZertoN</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1160570-mYi-ZertoN">2014</a><span
                    className="text-custom-green-500 ml-2">&#8593; 12 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1160570-mYi-ZertoN">74.8% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1160570-mYi-ZertoN">135</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/1160570-mYi-ZertoN">3 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/ZertoN"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/ZertoN__" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/ZertoN" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/196240-GL-TheViper">14. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/196240-GL-TheViper"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/eefa125e4e662af9600355746783166942b8a1ff_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/196240-GL-TheViper">GL.TheViper</a></h4><img alt="Conqueror III"
                                                                                    className="inline-block ml-auto h-8"
                                                                                    src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/196240-GL-TheViper">2013</a><span
                    className="text-custom-green-500 ml-2">&#8593; 7 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/196240-GL-TheViper">74.2% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/196240-GL-TheViper">89</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/196240-GL-TheViper">5 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/theviper"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/theviperaoe" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/user/TheViperAOC" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/TheViper"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/7235947-Leenock">15. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/7235947-Leenock"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/d50f141f0d2ba92e4a7843851a60548df8b4c5dc_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/7235947-Leenock">Leenock</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7235947-Leenock">2008</a><span
                    className="text-custom-green-500 ml-2">&#8593; 4 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7235947-Leenock">64.0% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7235947-Leenock">303</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/7235947-Leenock">about 13 hours
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/leenock_"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/ex1_leenock" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Leenock" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9522148-Capoch">16. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9522148-Capoch"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9522148-Capoch">Capoch</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9522148-Capoch">1999</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 32 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9522148-Capoch">66.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9522148-Capoch">180</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9522148-Capoch">22 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8783044-Froggy-Fresh">16. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8783044-Froggy-Fresh"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8783044-Froggy-Fresh">Froggy
                        Fresh</a> (<a className="text-gray-100 underline-offset-2 hover:underline"
                                      href="/players/8446710-1puppypaw">1puppypaw</a>)</h4><img alt="Conqueror III"
                                                                                                className="inline-block ml-auto h-8"
                                                                                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8783044-Froggy-Fresh">1992</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 62 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8783044-Froggy-Fresh">76.6% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8783044-Froggy-Fresh">64</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8783044-Froggy-Fresh">about 1 month
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/1_Puppypaw"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/3592906-David-Kim">17. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/3592906-David-Kim"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/e431084a393fe9703c5e4fac270ac68f3dabf338_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/3592906-David-Kim">David Kim</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/8446710-1puppypaw">1puppypaw</a>)</h4><img alt="Conqueror III"
                                                                                  className="inline-block ml-auto h-8"
                                                                                  src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3592906-David-Kim">1986</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 13 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3592906-David-Kim">73.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3592906-David-Kim">102</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/3592906-David-Kim">19 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/1_Puppypaw"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8446710-1puppypaw">18. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8446710-1puppypaw"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8446710-1puppypaw">1puppypaw</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8446710-1puppypaw">1966</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 44 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8446710-1puppypaw">70.9% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8446710-1puppypaw">127</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8446710-1puppypaw">27 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/1_Puppypaw"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/3813060-kiljardi">19. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/3813060-kiljardi"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/43fa9aa7676ce6f57e5a3852e234e419b58fc066_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/3813060-kiljardi">kiljardi</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3813060-kiljardi">1955</a><span
                    className="text-custom-green-500 ml-2">&#8593; 17 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3813060-kiljardi">62.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/3813060-kiljardi">161</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/3813060-kiljardi">13 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/585764-DivineDFP">20. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/585764-DivineDFP"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/b7aff6beeb72f68389bd60175dd58ed5fe738f33_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/585764-DivineDFP">DivineDFP</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/585764-DivineDFP">1954</a><span
                    className="text-custom-green-500 ml-2">&#8593; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/585764-DivineDFP">64.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/585764-DivineDFP">391</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/585764-DivineDFP">7 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/DivineDFP_"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/DivineDFP" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/channel/UCNubBpc-5MA1QMK95iHQHwQ/featured"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/DivineDFP"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8667906-">21. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8667906-"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8667906-">🩸</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8667906-">1941</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 52 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8667906-">97.9% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8667906-">47</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8667906-">about 1 month ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9829549-x">21. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9829549-x"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/f0ba927025fc150549a820f8576477e22a86db52_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9829549-x">小x杂</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9829549-x">1946</a><span
                    className="text-custom-green-500 ml-2">&#8593; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9829549-x">63.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9829549-x">251</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9829549-x">1 day ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9375030-Astral-Abuser">22. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9375030-Astral-Abuser"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9375030-Astral-Abuser">Astral
                        Abuser</a> (<a className="text-gray-100 underline-offset-2 hover:underline"
                                       href="/players/8442107-Wam01">Wam01</a>)</h4><img alt="Conqueror III"
                                                                                         className="inline-block ml-auto h-8"
                                                                                         src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9375030-Astral-Abuser">1933</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 51 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9375030-Astral-Abuser">74.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9375030-Astral-Abuser">116</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9375030-Astral-Abuser">28 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/wam011"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/Wam01_AoE" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Wam01" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/7958803-IamMagic">22. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/7958803-IamMagic"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/7958803-IamMagic">IamMagic</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7958803-IamMagic">1928</a><span
                    className="text-custom-green-500 ml-2">&#8593; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7958803-IamMagic">66.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7958803-IamMagic">112</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/7958803-IamMagic">16 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/4309542-GG-Chrysaor">23. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/4309542-GG-Chrysaor"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/95d8f1c00bbdc43e289e494f3dad027a6f930ac4_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/4309542-GG-Chrysaor">GG.Chrysaor</a></h4><img alt="Conqueror III"
                                                                                     className="inline-block ml-auto h-8"
                                                                                     src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/4309542-GG-Chrysaor">1917</a><span
                    className="text-custom-green-500 ml-2">&#8593; 25 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/4309542-GG-Chrysaor">56.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/4309542-GG-Chrysaor">382</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/4309542-GG-Chrysaor">5 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8908838-nNnNnNn">24. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8908838-nNnNnNn"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/721034f7851a0ecefddb2695cae1a4201e67b836_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8908838-nNnNnNn">ñÑñÑñÑñ</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8908838-nNnNnNn">1882</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 51 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8908838-nNnNnNn">84.8% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8908838-nNnNnNn">33</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8908838-nNnNnNn">2 months ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9884849-">24. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9884849-"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9884849-">さかな</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9884849-">1914</a><span
                    className="text-custom-green-500 ml-2">&#8593; 15 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9884849-">94.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9884849-">34</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9884849-">11 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/5099388-Don-Artie">25. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/5099388-Don-Artie"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/a099f31dd8094c26aed827d4d6838c9a5013f7a8_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/5099388-Don-Artie">Don Artie</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/5099388-Don-Artie">1906</a><span
                    className="text-custom-green-500 ml-2">&#8593; 20 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/5099388-Don-Artie">58.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/5099388-Don-Artie">229</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/5099388-Don-Artie">3 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/don_artie"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Don_Artie"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10390647-Hera">26. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10390647-Hera"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://static.aoe4world.com/assets/steam/missing_avatar-e242b35d00203aa906f62c1c86d27eefce0320fc9d02de64338abfa732303652.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/10390647-Hera">Hera</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/8442107-Wam01">Wam01</a>)</h4><img alt="Conqueror III"
                                                                          className="inline-block ml-auto h-8"
                                                                          src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10390647-Hera">1909</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 44 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10390647-Hera">75.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10390647-Hera">37</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10390647-Hera">about 2 months ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/wam011"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/Wam01_AoE" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Wam01" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/1488920-Mugnas-Cerlsan">26. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/1488920-Mugnas-Cerlsan"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/37e1c2f50478eed197bf3d89297bd0d207f949c1_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/1488920-Mugnas-Cerlsan">Mugnas
                        Cerlsan</a></h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                             src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1488920-Mugnas-Cerlsan">1900</a><span
                    className="text-custom-green-500 ml-2">&#8593; 15 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1488920-Mugnas-Cerlsan">62.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1488920-Mugnas-Cerlsan">261</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/1488920-Mugnas-Cerlsan">15 days
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10776020-Shadow">26. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10776020-Shadow"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://static.aoe4world.com/assets/steam/missing_avatar-e242b35d00203aa906f62c1c86d27eefce0320fc9d02de64338abfa732303652.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/10776020-Shadow">Shadow</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10776020-Shadow">1880</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 61 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10776020-Shadow">96.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10776020-Shadow">60</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10776020-Shadow">2 months ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/985308-RaccAttack">27. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/985308-RaccAttack"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/ca6e5b7dbb1f9b50ef3ba0ffb7c4b52a0bfb85f4_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/985308-RaccAttack">RaccAttack</a> (<a
                        className="text-gray-100 underline-offset-2 hover:underline"
                        href="/players/280459-RecoN">RecoN</a>)</h4><img alt="Conqueror III"
                                                                         className="inline-block ml-auto h-8"
                                                                         src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/985308-RaccAttack">1896</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 7 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/985308-RaccAttack">60.8% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/985308-RaccAttack">176</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/985308-RaccAttack">19 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8442107-Wam01">28. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8442107-Wam01"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8442107-Wam01">Wam01</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8442107-Wam01">1883</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 52 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8442107-Wam01">75.0% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8442107-Wam01">56</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8442107-Wam01">27 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/wam011"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/Wam01_AoE" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Wam01" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9631342-TheShogun">29. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9631342-TheShogun"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9631342-TheShogun">TheShogun</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9631342-TheShogun">1882</a><span
                    className="text-custom-green-500 ml-2">&#8593; 19 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9631342-TheShogun">70.5% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9631342-TheShogun">44</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9631342-TheShogun">11 days ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/7378854-Goliath">30. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/7378854-Goliath"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/a40bd147073286d76bc64d4fe5caf199ed228384_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/7378854-Goliath">Goliath</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7378854-Goliath">1880</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 53 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7378854-Goliath">83.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/7378854-Goliath">65</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/7378854-Goliath">26 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/hut_au"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/HuT_OCE" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/c/HuTAU" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10535712-Undead">31. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10535712-Undead"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/10535712-Undead">Undead</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10535712-Undead">1880</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 49 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10535712-Undead">76.2% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10535712-Undead">84</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10535712-Undead">about 1 month ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/106457-Kyo">31. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/106457-Kyo"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/58f7f5885990f61821ac1dfe900eccb919144a38_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/106457-Kyo">Kyo</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/106457-Kyo">1878</a><span
                    className="text-custom-green-500 ml-2">&#8593; 4 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/106457-Kyo">76.9% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/106457-Kyo">65</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/106457-Kyo">15 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/kyo_aoe"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/230361-CrackedyHere">32. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/230361-CrackedyHere"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/6345e35b21d85a6889f61817697754b0d87c6bb1_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/230361-CrackedyHere">CrackedyHere</a></h4><img alt="Conqueror III"
                                                                                      className="inline-block ml-auto h-8"
                                                                                      src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/230361-CrackedyHere">1870</a><span
                    className="text-custom-green-500 ml-2">&#8593; 8 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/230361-CrackedyHere">61.4% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/230361-CrackedyHere">158</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/230361-CrackedyHere">about 13 hours
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/crackedyhere"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/channel/UCAzpZUsSZJ5-i5nDzVq6_YQ"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/1079379-Giggles">33. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/1079379-Giggles"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/f4ebfa6b7c53c9d2d01e8d4168f889ef74f4517c_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/1079379-Giggles">Giggles</a></h4>
                      <img alt="Conqueror III" className="inline-block ml-auto h-8"
                           src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1079379-Giggles">1868</a><span
                    className="text-custom-green-500 ml-2">&#8593; 7 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1079379-Giggles">59.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1079379-Giggles">182</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/1079379-Giggles">4 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9030482-Deo-Favente-Perennis">34. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9030482-Deo-Favente-Perennis"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/b7aff6beeb72f68389bd60175dd58ed5fe738f33_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9030482-Deo-Favente-Perennis">Deo
                        Favente Perennis</a></h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                                      src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9030482-Deo-Favente-Perennis">1862</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 24 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9030482-Deo-Favente-Perennis">67.7% </a>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9030482-Deo-Favente-Perennis">288</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9030482-Deo-Favente-Perennis">about 14
                    hours ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/divinedfp_"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/DivineDFP" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.youtube.com/channel/UCNubBpc-5MA1QMK95iHQHwQ/featured"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/youtube-1314c760cc15daa9af5c386df9cb0cc9e932ddb0be9eacb76f77556800d2857f.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/DivineDFP"
                      rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                     src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8781640-Yleva">35. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8781640-Yleva"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8781640-Yleva">Yleva</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8781640-Yleva">1859</a><span
                    className="text-custom-green-500 ml-2">&#8593; 18 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8781640-Yleva">57.6% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8781640-Yleva">177</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8781640-Yleva">15 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/6504120-IamAvely">36. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/6504120-IamAvely"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/6504120-IamAvely">IamAvely</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6504120-IamAvely">1858</a><span
                    className="text-custom-green-500 ml-2">&#8593; 16 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6504120-IamAvely">58.3% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6504120-IamAvely">180</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/6504120-IamAvely">9 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/6483978-kauP">37. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/6483978-kauP"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/ae60d6f44f462bfc4904772de216d9815b077351_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/6483978-kauP">kauP</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6483978-kauP">1858</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 36 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6483978-kauP">55.6% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/6483978-kauP">698</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/6483978-kauP">about 5 hours ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/kaup"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10337624-llllllllllllll">38. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10337624-llllllllllllll"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline"
                        href="/players/10337624-llllllllllllll">llllllllllllll</a></h4><img alt="Conqueror III"
                                                                                            className="inline-block ml-auto h-8"
                                                                                            src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10337624-llllllllllllll">1857</a><span
                    className="text-custom-green-500 ml-2">&#8593; 19 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10337624-llllllllllllll">58.0% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10337624-llllllllllllll">283</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10337624-llllllllllllll">about 3 hours
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9237942-Rupert4943">39. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9237942-Rupert4943"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://static.aoe4world.com/assets/steam/missing_avatar-e242b35d00203aa906f62c1c86d27eefce0320fc9d02de64338abfa732303652.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9237942-Rupert4943">Rupert4943</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9237942-Rupert4943">1828</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 48 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9237942-Rupert4943">80.4% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9237942-Rupert4943">46</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9237942-Rupert4943">about 2 months
                    ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/9700490-qewtiepie">39. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/9700490-qewtiepie"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/9700490-qewtiepie">qewtiepie</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9700490-qewtiepie">1854</a><span
                    className="text-custom-green-500 ml-2">&#8593; 24 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9700490-qewtiepie">59.2% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/9700490-qewtiepie">120</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/9700490-qewtiepie">1 day ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/8960613-Rotab">40. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/8960613-Rotab"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/8960613-Rotab">Rotab</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8960613-Rotab">1841</a><span
                    className="text-custom-green-500 ml-2">&#8593; 15 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8960613-Rotab">56.8% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/8960613-Rotab">220</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/8960613-Rotab">about 5 hours ago </a>
                  </td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/1224481-IW-Kasva">41. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/1224481-IW-Kasva"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/1fdd717612904b66da8cd352117b3dd06aae9f45_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/1224481-IW-Kasva">IW.Kasva</a>
                      </h4><img alt="Conqueror III" className="inline-block ml-auto h-8"
                                src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1224481-IW-Kasva">1831</a><span
                    className="text-custom-green-500 ml-2">&#8593; 3 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1224481-IW-Kasva">62.1% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/1224481-IW-Kasva">459</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/1224481-IW-Kasva">9 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"><a className="flex-none" href="https://www.twitch.tv/kasvaoe"
                                                        rel="noreferrer noopener" target="_blank"><img className="h-6"
                                                                                                       src="https://static.aoe4world.com/assets/social/twitch-5c031d0c467469f2a795ba998844588693b3f27691d2b62c90dd21179aa056b3.svg"/></a><a
                      className="flex-none" href="https://twitter.com/kasvaoe" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/twitter-708163de43057eb04924b3cdd9c593d888718ef9b0210003ed948a17c74d204d.svg"/></a><a
                      className="flex-none" href="https://www.instagram.com/KASVAOE/" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/instagram-66d04f131d2cd947c283b17581f7a4bb8f36145735540ed9263203b71dd16ede.svg"/></a><a
                      className="flex-none" href="https://liquipedia.net/ageofempires/Kasva" rel="noreferrer noopener"
                      target="_blank"><img className="h-6"
                                           src="https://static.aoe4world.com/assets/social/liquipedia-b88244933c426613a5064b3e5b98e46e5336e3cd4e7b7ee07af0c0021f7aabbb.svg"/></a>
                    </div>
                  </td>
                </tr>
                <tr className="even:bg-gray-900/20 group hover:bg-gray-500/20">
                  <td className="text-right text-gray-300 font-bold pr-3 pl-3 sm:pl-8 w-0"><a
                    href="/players/10127699-">42. </a></td>
                  <td className="py-5 pr-6 sm:w-auto">
                    <div className="flex gap-3 items-center"><a href="/players/10127699-"><img
                      className="w-8 h-8 rounded outline outline-1 outline-black/70 opacity-50 group-hover:opacity-100"
                      src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"/></a>
                      <h4 className="text-lg font-bold text-white whitespace-nowrap truncate"><a
                        className="underline-offset-2 hover:underline" href="/players/10127699-">꼬막</a></h4><img
                        alt="Conqueror III" className="inline-block ml-auto h-8"
                        src="https://static.aoe4world.com/assets/rank_levels/conqueror_3-2a2251d097730fec60764e870c9dc269022370d0116fa4d4acd4b3487068821a.svg"/>
                    </div>
                  </td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10127699-">1830</a><span
                    className="text-custom-pink-500 ml-2">&#8595; 15 </span></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10127699-">68.7% </a></td>
                  <td className="text-gray-200 px-3 w-12"><a href="/players/10127699-">67</a></td>
                  <td className="text-gray-200 pl-3 pr-3 w-12"><a href="/players/10127699-">21 days ago </a></td>
                  <td className="text-gray-200 pl-3 pr-6 sm:pr-8 sm:w-auto">
                    <div className="flex gap-2 w-56"></div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <nav className="pagy-nav pagination" aria-label="pager"><span
              className="page prev disabled">&lsaquo;&nbsp;Prev</span> <span className="page active">1</span> <span
              className="page"><a href="/leaderboard/rm_1v1?page=2" rel="next">2</a></span> <span className="page next"><a
              href="/leaderboard/rm_1v1?page=2" rel="next" aria-label="next">Next&nbsp;&rsaquo;</a></span></nav>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-screen-2xl pb-5 mx-auto bg-gray-800 md:mb-5 mt-4 md:mt-8 px-4 md:px-8">
      <div className="mx-auto border-t border-gray-600 text-sm md:text-base pt-4 mb-4">
        <ul
          className="font-bold text-gray-100 flex flex-wrap items-center justify-center space-x-6 space-y-2 md:justify-evenly">
          <li><a className="hover:text-gray-200 group" href="https://ko-fi.com/reneklacan" target="_blank"><span
            className="text-red-600 mr-2"><i className="fas fa-fw fa-heart group-hover:hidden"></i><i
            className="fa-duotone fa-fw fa-face-smile-hearts hidden group-hover:inline-block"
            style={{--fa-secondary-color: #FFC441;--fa-secondary-opacity: 1.0;}}></i></span>Donate </a></li>
          <li><a className="hover:text-gray-200" href="/status"> Status</a></li>
          <li><a className="hover:text-gray-200" href="/faq"> F.A.Q.</a></li>
          <li><a className="hover:text-gray-200" href="/privacy"> Privacy Policy</a></li>
          <li><a className="hover:text-gray-200" data-anal-event="follow_twitter"
                 href="https://twitter.com/intent/follow?screen_name=aoe4world" rel="noreferer nofollow"
                 target="_blank"><i className="fab fa-twitter mr-2 text-[#1da1f2]"></i>Follow @AoE4World</a></li>
        </ul>
      </div>
      <p className="pt-4 text-xs md:text-sm text-center text-gray-300 max-w-4xl mx-auto px-4 md:px-8">Age of Empires IV©
        Microsoft Corporation. AoE4World.com was created under Microsoft's "<a className="text-gray-200"
                                                                               href="https://www.xbox.com/en-US/developers/rules"
                                                                               rel="noreferrer noopener">Game Content
          Usage Rules</a>" using assets from <a className="text-gray-200"
                                                href="https://www.ageofempires.com/games/age-of-empires-iv/"
                                                rel="noreferrer noopener">Age of Empires IV</a> , and it is not endorsed
        by or affiliated with Microsoft.</p></section>
    </div>
  );
}

export default Index;
