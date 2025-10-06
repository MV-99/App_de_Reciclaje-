import { useState } from 'react'
import Navbar from './app/components/navbar.jsx'
import Record from './app/home/components/Records/Record.jsx'
import Cards from './app/home/components/Cards/cards.jsx'
import Login from './app/user/login/Login.jsx'
import Buttons from './app/home/components/buttons/buttons.jsx' 

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <section  id="main-content">
        <Cards/>
        <Buttons/>
        <Record/>
      </section>
    </>
  )
}

export default App