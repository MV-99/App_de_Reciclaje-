import { useState } from 'react'
import Navbar from '@components/navbar.jsx'
import Record from '@home/components/Records/Record.jsx'
import Cards from '@home/components/Cards/cards.jsx'
import Login from '@user/login/Login.jsx'
import Buttons from '@home/components/buttons/buttons.jsx' 
import Register from '@user/Register/Register.jsx';

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

      <Login />
      <Register/>
    </>
  )
}

export default App