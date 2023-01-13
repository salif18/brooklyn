import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({panier}) => {
    return (
        <div className='navbar'>
    
            <div className='links'>
                <NavLink className='lien' to='/'><a href><i className="fa-solid fa-house"></i></a></NavLink>
                <NavLink className='lien' to='/product'><i className="fa-brands fa-shopify"></i></NavLink>
                <NavLink className='lien' to='/apropos'><a href><i className="fa-solid fa-circle-info"></i></a></NavLink>
                <NavLink className='lien' to='/contact'><a href><i className="fa-solid fa-phone"></i></a></NavLink>
                <NavLink className='lien' to='/panier'><a href><i className="fa-solid fa-cart-shopping"></i><span className='nombrePanier'>{panier.length}</span></a></NavLink>
                <NavLink className='lien' to='/count'><a href><i className="fa-solid fa-user"></i></a></NavLink>
                <NavLink className='lien' to='/login'>login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;