import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para manejar las rutas
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/home' className='nav-link'>
            Agentes
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/mapas' className='nav-link'>
            Mapas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
