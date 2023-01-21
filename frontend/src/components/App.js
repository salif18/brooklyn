import Home from '../pages/Home';
import Product from "../pages/Product";
import Apropos from '../pages/Apropos';
import Contact from "../pages/Contact";
import Compte from '../pages/Compte';
import Panier from '../pages/Panier';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useEffect, useState } from 'react';
import PostProduct from './PostProduct';

//recuperation de panier dans localstorage
const getLocalStorage = ()=>{
  const data = localStorage.getItem('panier')
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}

function App() {

  //Panier props vers pages : home product productDetail panier navbar
  const [panier,setPanier]=useState(getLocalStorage())

  //sauvergarde panier dans localstorge
  useEffect(()=>{
    localStorage.setItem('panier',JSON.stringify(panier))
  },[panier])

  //btn suppresion props vers panier
  const deleProduct =(id)=>{
    setPanier(panier.filter((pro)=>pro._id !==id))
  }
  //etat de search props search et product
  const [data,setData]=useState({search:''})
    
  const handleChange=(e)=>{
      const {name,value}=e.target 
      setData({...data,[name]:value})
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      setData({search:''})
  }

  //etat category
  const [categoryData,setCategoryData]=useState({category:''})
  const handleChange2=(e)=>{
      const{name,value}=e.target 
      setCategoryData({...categoryData,[name]:value})
  }
  const handleSubmit2=(e)=>{
      e.preventDefault()
      setCategoryData({category:''})
  }

  return (
    <div className="app">
    
      <Routes>
        <Route path='/' element={<Home panier={panier}/>} />
        <Route path='/product' element={<Product panier={panier} 
        data={data} handleChange={handleChange} handleSubmit={handleSubmit} 
         handleChange2={handleChange2} handleSubmit2={handleSubmit2} categoryData={categoryData}/>} />
        <Route path='/product/:id' element={<ProductDetail panier={panier} setPanier={setPanier} />}/>
        <Route path='/about' element={<Apropos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/panier' element={<Panier panier={panier} setPanier={setPanier} deleProduct={deleProduct}/>} />
        <Route path='/compte' element={<Compte />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/postproduct' element={<PostProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
