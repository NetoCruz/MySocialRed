import React from "react";
import { useParams } from "react-router-dom";
import "./Photos.css"





   export default function Photos({data}){
    const {id} = useParams()

   const foto= 
   data
   .filter(list => list.id === parseInt(id)  )
   .map((list) => (
         list.photos.map((item)=>(
           <div className="photo-grid-item">
            <img   src={`/${item}`} alt="card" /> 
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
         
        
        {foto}
     
     </section>
    )
 }