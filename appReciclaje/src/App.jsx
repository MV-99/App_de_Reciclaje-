import { useState } from 'react'

import './App.css'



function App() {
  const data = [
    {titulo: "Puntos totales", valor: "750", desc: "Próxima recompensa:", extra: "1500 pts"},
    {titulo: "Valor en dinero", valor: "$75.00", desc: "1 punto = $0.10"},
    {titulo: "Materiales reciclados", valor: "4", desc: "Este mes"}
  ];

  return (
    <>
      
      <div className="cards-container">
        {data.map((item, index) =>(
          <div key={index} className="card">
            <h3>{item.titulo}</h3>
            <p className="valor">{item.valor}</p>
            <p className="desc">{item.desc} {item.extra && <span>{item.extra}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className= "espacio">
        
      </div>
     

    
    </>


  )
}

export default App;
