  import React, { useState } from 'react';
  import './Login.css';

  export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Email:', email);
      console.log('Contraseña:', password);

      
      setTimeout(() => {
        window.location.href = '/home';
      }, 4000); 
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

