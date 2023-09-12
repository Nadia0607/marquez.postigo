import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar el usuario y contraseña en la consola
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Esperar unos segundos antes de redireccionar
    setTimeout(() => {
      // Redireccionar a /home después de 2 segundos (2000 milisegundos)
      window.location.href = '/home';
    }, 2000); // Cambia el valor de 2000 para ajustar el tiempo de espera (en milisegundos)
  };

  return (
    <div className='contenedor'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='form-title'>Inicie sesión</p>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Ingrese email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <input
            type='password'
            placeholder='Ingrese contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit'>
          LogIn
        </button>
      </form>
    </div>
  );
}

