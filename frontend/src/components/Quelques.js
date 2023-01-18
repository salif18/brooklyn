import Carousel from 'react-multi-carousel'
import img1 from '../assets/image/lunette.avif'
import img2 from '../assets/image/montre1.webp'
import img3 from '../assets/image/montre2.jpeg'
import img4 from '../assets/image/pantf1.jpg'
import img5 from '../assets/image/pantf2.jpg'
import img6 from '../assets/image/pantf3.avif'
import img7 from '../assets/image/pantf4.jpg'
 
 const Quelques =()=>{
    const data1 =[img1,img2,img3,img4,img5,img6,img7]
    const responsive ={
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
        
    }
    return(
        <div className="container">
        <Carousel responsive={responsive}>
            {
             data1.map((img,i)=>(
                <img key={i} style={styles.img} src={img} alt='f'/>
             ))
            }
        </Carousel>
        </div>
    )
}

const styles={
 img:{
    with:400,
    height:400
 }
}
export default Quelques