import React from 'react';
import logoPanier from '../assets/images.png'

const PanierVide = () => {
    return (
        <div className='paniervide'>
            <h2>Votre panier est vide</h2>
            <div>
              <img className='logo-panier' src={logoPanier} alt='vide' />
            </div>
        </div>
    );
};

export default PanierVide;