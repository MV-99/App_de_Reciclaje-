
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//function circulo
function Circulo({ size = 80, color = 'green' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'inline-block',
        marginTop: '40px',
      }}
    ></div>
  );
}


//function  input
function Input(placeholder, type) {
  return (
    <input
      placeholder={placeholder}
      type={type}

    ></input>
  )
}

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'white',
          width: '600px',
          height: '600px',
          borderRadius: '15px',
          boxShadow: '0 5px 10px #b8b3b3ff',
        }}
      >
        <div style={{ marginTop: '30px' }}>
          <Circulo size={80} color="#2fb166" />
          <h2 style={{ fontSize: '30px', marginTop: '10px' }}>¡Bienvenido a EcoPoints!</h2>
          <h4 style={{ marginTop: '-20px' }}>Ingresa tus credenciales</h4>
          <div style={{ marginTop: '90px' }}>
            <h5 style={{marginTop:'-50px'}}>Usuario</h5>
            <input placeholder='User123@example.com'
              type='text'
              style={{
                width: '450px',
                height: '45px',
                borderRadius: '10px',
                marginTop:'-40px' //altura input usuario
              }} />
              <h5 style={{marginTop:'10px'}}>Contraseña</h5>
               <input placeholder='User123@example.com'
              type='text'
              style={{
                width: '450px',
                height: '45px',
                borderRadius: '10px',
                marginTop:'-25px'
              }} />
              <h5 style={{marginTop:'15px'}}>¿No tienes una  cuenta? Registrate</h5>
              <button style={{width:'460px',
              backgroundColor:'#2fb166',
              color:'white',
              borderRadius:'10px'

              }}>Iniciar Sesion</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App
