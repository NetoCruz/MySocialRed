import React from "react";
import "./Card.css"
// import Star from "./StarButton";




export default function Card(props){
   return(
    <section className="card--main">
        
       
        <div className="card--like">
         {/* <Star/>    */}
        </div>
         
        <img className="card--image" src={props.img} alt="card" />
        
        <div className="card--text">
            <div className="card--star">
            <span>{props.name}</span>
            <span>{props.age}</span>
            
            </div>
            <div className="card--p">
            <span>{props.status}</span>
            <span>{props.location}</span>
            </div>
        </div>
    
    </section>
   )
}