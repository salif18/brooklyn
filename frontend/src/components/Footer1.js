import React from 'react';
import { Parallax } from 'react-parallax';
import back3 from '../assets/background/bg.jpg'
const Footer1 = () => {
    return (
        <>
        
         
            <Parallax className='para' bgImage={back3}  strength={300}> 
             <div className='footer1'>
              <li className='auteur'>
              <h2 >Auteur</h2>
               <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
             </li> 
            
             <li className='auteur'>
              <h2 >Maison</h2>
              <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
            </li>
             
            <li className='auteur'>
             <h2 >aaa</h2>
             <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
           </li>
            </div>
            </Parallax>
        
       
        </>
    );
};

export default Footer1;