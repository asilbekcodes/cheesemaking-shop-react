import React, { useState } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Card from './pages/Card';
import ProductCard from './pages/ProductCard';
import Login from './pages/Login';

function App() {

  const [cart, setCart] = useState([])
  function addToCart({ item}) {
    setCart ([...cart, item])

  }

  
  return (
    <React.Fragment>
      <Header length={cart.length}/>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart}/>} />
          <Route path='/card' element={<Card cart={cart} setCart={setCart}  />} />
          <Route path='/productCard' element={<ProductCard/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
