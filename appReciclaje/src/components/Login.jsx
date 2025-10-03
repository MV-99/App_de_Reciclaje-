import React from 'react';
import { useState } from 'react'
//iconos 
import RecyclingIcon from '@mui/icons-material/Recycling';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



//componentes 
//function circulo 
function Circulo({ size = 75, color = 'green' }) {
    return (

        <div
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '-10px',
                marginTop: '40px'


            }}
        >
            <RecyclingIcon style={{ color: 'white', fontSize: size * 0.6 }} />
        </div>
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


export default function Login() {

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
            setEmailError("Porfavor escriba un email valido 😪");
        } else {
            setEmailError("");
        }
    };

    //funcion prueba de boton
    function TocarBoton() {

        return (
            alert("No se puede iniciar sesion, la pagina esta en construccion, gracias🦄🪴🦋")

        );
    }

    return (

        <div style={{
            marginTop: '155px', display: 'center',
            placeItems: 'center'
        }}>
            <div
                style={{
                    backgroundColor: 'white',
                    width: '600px',
                    height: '600px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 10px #b8b3b3ff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Circulo size={75} color="#2fb166" />
                <h2 style={{ fontSize: '30px', marginTop: '10px' }}>¡Bienvenido a EcoPoints!</h2>
                <h4 style={{ marginTop: '-20px', fontWeight: 'normal' }}>Ingresa tus credenciales</h4>
                <div style={{ marginTop: '90px' }}>
                    <h5 style={{ marginTop: '-50px', marginRight: '10px' }}><MailOutlineIcon style={{ fontSize: '15px', color: 'green' }} />  Usuario</h5>
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
                        <div style={{ color: 'red', fontSize: '12px', marginTop: '2px', marginBottom: '8px', alignItems: 'center', marginLeft: '150px', fontWeight: 'bold' }}>{emailError}</div>
                    )}
                    <h5 style={{ marginTop: '10px', marginRight: '350px' }}><LockOutlinedIcon style={{ fontSize: '16px', color: 'green' }} /> Contraseña</h5>
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
                    <h5 style={{ marginTop: '15px', fontWeight: 'normal', marginLeft: '140px', fontSize: '14px' }}>
                        ¿No tienes una  cuenta? <a style={{ color: '#2fb166', fontWeight: 'bold' }}>Registrate</a>
                    </h5>
                    <button
                        onClick={TocarBoton}
                        style={{
                            width: '465px',
                            backgroundColor: '#2fb166',
                            color: 'white',
                            borderRadius: '17px',
                            fontSize: '14px',
                            height: '45px',
                            outline: 'none',
                            border: 'none',//quita borde
                            cursor: 'pointer',
                        }}
                    >
                        Iniciar Sesion
                    </button>
                </div>
            </div>
        </div>
    );
}
