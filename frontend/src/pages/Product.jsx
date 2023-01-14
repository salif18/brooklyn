import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "../components/Category";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import data from "../context/data.json";
import {ClipLoader} from 'react-spinners'
import RatingStart from "../components/RatingStart";
const Product = ({panier}) => {
  //Etat data product
  const [product] = useState(data);

  //etat de spinner
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),1000)
  },[])
  
  return (
    <>
      <Header panier={panier} />
      <Navbar panier={panier} />
      <div className="object">
      <h1 className="titre">Products</h1>
      <Search/>
      
        <span className="ca"><Category/></span>
       </div>
      <div className="product">

        {product.map((item) => (
          
            <div className="card" key={item.id}>
            {loading ? <ClipLoader className="spinner" size={'40px'}/> :
            <>
              <img className="card-img" src={item.image} alt="" />
              <div className="card-body">
                <h1 className="card-name">{item.nom}</h1>
                <p className="card-desc"></p>
                <h2 className="card-price">{item.price} Fcfa <i className="fa-solid fa-sack-dollar"></i></h2>
                <RatingStart/>
                </div>
              <div className="bt">
                <NavLink to={`/product/${item.id}`}>
                  <button className="btn btn-view">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </NavLink>
               
              </div>
              </>
            }
            </div>
          
        ))}

      </div>
    </>
  );
};

export default Product;
