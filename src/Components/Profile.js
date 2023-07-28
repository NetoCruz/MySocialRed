import React from "react";
import "./Profile.css";
import work from "../images/work.svg"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Photos from "./Photos";

export default function Profile({data}){
    const {id} = useParams()
    return(
      
    
 
         
            
            <>
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
                    {/* <div className="profile--likes">
                    {list.likes.map((item)=>(
                        <p className="likes--text">{item}</p>
                      ))}
                    </div> */}
                    
                    <section class="detail">
                      <div> 
                      <div class="fotografia">
                      <Link to={`/photos/${list.id}`} className="card">
                      <p>fotos</p>
                      {/* <Photos
                      img={list.photos}
                      /> */}
                      </Link>
                      <div class="galleria">
                        <img src="../../public/bris.jpg" width="100px" height="100px" alt=""/>
                        <img src="../../public/bris.jpg" width="100px" height="100px" alt=""/>
                        <img src="../../public/bris.jpg" width="100px" height="100px" alt=""/>
                        <img src="../../public/bris.jpg" width="100px" height="100px" alt=""/>
                      </div>
                        </div>
                        <div class="interes">
                        <p>intereses</p>
                        <div class="lista">
                        {list.likes.map((item)=>(
                        <p className="likes--text">{item}</p>
                      ))}
                        </div>
                            
                            </div>
                        </div>
                        <div class="about">
                            <p>Acerca de mi</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nibh eu molestie maximus. Fusce laoreet tempor turpis non tempor.<br/>
                            Phasellus venenatis elementum est, vehicula suscipit nisl sodales vel.</p>
                        </div>
                        <div class="prices">
                          <p>Tarifas</p> 
                          <p>1hr  $1200.00</p>
                          <p>1hr  $1200.00</p>
                          <p>1hr  $1200.00</p>
                        </div>
                      </section>
                    
                    </div>
                  
                ))
              
              }
        </>

           
         
       
    )
}