import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/imageCarousel/chemise1.jpg";
import logo2 from "../assets/imageCarousel/chemise2.jpg";
import logo3 from "../assets/imageCarousel/chemise4.jpg";
import logo4 from "../assets/imageCarousel/chemise5.jpeg";
import logo5 from "../assets/imageCarousel/dentel.jpeg";

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  const dataCarousel =[logo1,logo2,logo3,logo4,logo5]
  return (
    <>
      <div className="container" >
       <h2 className="titre-carousel">Nouveaux arrivages!!</h2>
        <Carousel  responsive={responsive} autoPlay={true} autoPlaySpeed={5000} transitionDuration={500}  infinite={true}>
         {dataCarousel.map((items,i)=>(
            <img key={i} style={styles.imagesCarousel} src={items} alt='' />
         ))}
        </Carousel>
        
      </div>
    </>
  );
};

const styles={
    imagesCarousel:{
          width:400,
          heigth:400,
      
    }

}

export default MyCarousel;
