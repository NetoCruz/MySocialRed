import React,{useState} from "react";
import "./Feed.css"

export default function Feed({data}){
  
  // const initialState = [
  //   { name: 'Alice', fecha: '10-12-2021', texto:'holas'},
  // ];
  
  
     const [filteredList, setFilteredList] = useState(data);
     const [feed, setFeed] = useState([]);

     

        
// function myData(){
// const list=[]
// const myfeed =  filteredList.map((item)=> item.posts.forEach((post)=> list.push(post)))
// // const finalFeed = myfeed.map((post)=> post.fecha )
// setFeed(list)
// //console.log(list)
// }

function myData(){
const list=[]
const myfeed =  filteredList.map((item)=> item.posts.forEach((post)=> list.push(post)))
// const finalFeed = myfeed.map((post)=> post.fecha )
setFeed(list)
console.log(list)
}





 
    


       

       
      
    





//setFeed(list)
//console.log(list)



// setTimeout(() => {
//   myData();
// }, 1000);

        
// const myPosts = feed.map((item)=> item.posts
//        .sort((a, b) => new Date(...b.fecha.split('/').reverse()) - new Date(...a.fecha.split('/').reverse()))
//        .map((post)=>{
         
       
//             return(
         
//               <div className="post">
//               <div className="post-title">
//               <img className="profile-photo" src={`/${item.img}`}/>
//               <p>{item.name}</p>
//               </div>
                
//                  <p>{post.fecha}</p>
//                  <p>{post.texto}</p>
//               <img className="post-image" src={`/${post.img}`} style={{display: post.img ? '' : 'none' }} /> 
           
         
//           </div>
//         )
//       }))

  

  
    
    

   
  
  
      // const myPosts = filteredList.map((item)=> item.posts
      //  .sort((a, b) => new Date(...b.fecha.split('/').reverse()) - new Date(...a.fecha.split('/').reverse()))
      //  .map((post)=>{
         
       
      //       return(
         
      //         <div className="post">
      //         <div className="post-title">
      //         <img className="profile-photo" src={`/${item.img}`}/>
      //         <p>{item.name}</p>
      //         </div>
                
      //            <p>{post.fecha}</p>
      //            <p>{post.texto}</p>
      //         <img className="post-image" src={`/${post.img}`} style={{display: post.img ? '' : 'none' }} /> 
           
         
      //     </div>
      //   )
      // }))
    
    
    


    return(
        <>
        <div className="feed">
         <button onClick={myData} >click</button> 
        {/* {myPosts}          */}
        {
          Object.values(feed)
          .sort((a, b) => new Date(...b.fecha.split('/').reverse()) - new Date(...a.fecha.split('/').reverse()))
          .map((value) => {
            return (
                      <div className="post">
              <div className="post-title">
              <img className="profile-photo" src={`/${value.img}`}/>
              <p>{value.name}</p>
              </div>
                
                 <p>{value.fecha}</p>
                 <p>{value.texto}</p>
              <img className="post-image" src={`/${value.imgpost}`} style={{display: value.imgpost ? '' : 'none' }} /> 
           
         
          </div>
            );
          })
        }
        </div> 
        </>
    )
}