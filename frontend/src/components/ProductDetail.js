import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from '../context/data.json'
import Header from "./Header";
import Navbar from "./Navbar";

const ProductDetail = ({panier,setPanier}) => {
    // const image1 =data[2].image
    const pointures = ['S','M','L','XL','XXL','XXXL']
    
    //recuperer id dans url
    const {id} =useParams()
    const proDetail = data.filter(x => x.id === id)
    const pro = proDetail[0]
   
    //Etat de click en cas de click sur btn add
    const [click,setClick]=useState(false)

    //donnees de selection 
    const [detail,setDetail] =useState({taille:'',size:''})
    const handleChange=(e)=>{
      const {name,value}=e.target 
      setDetail({...detail,[name]:value})
    }

    //Fonction ajout au panier
    const handlerAdd = (pro)=>{
      setPanier([...panier,{...pro ,...detail,qty:1}])
      setClick(true)
    }
    //redirect vers la page produit en cas d'ajout au panier
    const navigate = useNavigate()

    return (
    <>
    <Header/>
    
    {click ? navigate('/product'):''}

    <Navbar panier={panier}/>

    <div className="detail"> 

      <div className="card-product">
        <div className="detail-img">
          <img className='image-det' src={pro.image} alt="" />
        </div>
        <div className="card-body-product">
          <h1 className="card-name-product">{pro.nom}</h1>
          <h2 className="card-price-product">{pro.price} Fcfa</h2>
          <select className="select" value={detail.size} name='size' onChange={(e)=>handleChange(e)}>
            <option value>Select-Size</option>
            {pointures.map((pointure)=>(<option value={pointure}>{pointure}</option>))}
          </select>
          <div className="qty">
            <label htmlFor="color"><h2>Color</h2></label>
            <input className="input-num" name='color' value={detail.color} onChange={(e)=>handleChange(e)} type="color" placeholder="Couleur :" />
            <button className="btn btn-dark-prod"  onClick={()=>handlerAdd(pro)}><i className="fa-solid fa-cart-plus"></i></button>
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
