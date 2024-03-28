import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from "./Modal";
import Videogallery from "./Videogallery";
import "./Photos.css";
import Img1 from '../images/pablo.png'
import { RModalImages } from 'react-modal-images'
import Data from "../Data";

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props;
 
   return (
     <div
       role="tabpanel"
       hidden={value !== index}
       id={`simple-tabpanel-${index}`}
       aria-labelledby={`simple-tab-${index}`}
       {...other}
     >
       {value === index && (
         <Box sx={{ p: 3 }}>
           <Typography>{children}</Typography>
         </Box>
       )}
     </div>
   );
 }
 
 CustomTabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
 };
 
 function a11yProps(index) {
   return {
     id: `simple-tab-${index}`,
     'aria-controls': `simple-tabpanel-${index}`,
   };
 }




   export default function Photos({data}){
      const [isOpen, setIsOpen] = useState(false);
       const [isId, setId] = useState(0);
       const picModal= [];
       const [isModal, setModal]= useState('')
      
    const {id} = useParams()
    

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   //  const getArrId = async (id) => {
   //    console.log(id);
   //      // we can access id now
      
   //    const res = await fetch();
   //  };
   const foto= 
   data
   .filter(list => list.id === parseInt(id)  )
   .map((list) => (
         list.photos.map
         ((item)=>(
           
           <div className="photo-grid-item">
           <button onClick={() => {
            setId(item.id); 
            setIsOpen(true);
             picModal.push(`/${item.src}`)
             setModal(`/${item.src}`)
            
            console.log(picModal)
          }} > 
          {/* onClick={() => setIsOpen(true)} */}
        <img   src={`/${item.src}`} alt="card" /> 
      
      
      </button>  
      {isOpen && <Modal setIsOpen={setIsOpen} image={isModal} text={`/${picModal.src}`}/>} 
           
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
       
console.log(isModal)

    return(
     <section className="photo-grid-container">
          {/* <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button> */}
      {/* {isOpen && <Modal setIsOpen={setIsOpen} image={setfoto} />} */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Galleria Pública" {...a11yProps(0)} />
    <Tab label="Galleria Privada" {...a11yProps(1)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0} className="Tabpanel">
  {foto} 
  
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two 
  <Videogallery/>
</CustomTabPanel>

        
        
   
     </section>
    )
 }