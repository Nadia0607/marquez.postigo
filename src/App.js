import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import Navbar from './Componentes/Navbar/Navbar';
import Mapas from './Componentes/Mapas/Mapas';
import DetalleAgentes from './Componentes/DetalleAgentes/DetalleAgentes';


function RoutesApp() {
  return (
   
   <div>
    <div>
      <Navbar/>
    </div>
    <Routes>

      <Route path='/' element= {<Home/>} />
      <Route path='login' element= {<Login/>} />
      <Route path='mapas' element= {<Mapas/>} />
      <Route path='detalle/:id' element= {<DetalleAgentes/>} />   
      
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

