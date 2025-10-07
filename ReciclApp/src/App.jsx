import { useState } from 'react'
import Navbar from '@components/navbar.jsx'
import Record from '@home/components/Records/Record.jsx'
import Cards from '@home/components/Cards/cards.jsx'
import Login from '@user/login/Login.jsx'
import Buttons from '@home/components/buttons/buttons.jsx' 

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <section  id="main-content">
        <Cards/>
        <Record/>
      </section>

      <Login />
    </>
  )
}

export default App