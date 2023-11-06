import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "./Photos.css"

const datos=[
   {userName:"Juan"},
   {userName:"pedro"}
]



   export default function Photos({data}){
    
    const {id} = useParams()
    const [users,setUsers]=useState([])
    const setGallery=[]

    
   
    const foto= 
   data
   .filter(list => list.id === parseInt(id)  )
   .map((list) => {
       return (  list.photos.concat(setGallery))
           
   })
   
   const handleIds=()=>{



      
      let newId = datos
      
      .map((photo,index)=>{
       return{photoId:index,...photo}
      })
      setUsers(newId)
    }
   
   // const foto= 
   // data
   // .filter(list => list.id === parseInt(id)  )
   // .map((list) => (
   //       list.photos.map((item)=>(
   //         <div className="photo-grid-item">
   //          <img   src={`/${item}`} alt="card" /> 
   //          </div>
   //          ))
           
   // ))

//    const foto= 
//    props.img
//    .map((list) => (
//            <div className="photo-grid-item">
//             <img   src={`/${list}`} alt="card" /> 
//             </div>
           
//    ))
       
    

    return(
     <section className="photo-grid-container">
         <button onClick={handleIds}>addId</button>
       {
         users && users.map(user=>{
            return <div>
               <h4>UserId:{user.photoId}</h4>
               <img   src={`/${user}`} alt="card" /> 
            </div>
         })
         
       }
      
         {foto} 
      
     </section>
    )
 }