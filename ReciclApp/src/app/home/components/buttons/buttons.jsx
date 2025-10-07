<<<<<<< HEAD
import "@styles/buttons.css";
=======
import React, { useState } from "react";
import "../../../../styles/buttons.css";
>>>>>>> fea26770c20da85c3a7194f2c905d81232a0e9b0
import RecyclingIcon from '@mui/icons-material/Recycling';
import TollIcon from '@mui/icons-material/Toll';
import ModalRegistrarMaterial from "../modal_reg_material/reg_material";

function Buttons() {
    const [modalOpen, setModalOpen] = useState(false);

    function abrirModalRegistrarMaterial() {
        setModalOpen(true);
    }

    function cerrarModalRegistrarMaterial() {
        setModalOpen(false);
    }

    return (
        <div className="buttons">
            <button className="btn-registrar-material" onClick={abrirModalRegistrarMaterial}>
                <RecyclingIcon />
                Registrar Material
            </button>
            <button className="btn-canjear-puntos">
                <TollIcon />
                Canjear Puntos
            </button>

            <ModalRegistrarMaterial isOpen={modalOpen} onClose={cerrarModalRegistrarMaterial} />
        </div>
    );
}

export default Buttons;
