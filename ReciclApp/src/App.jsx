import { useState } from 'react'
import Navbar from './app/components/navbar.jsx'
import Record from './app/home/components/Records/Record.jsx'
import Cards from './app/home/components/Cards/cards.jsx'
import Login from './app/user/login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>
      
      
      <body>
        <Cards />
        <Record />
      </body>
      
    </>
  )
}

export default App