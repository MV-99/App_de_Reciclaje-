import '@styles/cards.css'

function Cards() {
  const data = [
    { titulo: "Puntos totales:", valor: "0", desc: "Próxima recompensa:", extra: "1500 pts" },
    { titulo: "Valor en dinero:", valor: "$0.00", desc: "1 punto = $0.10" },
    { titulo: "Materiales reciclados:", valor: "0", desc: "Este mes." }
  ];

  return (
    <>

      <div className="cards-container">
        {data.map((item, index) => {
          const meta = 1500;
          let progreso = 0;
          let faltan = 0;

          if (index === 0) {
            const points = Number(item.valor) || 0;
            progreso = Math.min((points / meta) * 100, 100);
            faltan = meta - points > 0 ? meta - points : 0;
          }
          return (
            <div key={index} className="card">
              <h3>{item.titulo}</h3>
              <p className="valor">{item.valor}</p>
              <p className="desc">{item.desc} {item.extra && <span>{item.extra}</span>}
              </p>

              {index === 0 && (
                <section className="nivel-container">
                  <div className="barra-nivel">
                    <div 
                      className="progreso-nivel" 
                      style={{ width: '${progreso}%' }}>
                    </div>
                  </div>
                  <p className="faltante">Próxima recompensa: {faltan} pts</p>
                </section>
              )}
            </div>
          );
        })}
          
      </div>



    </>


  )
}

export default Cards;
