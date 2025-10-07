function ModalRegistrarMaterial({ isOpen, onClose }) {
    return (
        <dialog open={isOpen}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                backgroundColor: 'white',
                width: '50vw',
            }}>
            <div>
                <h2>Registrar Material Reciclado</h2>
                <p>Ingresa el tipo de material y peso para calcular tus puntos</p>
                <p>Tipo de Material</p>
                <select name="material" id="">
                    <option value="plastico">plastico</option>
                    <option value="papel">papel</option>
                    <option value="metal">metal</option>
                </select>
                <p>Peso(Kg)</p>
                <input type="text" placeholder="peso" />
                <button>Canjear ahora</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </dialog>
    );
}

export default ModalRegistrarMaterial;
