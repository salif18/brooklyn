import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import data from "../context/data.json";

const Product = ({panier}) => {
  //Etat data product
  const [product] = useState(data);
  
  return (
    <>
      <Header />
      <Navbar panier={panier} />
      <Search />
      <h1 className="titre">Products</h1>

      <div className="product">

        {product.map((item) => (
          <NavLink to={`/product/${item.id}`}>
            <div className="card" key={item.id}>
              <img className="card-img" src={item.image} alt="" />
              <div className="card-body">
                <h1 className="card-name">{item.nom}</h1>
                <p className="card-desc"></p>
                <h2 className="card-price">{item.price}</h2>
              </div>
              <div className="bt">
                <NavLink to={`/product/${item.id}`}>
                  <button className="btn btn-view">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </NavLink>
        ))}

      </div>
    </>
  );
};

export default Product;
