import Data from "../Data";
import { useParams } from "react-router-dom";
import "./Videogallery.css"

export default function Videogallery(){

    const {id} = useParams()

     const videos=
   Data
   .filter(list => list.id === parseInt(id))
   .map((list) => (
         list.videos.map((item)=>{

         return(

           <div className="video" >
            <div className="video-container">
           <video width="400" height="250" controls  >
         <source src={`/${item.video}`} type="video/mp4"/>
           </video>
           </div>
            </div>

            )
   })

   ))

   return(
    <section>
        {videos}
    </section>
   )

}