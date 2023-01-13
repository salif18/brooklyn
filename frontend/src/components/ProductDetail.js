import React from "react";
import { useParams } from "react-router-dom";
import data from '../context/data.json'
import Header from "./Header";
import Navbar from "./Navbar";

const ProductDetail = ({panier,setPanier}) => {
    // const image1 =data[2].image
    const {id} =useParams()
    const proDetail = data.filter(x => x.id === id)
    const pro = proDetail[0]
   
    const handlerAdd = (pro)=>{
      setPanier([...panier,{...pro ,qty:1}])
    }


    return (
    <>
    <Header/>
    <Navbar panier={panier}/>
    <div className="detail">
      <div className="card-product">
        <div className="detail-img">
          <img className='image-det' src={pro.image} alt="" />
        </div>
        <div className="card-body-product">
          <h1 className="card-name-product">{pro.nom}</h1>
          <h2 className="card-price-product">{pro.price}</h2>
          <select className="select" value name='taille' onChange>
            <option value>Select-Size</option>
            <option value="xxl">XXL</option>
            <option value="xl">XL</option>
            <option value="xm">XM</option>
          </select>
          <div className="qty">
            <label htmlFor="color"><h2>Color</h2></label>
            <input className="input-num" type="color" placeholder="Couleur :" />
            <button className="btn btn-dark-prod" onClick={()=>handlerAdd(pro)}><i className="fa-solid fa-cart-plus"></i></button>
          </div>
          <h2 className="description">Description</h2>
          <p className="card-desc-product">
           {pro.description}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
