import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {bgColor, borderColor, textColor} from "./style.utils";
import {ILeaderboardDef, IMatchesMatch, IPlayer, IPlayerNew, IProfileLeaderboardResult, ITeamNew} from "../helper/api.types";
import Image from "next/image";
import { civList } from "../helper/matchupinfo";


interface IMatchupModalProps {
  match: IMatchesMatch;
  profileId: number;
}


export default function MatchupModal({match, profileId}: IMatchupModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<IPlayerNew>(null);
  const [opponent, setOpponent] = useState<IPlayerNew[]>(null);
  const [friendly, setFriendly] = useState<IPlayerNew[]>(null);


// Get current player
  useEffect(() => {
    const focusIndex = match.teams.findIndex(team => team.players.some(player => player.profileId === profileId));
    const currPlayer = match.teams[focusIndex].players.filter(x => x.profileId == profileId)[0];
    const opp = match.teams.filter(x => x.teamId !=  currPlayer.team)[0].players;
    const fr = match.teams[focusIndex].players;
    setOpponent(opp);
    setFriendly(fr);
    setCurrentPlayer(currPlayer);
  },[match, profileId]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset";
  }, [showModal]);

  return (
    <>
      <a
      href=""
        className={`flex flex-row space-x-2 items-center underline`}
        type="button"
        onClick={(e) => { e.preventDefault(); setShowModal(true);}}
      >
      Matchup info
      </a>
      {showModal ? (
        <>
          <div
            className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className={`dark fixed w-full h-full top-0 left-0 flex relative`}>
              {/*content*/}
              <div className={`border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  ${bgColor.default}`}>
                {/*header*/}
                <div className="flex items-start justify-between p-1 mx-1 my-1 border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold flex">
                   {currentPlayer.name} (<Image width={32} height={100} alt="" src={currentPlayer.civImageUrl}/> {currentPlayer.civName}) Matchup info
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon className="w-3.5 text-gray-400" icon={faClose}/>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* Opponent tech trees */}
                  <div className="flex">
                  {opponent.sort((a, b) => a.color > b.color ? 1 : -1).map((oppPlayer, index) => (
                    <div className="text-center font-bold" key={index}>
                    <span className="inline-flex my-1 align-middle">
                    <h3 className="" style={{color: oppPlayer.colorHex}}>{`${oppPlayer.color} ${oppPlayer.civName}`}</h3>
                    <Image width={24} height={24} alt="" className="mx-1" src={oppPlayer.civImageUrl}/>
                    </span>
                    <Image width={2880 / (opponent.length + friendly.length)} height={120} alt="" src={`/aoe2/de/techtree/${oppPlayer.civName}.png`} className="mx-1 bg-white"/>
                    </div>))}
                  </div>

                  {/* Friendly tech trees */}
                  <div className="flex">
                  {friendly.sort((a, b) => a.color > b.color ? 1 : -1).map((frPlayer, index) => (
                    <div className="text-center font-bold" key={index}>
                    <h3 style={{color: frPlayer.colorHex}}>{`${frPlayer.color} ${frPlayer.civName}`}{frPlayer.name == currentPlayer.name ? " (selected)" : ""}</h3>
                    <Image width={2880 /(opponent.length + friendly.length)} height={120} alt="" src={`/aoe2/de/techtree/${frPlayer.civName}.png`} className="mx-1 bg-white"/>
                    </div>))}
                  </div>

                  <div className="">
                    <h3 className="text-blueGray-500 text-lg font-bold leading-relaxed">
                      Deathball comp (Theoritical best comp)
                    </h3>
                    <div className="flex my-1">
                    <Image width={46} height={100} alt="" src={'/aoe2/de/units/492.png'} className="mx-1"/>
                    <Image width={46} height={100} alt="" src={'/aoe2/de/units/492.png'} className="mx-1"/>
                    </div>
                    <p className="text-blueGray-500 text-lg font-bold leading-relaxed">
                      Counter comp (Best comp against current opponents)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}