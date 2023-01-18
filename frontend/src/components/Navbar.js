import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';


const Navbar = ({panier}) => {
    return (
        <div className='navbar'>
        
            <div className='links'>
                <NavLink className='lien' to='/'><i className="fa-solid fa-house"></i></NavLink>
                <NavLink className='lien' to='/product'><i className="fa-brands fa-shopify"></i></NavLink>
                <NavLink className='lien' to='/apropos'><i className="fa-solid fa-circle-info"></i></NavLink>
                <NavLink className='lien' to='/contact'><i className="fa-solid fa-phone"></i></NavLink>              
                <NavLink className='lien' to='/compte'><i className="fa-solid fa-user"></i></NavLink>
                <NavLink className='lien' to='/postproduct'>Vendre</NavLink>
            </div>
        </div>
    );
};

export default Navbar;