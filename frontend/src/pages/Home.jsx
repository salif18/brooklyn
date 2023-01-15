import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import imageStandard from '../assets/looo.jpg'
import ImageEchant from '../components/ImageEchant';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import MyCarousel from '../components/MyCarousel';

const Home = ({panier}) => {
    return (
        <>
            <Header panier={panier} />
            <Navbar panier={panier}/> 
            <div className='home-msg'>
            <h1>Bienvenue dans univers des</h1><h2>Qualites !!</h2>
            
           </div>
           <MyCarousel/>
            <div className='home'>
                
                 <div className="infos">
                    <h2>Donner a votre apparence <br/>un nouveau style !</h2>
                    <p>La grandeur n'est pas toujours une question de beaute<br/> mais une question d'apparence <br/>
                    un habillement correct  consistant gagne toujours au respect .<br/>La beaute viendra</p>
                    <button className='btn btn-dark'><NavLink to='/product'>Explorez notre Boutique <i className="fa-solid fa-shop"></i>&#8594; </NavLink></button>
                
                 </div>
                 <div className="image-info">
                    <img src={imageStandard} alt='sss'/>
                 </div> 
                
                      {/* section category */}
                      
                      
                        <ImageEchant>
                         <h2 className='titreechan'>Echantillons</h2>
                        </ImageEchant>
                      
                      {/* quelques produit */}
                      <div className='quelques-product'>

                      </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;