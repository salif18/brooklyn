import React, {  useState } from 'react';
import {FaStar} from 'react-icons/fa'


 
const RatingStart = () => {
    const [rating , setRating] = useState(null)
    const [hover,setHover]=useState(null)
    
    
      const etoiles =[...Array(5)]
     
    return (
        <div className='rating'>
            {etoiles.map((star, i)=>{
              const ratingValue = 1 +i
              return(
               <label key={i}>
                  <input type='radio'
                   name='rating' 
                   value={ratingValue}
                    onClick={()=>setRating(ratingValue)}
                    />
                  <FaStar className='star' 
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                    color={ratingValue <=( hover || rating )? 'orange':'#e0e0e4' }
                     size={20} />
                </label>
              )
            })}
            <p className='avis'>{rating} Etoiles</p>
        </div>
    );
};

export default RatingStart;