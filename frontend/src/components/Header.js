import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({panier}) => {
    return (
        <div className='header'>
        <h1 className='header-title'>Bon marché</h1>
         <div className='panier-header'>
           <NavLink className='header-panier' to='/panier'><a href><i className="fa-solid fa-cart-shopping"></i><span className='nombrePanier'>{panier.length}</span></a></NavLink>
         </div>
        </div>
    );
};

export default Header;