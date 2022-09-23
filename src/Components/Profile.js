import React from "react";
import "./Profile.css";
import work from "../images/work.svg"


import { useParams } from "react-router-dom";

export default function Profile({data}){
    const {id} = useParams()
    return(
         <div>
            
            <div >
          {
            data
              .filter(list => list.id === parseInt(id)  )
              .map((list) => (
                <div  key={ list.id }>
                <div className="profile--contact">
                   
                    <img className="profile--photo" src={`/${list.img}`} alt="photoprofile"/> 
                    <div className="profile--data">
                      <h2> {list.name}</h2>
                      <p>{list.ocupation}</p>
                        <div className="work--icon"> 
                            <img src={work} alt="workicon" height={"30px"}/> 
                        <p>{list.work}</p>
                        </div>
                       
                       <button>Contact</button>
                    </div>
                    <div className="profile--price">
                        <span>${list.price}/hora</span>
                    </div>
                    <div className="profile--social">
                        <p>Disponibilidad: Completa</p>
                        <p>Edad: {list.age}</p>
                        <p>Residencia: {list.location}</p>
                    </div>
                </div>
                <div className="profile--likes">
                {list.likes.map((item)=>(
                    <p className="likes--text">{item}</p>
                   ))}
                </div>
                
                <div className="profile--descriptions">
                   <div className="profile--services">
                   <p>Servicios</p>
                    </div> 
                   <div className="profile--description">
                    <p>Descripción</p>
                    
                    <div className="text">{list.description}</div>
                    
                    </div> 
                   <div className="profile--related">
                   <p>Perfiles Relacionados</p>
              
                    </div>  
                </div>

                <div className="gallery">
                  <p>Galería</p>
                  {
                    list.photos.map((item)=>(
                      <img src={`/${item}`} alt="photogallery"/>
                    ))
                  }

                </div>
                
                  
                </div>
              ))}
        </div>

           
         </div>
    )
}