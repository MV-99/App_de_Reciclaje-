import './cards.css'



function Cards() {
  const data = [
    { titulo: "Puntos totales:", valor: "0", desc: "Próxima recompensa:", extra: "1500 pts" },
    { titulo: "Valor en dinero:", valor: "$0.00", desc: "1 punto = $0.10" },
    { titulo: "Materiales reciclados:", valor: "0", desc: "Este mes." }
  ];

  return (
    <>

      <div className="cards-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.titulo}</h3>
            <p className="valor">{item.valor}</p>
            <p className="desc">{item.desc} {item.extra && <span>{item.extra}</span>}
            </p>
            <section id="nivel-container">
              <div id="barra-nivel">
                <div id="progreso-nivel"></div>
              </div>
            </section>
          </div>

        ))}
      </div>
      
      <button type="submit">Registrar reciclaje</button>
      <div className="espacio">

      </div>



    </>


  )
}

export default Cards;
