import React from 'react';
import {FaStar} from "react-icons/fa";
import { useState } from 'react';
//import "./Estrellas.css"

const Estrellas = () => {
const [star, setStar]= useState (null);
const [hover, setHover]= useState (null);
return (
<div>
      {[...new Array(5)].map((star,i) =>{
            const ratingVal= i+1;
         return  (
         <label>
            < input
            type= "hidden"
            name = "puntuacion" 
            value = {ratingVal} 
            onClick = {() => setStar = (ratingVal)}
            />
            

         <FaStar className='star' color = {ratingVal <= (hover || star) ? "#ffc107":"#d6d4d2"} size="25"
           onMouseEnter={()=> setHover(ratingVal)}
           onMouseUp={()=> setHover(null)}/>
         </label>   )
 })}
      
</div>


)
}


export default Estrellas;
