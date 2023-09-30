import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/HomePage/Home';
import Photo from './components/Product_Page/Photo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Photo/>}/>

      </Routes>
    
    </Router>
    
  );
}

export default App;
