import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import logo from '../assets/looo.jpg'
import ImageCate from '../components/ImageCate';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header />
            <Navbar /> 
            <h1 className='home-msg'>Welcom to Space Shopping</h1>
            <div className='home'>
               
                 <div className="infos">
                    <h2>Donner a votre apparence <br/>un nouveau style !</h2>
                    <p>La grandeur n'est pas toujours une question de beaute<br/> mais une question d'apparence <br/>
                    un habillement correct  consistant gagne toujours au respect .<br/>La beaute viendra</p>
                    <button className='btn btn-dark'><NavLink to='/product'><a href>Explorez notre magasin &#8594;</a></NavLink></button>
                 </div>
                
                 <div className="image-info">
                    <img src={logo} alt='sss'/>
                 </div>
                      {/* section category */}
                      
                      <div className="section-cate">
                        <h2>Categories vedettes</h2>
                        <ImageCate/>
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