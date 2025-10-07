function modalRegistrarMaterial(){
    return(
        <>
            <dialog>
                <div>
                    <h2>Registrar Material</h2>
                    <p>Ingresa el tipo de material y peso para calcular tus puntos</p>
                    <select name="material" id="">
                        <option value="plastico">plastico</option>
                        <option value="papel">papel</option>
                        <option value="metal">metal</option>
                    </select>
                </div>
            </dialog>
        </>
    )
}