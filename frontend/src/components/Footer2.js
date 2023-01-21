import React from 'react';
import { Parallax } from 'react-parallax';
import back2 from '../assets/background/vet2.jpg'
import back3 from '../assets/background/bg2.jpg'
const Footer2 = () => {
    return (
        <Parallax className='para'  bgImage={back3} strength={100}>
        <div className='footer2'>
            <div className='auteurs'>
            <h1>Developper</h1>
            <p>Salif18</p>
            </div>
            <div className='contact'>
            <h1>Blogs</h1>
            <p>Github</p>
            <p>Tiktok</p>
            <p>instagrame</p>
            <p>wathsapp</p>
            </div>
            <div className='Services'>
            <h1>Nos services</h1>
            <p>Livraison</p>
            <p>payer a la livraison</p>
            </div>
            </div>
        </Parallax>
    );
};

export default Footer2;