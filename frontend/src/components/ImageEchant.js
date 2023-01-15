import React from 'react'
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/im4.jpg'
import img3 from '../assets/img3.jpeg'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const ImageEchant =(props)=>{
    const echantillons=[img1,img2,img3]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return( 
        <>
   
     <div className='container'>
        {props.children}
       <Carousel responsive={responsive}>
        {echantillons.map((image,id)=>(
            <div className='slide' key={id}>
              <img className='img-slide' src={image} alt='im' />
            </div>
        ))}
        </Carousel>
     </div>
     </>
    )
}

export default ImageEchant