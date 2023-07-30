
import video from "../images/example.mp4"
import "./VideoPlayer.css"

import { useEffect, useRef, useState, React } from "react";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";


export default function VideoPlayer(){

    const videoRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false); // a boolean for storing state of the play

   const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
  }
}

   return(
    <>
    <div className="controls">
    <IconContext.Provider value={{ color: "black", size: "2em" }}>
      <BiSkipPrevious />
    </IconContext.Provider>
    {isPlaying ? (
      <button className="controlButton" onClick={handlePlay}>
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <BiPause />
        </IconContext.Provider>
      </button>
    ) : (
      <button className="controlButton" onClick={handlePlay}>
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <BiPlay />
        </IconContext.Provider>
      </button>
    )}
    <IconContext.Provider value={{ color: "black", size: "2em" }}>
      <BiSkipNext />
    </IconContext.Provider>
    </div>
    <div>
    <video
   className="videoPlayer"
   width="70%"
   ref={videoRef}
   src={video}
></video>
    </div>
    </>


   )


}