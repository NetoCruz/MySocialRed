
import React, {useState, useEffect} from "react";
import "./Gallery.css"
import Data from "../Data"
import Card from "./Card"
import StarButton from "./StarButton"
import { Link } from "react-router-dom";


export default function Gallery(){

    const [filteredList, setFilteredList] = useState(Data);
  
  const [selectedAge, setSelectedAge] = useState("");
  const [selectRank, setSelectRank] = useState("")

  const [inputText, setInputText] = useState("")
  let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  

  const filterByAge = (filteredData) => {
    
    if (!selectedAge) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
        (car) => car.age >= parseInt(selectedAge)
      );
      return filteredCars;
    };

    const filterByRank = (filteredData) => {
    
      if (!selectRank) {
        return filteredData;
      }
     
      const filteredrank = filteredData.filter(
          (car) => car.rank == parseInt(selectRank)
        );
        return filteredrank;
    
      };
 
    const handleBrandChange = (event) => {
        setSelectedAge(event.target.value);
      };

      const handlerank = (event) => {
        setSelectRank(event.target.value);
      };
    
      
       useEffect(() => {
         var filteredData = filterByRank(Data);
      
       
         setFilteredList(filteredData);
       }, [selectRank,selectedAge]);
         
         
  

      useEffect(() => {

        

        var filteredData = filterByAge(Data);
      
       
        setFilteredList(filteredData);
      }, [selectedAge]);


      


      const filteredData = filteredList.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    const cards = filteredData.map(item =>{
        return(
         
         
      
        <div>
            <div className="card--like">
            <StarButton/>
            </div>
            <Link to={`/profile/${item.id}`} className="card">
            <Card
            img={item.img}
            name={item.name}
            age={item.age}
            status={item.status}
            location={item.location}
            />
           </Link>
            
          </div> 
           
        )
       })

      
    return(
      
  

        <div>
        <h1> Mis Contactos</h1>
        {/* <div className="brand-filter">
        <div>Filter by Brand :</div>
        <select
          id="brand-input"
          value={selectedAge}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          <option value="30">+30</option>
          <option value="50">+50</option>
         
        </select>
      </div> */}
      
          <div className="search">
            <input type="search"
                  placeholder='Buscar contacto por nombre'  
                  onChange={inputHandler} 
            >
            </input>
          </div>
      <div className="searchbutton">
          <button
          value=""
          onClick={handleBrandChange}
          >Todos</button>

        <button
          value="30"
          onClick={handleBrandChange}
          >+30</button>

        <button
          value="40"
          onClick={handleBrandChange}
          >+40</button>


          <button
          value="1"
          onClick={handlerank}
          >1</button>
          <button
          value="2"
          onClick={handlerank}
          >2</button>

      </div>

        <section className="container">
          
              {cards}  
           
           
        </section>
        
        </div>
        
    )
}