
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecyclingIcon from '@mui/icons-material/Recycling';
import './App.css'


//function circulo (aca mandar a llamar el icono)
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
  //constantes de input de usuario(email)
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const maxLength = 40; //cantidad maxima de caracteres 
  const maxLength2 = 16; //cantidad maxima de caracteres en password

  //validacion de error de input email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length > maxLength) {
      setEmailError(`Máximo ${maxLength} caracteres`);
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("Porfavor escriba un email valido");
    } else {
      setEmailError("");
    }
  };
//funcion prueba de boton
  function TocarBoton(){

    return(
      alert("No se puede iniciar sesion, la pagina esta en construccion, gracias🦄🪴🦋")
    );
  }

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
          <h4 style={{ marginTop: '-20px', fontWeight: 'normal' }}>Ingresa tus credenciales</h4>
          <div style={{ marginTop: '90px' }}>
            <h5 style={{ marginTop: '-50px', marginRight: '390px' }}>🧜‍♀️Usuario</h5>
            <input
              placeholder="   User123@example.com"
              type="email"
              value={email}
              onChange={handleEmailChange}
              maxLength={maxLength}
              style={{
                width: '450px',
                height: '45px',
                borderRadius: '17px',
                marginTop: '-40px',
                fontSize: '12px',
                borderColor: '#2fb166',
                border: '2px solid #72b874ff',
                outline: 'none',
              }}
            />
            {emailError && (
              <div style={{ color: 'red', fontSize: '12px', marginTop: '2px', marginBottom: '8px' }}>{emailError}</div>
            )}
            <h5 style={{ marginTop: '10px', marginRight: '370px' }}>🔒Contraseña</h5>
            <input
              placeholder="    Ingresa tu contraseña"
              type="password"  //tipo de input (aprender los diversos tipos de input que hay)
              maxLength={maxLength2}
              style={{
                width: '450px',
                height: '45px',
                borderRadius: '17px',
                marginTop: '-25px',
                fontSize: '12px',
                borderColor: '#2fb166',
                border: '2px solid #7bc27eff',
                outline: 'none',
              }}
            />
            <h5 style={{ marginTop: '15px', fontWeight: 'normal' }}>
              ¿No tienes una  cuenta? <a style={{ color: '#2fb166', fontWeight: 'bold' }}>Registrate</a>
            </h5>
            <button
              onClick={TocarBoton}
              style={{
                width: '480px',
                backgroundColor: '#2fb166',
                color: 'white',
                borderRadius: '17px',
                fontSize: '15px',
                height: '45px',
                outline: 'none',
                cursor: 'pointer',
                transition: 'transform 0.6s, backgroundoColor pink  0.8s',
                transform: 'scale(0.95)',
              }}
            >
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
//aprenderme todos los tipos de input, num, pass, text, email y mas