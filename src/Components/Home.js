
import VideoPlayer from "./VideoPlayer"
import Modal from "./Modal";

import React, { useState } from "react";
import   "./Home.css";



export default function Home(){
const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <h1>My social Red</h1>
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
         <VideoPlayer/>
        </>
    )

}