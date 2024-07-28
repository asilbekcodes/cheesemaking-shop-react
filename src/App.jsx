import React from 'react';
import Header from './components/Header';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
