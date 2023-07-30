
import  "./Modal.css"


import { RiCloseLine } from "react-icons/ri";



export default function Modal({ setIsOpen,image }){

    

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
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              {/* <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button> */}
              <div className="photo-grid-item">
            <img   src={image} alt="card" /> 
            </div>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>


   )


}