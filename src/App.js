import React from 'react';
import { Routes, Route, BrowserRouter, Link , Outlet} from 'react-router-dom';
import './App.css';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import Navbar from './Componentes/Navbar/Navbar';
import Mapas from './Componentes/Mapas/Mapas';
import DetalleAgentes from './Componentes/DetalleAgentes/DetalleAgentes';

function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        path="/*"
        element={
          <div>
            <Navbar />
            <Outlet />
          </div>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="mapas" element={<Mapas />} />
        <Route path="detalle/:id" element={<DetalleAgentes />} />
      </Route>
    </Routes>
  );
}

function RouterWrapper() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default RouterWrapper;

