import "@styles/buttons.css";
import RecyclingIcon from '@mui/icons-material/Recycling';
import TollIcon from '@mui/icons-material/Toll';
import ModalRegistrarMaterial from "../modal_reg_material/reg_material";
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../../../styles/modal2.css';



function Buttons() {
    const [modalOpen, setModalOpen] = useState(false);

    function abrirModalRegistrarMaterial() {
        setModalOpen(true);
    }

    function cerrarModalRegistrarMaterial() {
        setModalOpen(false);
    }

    //modal
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="buttons">
            <button className="btn-registrar-material" onClick={abrirModalRegistrarMaterial}>
                <RecyclingIcon />
                Registrar Material
            </button>
            <button className="btn-canjear-puntos"
                onClick={openModal}>
                <TollIcon />
                Canjear Puntos
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="mi-modal"
            >
                <h3>Canjear Puntos por Dinero  </h3>
                <h5 style={{ fontWeight: 'normal' }}>Convierte tus puntos en tu dinero real.</h5>
                <div style={{ backgroundColor: '#ECF7F1', marginTop: '20px', height: '85px', borderRadius: '10px' }}>
                    <h5 style={{ fontWeight: 'normal' }}>🪙Puntos disponibles</h5>
                    <h1 style={{ marginLeft: '15px' }}>1250</h1>
                </div>
                <h4 style={{ fontWeight: 'revert' }}>Puntos a canjear</h4>
                <input
                    type="number"
                    placeholder="  100"
                    min={100}
                    className="input-mio"
                />
                <h5 style={{ fontWeight: 'normal', marginTop: '10px' }}>Minimo 100 puntos</h5>
                <button onClick={closeModal}
                    className="boton-mio"
                >Close</button>
            </Modal>
            <ModalRegistrarMaterial isOpen={modalOpen} onClose={cerrarModalRegistrarMaterial} />
        </div>
    );
}

export default Buttons;
