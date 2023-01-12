import React from "react";
import { useParams } from "react-router-dom";
import data from '../context/data.json'
import Header from "./Header";
import Navbar from "./Navbar";

const ProductDetail = () => {
    // const image1 =data[2].image
    const {id} =useParams()
    const proDetail = data.filter(x =>x.id === id)
    const prod =proDetail[0]
    console.log(prod)
    return (
    <>
    <Header/>
    <Navbar/>
    <div className="detail">
      <div className="card-product">
        <div className="detail-img">
          <img className='image-det' src={prod.image} alt="" />
        </div>
        <div className="card-body-product">
          <h1 className="card-name-product">{prod.nom}</h1>
          <h2 className="card-price-product">{prod.price}</h2>
          <select className="select" value name='taille' onChange>
            <option value>Select-Size</option>
            <option value="xxl">XXL</option>
            <option value="xl">XL</option>
            <option value="xm">XM</option>
          </select>
          <div className="qty">
        
            <input className="input-num" type="number" placeholder="Quantity :" />
            <button className="btn btn-dark-prod"><i className="fa-solid fa-cart-plus"></i></button>
          </div>
          <h2 className="description">Description</h2>
          <p className="card-desc-product">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie
            depuis les années 1500,
            <br /> quand un imprimeur anonyme assembla ensemble des morceaux de
            texte pour réaliser un livre spécimen de polices de texte.
            <br /> Il n'a pas fait que survivre cinq siècles,
            <br />
            mais s'est aussi adapté à la bureautique informatique, sans que son
            contenu n'en soit modifié.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
