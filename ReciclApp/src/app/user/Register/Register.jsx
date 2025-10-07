import React from 'react';
import { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from '../../components/inputs.jsx';
import '@styles/boton.css';
import Circulo from '../../components/logo.jsx';

export default function Register() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const maxLength = 16;


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
            alert("No se puede registrar, la pagina esta en construccion, gracias🪴")

        );
    }

    return (

        <div style={{
            marginTop: '60px', display: 'center',
            placeItems: 'center'
        }}>
            <div
                style={{
                    backgroundColor: '#ECF7F1',
                    width: '600px',
                    height: '670px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 10px #b8b3b3ff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Circulo size={75} color="#2fb166" />
                <h2 style={{ fontSize: '30px', marginTop: '10px' }}>¡Bienvenido a EcoPoints!</h2>
                <h4 style={{ marginTop: '-30px', fontWeight: 'normal' }}></h4>Ingresa tus datos y registrate con nosotros
                <div style={{ marginTop: '90px' }}>
                    <h5 style={{ marginTop: '-50px', marginRight: '10px' }}><MailOutlineIcon style={{ fontSize: '15px', color: 'green' }} />  Ingresa usuario u correo:</h5>
                    <Input
                        placeholder="   User123@example.com"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        maxLength={maxLength}
                        className="input"

                    />
                    {emailError && (
                        <div style={{ color: 'red', fontSize: '12px', marginTop: '2px', marginBottom: '8px', alignItems: 'center', marginLeft: '150px', fontWeight: 'bold' }}>{emailError}</div>
                    )}
                    <h5 style={{ marginTop: '10px', marginRight: '350px' }}><LockOutlinedIcon style={{ fontSize: '16px', color: 'green' }} /> Digita contraseña</h5>
                    <Input
                        placeholder="    Ingresa tu contraseña"
                        type="password"  //tipo de input (aprender los diversos tipos de input que hay)
                        maxLength={maxLength}
                        className="input"

                    />
                    <h5 style={{ marginTop: '10px', marginRight: '350px' }}><LockOutlinedIcon style={{ fontSize: '16px', color: 'green' }} /> Confirma contraseña</h5>
                    <Input
                        placeholder="    Confirma contraseña"
                        type="password"  //tipo de input (aprender los diversos tipos de input que hay)
                        maxLength={maxLength}
                        className="input"

                    />
                    <h5 style={{ marginTop: '15px', fontWeight: 'normal', marginLeft: '140px', fontSize: '14px' }}>
                        ¿Ya tienes una  cuenta? <a style={{ color: '#2fb166', fontWeight: 'bold' }}>Inicia sesion</a>
                    </h5>
                    <button
                        onClick={TocarBoton}
                        className="boton"
                    >
                        Registrate
                    </button>
                </div>
            </div>
        </div>
    );
}
