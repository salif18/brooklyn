
import { NavLink } from 'react-router-dom';
import logoP from '../assets/pan2.webp';
import log from '../assets/image/fashion-logo-design.jpg';
import AuthContext from '../context/authContext';
import { useContext } from 'react';
import Logout from './Logout';
const Header = ({panier}) => {
  const authCtx = useContext(AuthContext)
    return (
        <div className='header'>
        <h1 ><img className='header-title' src={log} alt='' /></h1>
        <p>userId:{authCtx.userId}</p>

        <Logout/>
         <div className='panier-header'>
           <NavLink className='header-panier' to='/panier'><img className='lg ' src={logoP} alt='d' /><span className='nombrePanier'>{panier.length}</span></NavLink>
         </div>
        </div>
    );
};

export default Header;