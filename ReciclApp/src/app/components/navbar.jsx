
import React, { useState } from "react";
import "@styles/navbar.css";
import Modal from 'react-modal';
import '@styles/modal2.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function handleClick() {

    return (
        Swal.fire({
            title: '¡oh no!',
            text: 'Lo sentimos, aun no esta disponible esta función, se paciente😪',
            icon: 'error',
            background: '#ECF7F1',
            color: '#2FB166',
            confirmButtonColor: '#2FB166',
            confirmButtonText: 'Okey',
            iconColor: '#2FB166',
            customClass: {
                confirmButton: 'alert'
            }

        })
    );
}

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
   const navigate = useNavigate();
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <nav>
      <div className="logo">
        <div>
          <img src="public/logo.png" alt="logo" />
          <p>EcoPoints</p>
        </div>
        <span>Recicla, gana puntos y ayuda al ambiente</span>
      </div>
      <div className="profile">
        <img src='profile.png' alt="profile" onClick={openModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modalSalir"
      >
        <h3 style={{  marginLeft:'40px'}}>⚙️Configuracion</h3>
         <button className="verPerfil" onClick={handleClick}>Ver perfil</button>
        <button className="salir"onClick={()=>navigate ('/')}>Cerrar Sesión</button>
        <button onClick={closeModal} className="cerrar">Cerrar</button>
      </Modal>
    </nav>
  );
}
