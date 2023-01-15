import React from 'react';
import { NavLink } from 'react-router-dom';
import logoP from '../assets/images.png'
const Header = ({panier}) => {
    return (
        <div className='header'>
        <h1 className='header-title'>Bon marché</h1>
         <div className='panier-header'>
           <NavLink className='header-panier' to='/panier'><img className='lg ' src={logoP} alt='d' /><span className='nombrePanier'>{panier.length}</span></NavLink>
         </div>
        </div>
    );
};

export default Header;