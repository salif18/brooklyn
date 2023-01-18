import React from 'react'
import im1 from '../assets/echantillons/chem1.jpg'
import im2 from '../assets/echantillons/chem2.jpg'
import im3 from '../assets/echantillons/chem3.jpg'
import im4 from '../assets/echantillons/chem4.jpg'
import im5 from '../assets/echantillons/montre.jpg'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const ImageEchant =(props)=>{
    const echantillons=[im1,im2,im3,im4,im5]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
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