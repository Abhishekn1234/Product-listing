
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Category from './components/Category';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categorylist from './components/Categorylist';
import ProductList from './components/Productlist';
import YourComponent from './components/ListingProduct';
import Phone from './components/Phone';
import Android from './components/Android';
import Ios from './components/Ios';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/category" element={<Category/>}/>
      <Route path="/listings/:phones" element={<Phone/>}/>
      <Route path="/android" element={<Android/>}/>
      <Route path="/ios" element={<Ios/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/productlist" element={<ProductList/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/listing" element={<YourComponent/>}/>
      <Route path="/categorylist" element={<Categorylist/>}/>
      
    </Routes>
    
    </BrowserRouter>
       
    </div>
  );
}

export default App;
