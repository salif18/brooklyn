import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'
 
const RatingStart = () => {
    const [rating , setRating] = useState(null)
    const [hover,setHover]=useState(null)
   
    return (
        <div className='rating'>
            {[...Array(5 )].map((star, i)=>{
                const ratingValue = i + 1;
               return <label>
                  <input type='radio'
                   name='rating' 
                   value={ratingValue}
                    onClick={()=>setRating(ratingValue )}
                    />
                  <FaStar className='star' 
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                    color={ratingValue <=( hover || rating )? 'orange':'#555' }
                     size={20} />
                </label>
            })}
            <p className='avis'>{rating} Etoiles</p>
        </div>
    );
};

export default RatingStart;