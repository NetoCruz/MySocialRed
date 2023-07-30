import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import "./Photos.css"
import { RModalImages } from 'react-modal-images'




   export default function Photos({data}){
      const [isOpen, setIsOpen] = useState(false);
       const [isfoto, setfoto] = useState([]);
    const {id} = useParams()

   const foto= 
   data
   .filter(list => list.id === parseInt(id)  )
   .map((list) => (
         list.photos.map((item)=>(
            
           <div className="photo-grid-item">
           <button  onClick={() => setIsOpen(true)}>  
          
        <img   src={`/${item}`} alt="card" /> 
       
      
      </button>  
      {isOpen && <Modal setIsOpen={setIsOpen} image={`/${item}`} />} 
            
            </div>
            ))
           
   ))

//    const foto= 
//    props.img
//    .map((list) => (
//            <div className="photo-grid-item">
//             <img   src={`/${list}`} alt="card" /> 
//             </div>
           
//    ))
       


    return(
     <section className="photo-grid-container">
          {/* <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button> */}
      {/* {isOpen && <Modal setIsOpen={setIsOpen} image={setfoto} />} */}
     
        {foto}
        
   
     </section>
    )
 }