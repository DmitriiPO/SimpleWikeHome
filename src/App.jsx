import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import Favorites from './components/favorites/Favorites.jsx';
import About from './components/about/About.jsx'
import Cart from './components/cart/Cart.jsx'
import Description from './components/description/Description.jsx'
import Form from './components/form/Form.jsx'

function App() {
  //хранение данных туров
  const[tours, setTours] = useState([]);
  useEffect(()=>{
    async function axiosData(){
      const toursData = await axios.get("https://644d654357f12a1d3dde72f2.mockapi.io/tours")
      setTours(toursData.data)
    }
    axiosData();
  },[]) 

  return (
    <div className="conteiner">
      <Router>
        <Header/>
        <Routes>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/description' element={<Description/>}/>
          <Route path='/' element={<Home item={tours}/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
