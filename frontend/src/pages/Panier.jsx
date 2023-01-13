import React from 'react';
import Navbar from '../components/Navbar'
import PanierVide from '../components/PanierVide';

const Panier = ({panier,setPanier,deleProduct}) => {
    console.log(panier)
    return (
        <>
        <Navbar panier={panier}/>
         <div className='panier'>
          {panier.length ===  0 ? <PanierVide/>:''}
            {panier.map((item,id)=>(
                <div className='card-panier' key={item.id}>
                  <div className='card-image-panier'>
                    <img className='imagePanier' src={item.image} alt={item.nom} /> 
                    <div className='card-name-panier'><h2>{item.nom}</h2></div>
                  </div>
                  <div className='card-body-panier'>
                  
                   <div className='card-price-panier'><h1>Prix</h1><h2>{item.price*item.qty} Fcfa</h2> </div>
                   <div className='card-qty'><h1>Quantity</h1>
                   <div className='btn-incrementation'>
                     <button className='btn btn-plus' onClick={()=>{
                      const PAN = panier.map((item2,id_2) => id_2 === id ?{...item2 ,qty:item2.qty+1}:item2)
                      setPanier(PAN)
                     }}>
                     <i className="fa-solid fa-cart-plus"></i>
                     </button>
                     <h2>{item.qty}</h2>
                     <button className='btn btn-minus' onClick={()=>{
                      const PAN = panier.map((item2 ,id_2) => id_2 === id ?{...item2 ,qty:item2.qty-1}:item2)
                      setPanier(PAN)
                     }}>
                     <i className="fa-solid fa-cart-minus">-</i>
                     </button>
                   </div>
                   </div>
                   <button className='btn btn-card-remove' onClick={()=>deleProduct(item.id)}><i className="fa-solid fa-trash"></i>Remove</button>
                  </div>
                </div>
            ))}
            <div className='commande'>
            <h2>Total :{panier.map((item)=>(item.price*item.qty)).reduce((a,b)=> a+b,0)} <i className="fa-solid fa-sack-dollar"></i>Fcfa</h2>
           {panier.length === 0 ?'': (
            <form>
                 <button className='btn btn-commande'><i className="fa-solid fa-dollar-sign"></i>Commander<i className="fa-solid fa-paper-plane"></i></button>
            </form>
            )}
            </div>

        </div>
        </>
    );
};

export default Panier;