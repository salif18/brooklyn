import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import imageStandard from '../assets/looo.jpg'
import ImageEchant from '../components/ImageEchant';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import MyCarousel from '../components/MyCarousel';
import Quelques from '../components/Quelques';
import {Parallax} from 'react-parallax'
import back2 from '../assets/background/bg7.webp'
import brand from '../assets/image/br.jpg'
const Home = ({panier}) => {
    return (
        <>
            <Header panier={panier} />
            <Navbar panier={panier}/>
             <Parallax bgImage={back2} strength={200} >
            <div className='home-msg'>
            <h1 className='bienvenu'>Bienvenue chez </h1><h2 className='bienvenu'  >Tokoos Shop !!</h2>
          
           </div> 
           
          
            </Parallax>
            <div className='home'>
             
              <MyCarousel/>
                 <div className="infos">
                    <h2>Donner a votre apparence <br/>un nouveau style !</h2>
                    <p>La grandeur n'est pas toujours une question de beaute<br/> mais une question d'apparence <br/>
                      un habillement correct  consistant gagne toujours au respect .<br/>La beaute viendra</p>
                    <button className='btn btn-dark'>
                      <NavLink to='/product'>
                       Explorez notre Boutique 
                       <i className="fa-solid fa-shop"></i>&#8594; 
                      </NavLink>
                    </button>               
                 </div>
            
                 <div className="image-info">
                    <img src={imageStandard} alt='sss'/>
                 </div> 
                
                      {/* section slide echantillons*/}
                        <ImageEchant>
                         <h2 className='titreechan'>
                           Echantillons
                         </h2>
                        </ImageEchant>
                      
                      {/* quelques produit */}
                         <Quelques/>

                         <div className='brand'>
                           <img className='brand-img' src={brand} alt='' />
                           <div className='st'>
                           <p>Exclusively Available on RedStore</p>
                           <h1 className='smart'>Smart Band 4</h1>
                           <p>The UI Smart Brand $ features a 39% larger (than MI Brand 3 ) AMOLED color 
                           full touch display with adustable brightness. so everything is clear as can be </p>
                         </div>
                         </div>
            
            </div>
            <Footer/>
        </>
    );
};

export default Home;