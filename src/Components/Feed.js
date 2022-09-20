import React,{useState} from "react";
import "./Feed.css"

export default function Feed({data}){
     const [filteredList, setFilteredList] = useState(data);
    
      const myPosts = filteredList.map((item)=>item.posts.map((post)=>{
            return(
         
              <div className="post">
              <div className="post-title">
              <img className="profile-photo" src={`/${item.img}`}/>
              <p>{item.name}</p>
              </div>
                
                 <p>{post.fecha}</p>
                 <p>{post.texto}</p>
              <img className="post-image" src={`/${post.img}`} style={{display: post.img ? '' : 'none' }} /> 
           
         
          </div>
        )
      }))
    
    console.log(myPosts)
    


    return(
        <>
        <div className="feed">
        {myPosts}
        </div> 
        </>
    )
}