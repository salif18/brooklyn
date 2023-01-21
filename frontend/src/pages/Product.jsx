import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "../components/Category";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
// import data from "../context/data.json";
import {ClipLoader} from 'react-spinners'
import RatingStart from "../components/RatingStart";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import MyCarousel from "../components/MyCarousel";
import Axios from 'axios'
import AuthContext from "../context/authContext";

const Product = ({panier,categoryData,data,handleSubmit,handleChange,handleChange2,handleSubmit2}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const authCtx = useContext(AuthContext)
  //Etat data product
  const [product,setProduct] = useState([]);
  //get products to server mongodb
  useEffect(()=>{
      const getProducts = async()=>{
         try{
           const res = await Axios.get('http://localhost:3002/products',{
            headers:{
              'Content-Type':'application/json',
              Authorization: `Bearer ${authCtx.token}`
            }
           })
           if(res){
            const data = await res.data
             setProduct(data)
           }
         }catch(e){
          console.log(e)
         }
      }
      getProducts()
  },[])
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
      <Search data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
      <span className="ca"><Category  
      handleChange2={handleChange2}
      handleSubmit2={handleSubmit2} categoryData={categoryData}/></span>
       </div>
       <MyCarousel/>
      <div className="container">
       <h1 className="article">Nos articles</h1>
        <Carousel responsive={responsive}  >
        
       
        {product.filter((x)=>x.category.toLowerCase().includes(categoryData.category.toLowerCase())|| x.nom.toLowerCase().includes(data.search.toLowerCase())).map((item) => (
           
            <div className="card" key={item._id}>
            {loading ? <ClipLoader className="spinner" size={'40px'}/> :
            <>
              <img className="card-img" src={item.image} alt="" />
              <div className="card-body">
                <h1 className="card-name">{item.nom}</h1>
                <p className="card-desc"></p>
                <h2 className="card-price">{item.prix} Fcfa <i className="fa-solid fa-sack-dollar"></i></h2>
                <RatingStart/>
                </div>
              <div className="bt">
                <NavLink to={`/product/${item._id}`}>
                  <button className="btn btn-view">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </NavLink>
               
              </div>
              </>
            }
            </div>
          
        ))}

    
      </Carousel>

      </div>
    </>
  );
};



export default Product;
