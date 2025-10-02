import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <div style={{
          backgroundColor:'white',
          width:'650px',
          height:'650px',
          borderRadius:'15px',
          boxShadow:'0 5px 10px #b8b3b3ff', //sombra del cuadro
        }}>

          Bienvenido a ecopoints
        </div>

    </div>
  )
}

export default App
