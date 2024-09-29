import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {bgColor, borderColor, textColor} from "./style.utils";
import Link from "next/link";


export default function MatchupModal() {
  const [showModal, setShowModal] = React.useState(false);
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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overscroll-none overflow-visible"
          >
            <div className={`dark fixed w-full h-full top-0 left-0 flex relative overscroll-none overflow-visible`}>
              {/*content*/}
              <div className={`border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overscroll-none overflow-visible  ${bgColor.default}`}>
                {/*header*/}
                <div className="flex items-start justify-between p-1 mx-1 my-1 border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Matchup info
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
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Content here
                  </p>
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