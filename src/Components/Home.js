
import VideoPlayer from "./VideoPlayer"
import Modal from "./Modal";
import video from "../images/example.mp4";
import React, { useState } from "react";
import   "./Home.css";



export default function Home(){
const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <h1>My social Red</h1>
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        {/* <video width="750" height="500" controls  >
      <source src={video} type="video/mp4"/>
</video> */}
      open modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
         <VideoPlayer/>
         <video width="750" height="500" controls  >
      <source src={video} type="video/mp4"/>
</video>
        </>
    )

}