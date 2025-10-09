import '@styles/modal2.css';

function ModalRegistrarMaterial({ isOpen, onClose }) {
    return (
        <dialog open={isOpen}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                borderColor: '#2FB166',
                borderRadius: '10px',
                boxShadow: '4 4px 10px rgba(11, 10, 10, 0.3)',
                backgroundColor: 'white',
                width: '30vw',
                height: '21vw'
            }}>
            <div>
                <h2>Registrar Material Reciclado</h2>
                <p>Ingresa el tipo de material y peso para calcular tus puntos</p>
                <p style={{ marginTop: '6px', fontWeight: 'bold' }}>Tipo de Material</p>
                <select name="material" id="" className="drop_menu">
                    <option value="plastico">Plastico</option>
                    <option value="papel">Papel</option>
                    <option value="metal">Metal</option>
                </select>
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Peso(Kg)</p>
                <input type="number" placeholder="  0.0 kg" min="0" className="inputmas" />
                <button className="boton2">Registrar Material</button>
                <button className="boton3" onClick={onClose}>Cerrar</button>
            </div>
        </dialog>
    );
}

export default ModalRegistrarMaterial;
