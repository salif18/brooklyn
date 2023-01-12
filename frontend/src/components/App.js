
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


function App() {

  return (
    <div className="app">
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productDetails:id' element={<ProductDetail/>}/>
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
