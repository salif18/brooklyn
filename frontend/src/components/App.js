
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

const getLocalStorage = ()=>{
  const data = localStorage.getItem('panier')
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}
function App() {

  //Panier 
  const [panier,setPanier]=useState(getLocalStorage())

  useEffect(()=>{
    localStorage.setItem('panier',JSON.stringify(panier))
  },[panier])

  console.log(panier)
  return (
    <div className="app">
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail panier={panier} setPanier={setPanier}/>}/>
        <Route path='/about' element={<Apropos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/panier' element={<Panier />} />
        <Route path='/count' element={<Count />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
