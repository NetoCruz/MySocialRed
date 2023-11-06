
import  "./Modal.css"
import video from "../images/example.mp4"
import VideoPlayer from "./VideoPlayer";


import { RiCloseLine } from "react-icons/ri";



export default function Modal({ setIsOpen }){

    

   return(
    <>
   <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
           {/* <VideoPlayer/> */}
           
           <video width="550" height="300" controls  >
      <source src={video} type="video/mp4"/>
</video>
          </div>
          
          {/* <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>


   )


}