import React from 'react';
import { Parallax } from 'react-parallax';
import back3 from '../assets/background/bg.jpg'
const Footer1 = () => {
    return (
        <>
        
         
            <Parallax className='footer1' bgImage={back3}  strength={300}> 
            
              <li className='auteur'>
              <h2 >Auteur</h2>
               <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.Il n'a pas fait que survivre cinq siècles,mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.</p>
             </li> 
            
             <li className='equipe'>
              <h2 >Maison</h2>
              <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.Il n'a pas fait que survivre cinq siècles,mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.</p>
            </li>
             
            <li className='equipe'>
             <h2 >aaa</h2>
             <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.Il n'a pas fait que survivre cinq siècles,mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.</p>
           </li>
        
            </Parallax>
        
       
        </>
    );
};

export default Footer1;