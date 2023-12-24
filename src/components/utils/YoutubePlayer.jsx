"use client";

import { useState } from "react";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import YouTube from "react-youtube";

const YoutubePlayer = ({ youtubeId }) => {
  const [isPlay, setIsPlay] = useState(false);

  const handleButton = () => {
    setIsPlay((prev) => !prev);
  };

  const opts = {
    height: "200",
    width: "350",
  };

  return (
    <div className="fixed bottom-5 right-5 flex gap-3 items-end flex-col">
      {isPlay ? (
        <YouTube
          opts={opts}
          className={`transition-transform duration-300`}
          videoId={youtubeId}
        />
      ) : null}
      <button
        onClick={handleButton}
        className={`w-10 flex justify-center items-center h-10 ${
          isPlay ? "bg-blue-500 text-white" : "bg-white"
        } rounded-md  transition-all `}
      >
        {isPlay ? <ImCross /> : <FaPlay />}
      </button>
    </div>
  );
};

export default YoutubePlayer;
