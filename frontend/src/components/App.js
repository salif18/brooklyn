import Home from '../pages/Home';
import Product from "../pages/Product";
import Apropos from '../pages/Apropos';
import Contact from "../pages/Contact";
import Count from '../pages/Count';
import Panier from '../pages/Panier';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useEffect, useState } from 'react';

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
    setPanier(panier.filter((pro)=>pro.id !==id))
  }
  
  return (
    <div className="app">
    
      <Routes>
        <Route path='/' element={<Home panier={panier}/>} />
        <Route path='/product' element={<Product panier={panier}/>} />
        <Route path='/product/:id' element={<ProductDetail panier={panier} setPanier={setPanier} />}/>
        <Route path='/about' element={<Apropos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/panier' element={<Panier panier={panier} setPanier={setPanier} deleProduct={deleProduct}/>} />
        <Route path='/count' element={<Count />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
