import axios from 'axios'
import './App.css';
import react, {useEffect, useState} from 'react'
import Form from './components/Form';
import Carousel from './components/Carousel';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
 
  return (
   <div>
    <Router>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='carousel' element={<Carousel/>}/>
      
    </Routes>
    </Router>
   </div>
  );
}

export default App;
