import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import PanierVide from "../components/PanierVide";

const Panier = ({ panier, setPanier, deleProduct }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  },[]);
console.log(panier)
  // const [panierToserver,setPanierToserver]=useState(panier)
  // console.log(panierToserver)
  //fonction envoie commande
  const handleSubmit = (e) => {
    //code envoie panier  commade dans la base de donne
  };
  return (
    <>
      <Navbar panier={panier} />

      <div className="panier">
        {panier.length === 0 ? <PanierVide /> : ""}
       {panier.map((item,id) => (

 
          <div className="card-panier" key={item._id}>
     {loading ? <ClipLoader className="spinner" size={'40px'} /> :
      <>
            <div className="card-image-panier">  
          <img className="imagePanier" src={item.image} alt={item.nom} />
              <div className="card-name-panier">
                <h2>{item.nom}</h2>
              </div>
            </div>
            <div className="card-body-panier">
              {item.category === "vetement" ? (
                <div className="card-taille">
                  <h1>Size</h1>
                  <h2>{item.size}</h2>
                </div>
              ) : (
                <div className="card-pointure">
                  <h1>P</h1>
                  <h2>{item.pointure}</h2>
                </div>
              )}
              <div className="card-color">
                <h1>C</h1>
                <h2>{item.color}</h2>
              </div>
              <div className="card-price-panier">
                <h1>Prix</h1>
                <h2>{item.prix * item.qty} Fcfa</h2>{" "}
              </div>
              <div className="card-qty">
                <h1>Quantity</h1>
                <div className="btn-incrementation">
                  <button
                    className="btn btn-plus"
                    onClick={() => {
                      const PAN = panier.map((item2, id_2) =>
                        id_2 === id ? { ...item2, qty: item2.qty + 1 } : item2
                      );
                      setPanier(PAN);
                    }}
                  >
                    +
                  </button>
                  <h2>{item.qty}</h2>
                  <button
                    className="btn btn-minus"
                    onClick={() => {
                      const PAN = panier.map((item2, id_2) =>
                        id_2 === id ? { ...item2, qty: item2.qty - 1 } : item2
                      );
                      setPanier(PAN);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="btn btn-card-remove"
                onClick={() => deleProduct(item._id)}
              >
                <i className="fa-solid fa-trash"></i>Remove
             </button>
            </div>
           
          </>}   
          </div>
                 
        ))}
        <div className="commande">
          <h2>
            Total :
            {panier
              .map((item) => item.prix * item.qty)
              .reduce((a, b) => a + b, 0)}{" "}
            <i className="fa-solid fa-sack-dollar"></i>Fcfa
          </h2>
          {panier.length === 0 ? (
            ""
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
              <button className="btn btn-commande">
                <i className="fa-solid fa-dollar-sign"></i>Commander
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          )}
          
        </div>
  
         
      </div>
    </>
  );
};

export default Panier;
