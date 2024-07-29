import React from 'react';
import Header from './components/Header';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Card from './pages/Card';

function App() {
  return (
    <React.Fragment>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
        </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
