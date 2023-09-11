import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import Navbar from './Componentes/Navbar/Navbar';


function RoutesApp() {
  return (
   
   <div>
    <Routes>

      <Route path='/' element= {<Home/>} />
      <Route path='login' element= {<Login/>} />
      <Route path='navbar' element= {<Navbar/>} />
      
    </Routes>
   </div>

  );
}
function RouterWrapper(){
  return(
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}
export default RouterWrapper;
