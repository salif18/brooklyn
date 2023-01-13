import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import imageStandard from '../assets/looo.jpg'
import ImageEchant from '../components/ImageEchant';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';


const Home = ({panier}) => {
    return (
        <>
            <Header />
            <Navbar panier={panier}/> 
            <h1 className='home-msg'>Welcom to Space Shopping</h1>
            <div className='home'>
               
                 <div className="infos">
                    <h2>Donner a votre apparence <br/>un nouveau style !</h2>
                    <p>La grandeur n'est pas toujours une question de beaute<br/> mais une question d'apparence <br/>
                    un habillement correct  consistant gagne toujours au respect .<br/>La beaute viendra</p>
                    <button className='btn btn-dark'><NavLink to='/product'><a href>Explorez notre Boutique <i className="fa-solid fa-shop"></i>&#8594;</a></NavLink></button>
                 </div>
                
                 <div className="image-info">
                    <img src={imageStandard} alt='sss'/>
                 </div>
                      {/* section category */}
                      
                      <div className="section-cate">
                        <h2>Echantillons</h2>
                        <ImageEchant/>
                      </div>
                      {/* quelques produit */}
                      <div className='quelques-product'>

                      </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;