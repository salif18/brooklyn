import React from 'react'
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/im4.jpg'
import img3 from '../assets/img3.jpeg'

const ImageCate =()=>{
    const images=[img1,img2,img3]
    return( 
        <>
   
     <div className='slider'>
       
        {images.map((image,id)=>(
            <div className='slide' key={id}>
              <img className='img-slide' src={image} alt='im' />
            </div>
        ))}
     </div>
     </>
    )
}

export default ImageCate