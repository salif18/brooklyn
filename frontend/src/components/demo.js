import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'

const Demo = () => {
  const [rating,setRating] = useState(null)
  const [hover,setHover] = useState(null)

  const myStars = [...Array(5)] 
  
  
  return (
    <div>
      {
        myStars.map((star,i)=>{
         const ratingValue =i + 1
        
          return(
            <label>
            <input type='radio' name='rating' value={ratingValue} onClick={()=>setRating(ratingValue)} />
            <FaStar
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}

            color={ratingValue <= (hover || rating) ? 'orange':""}
             />
          </label>
          )
        })
      }
      <p>Avis {rating}</p>
    </div>
  );
};

export default Demo;