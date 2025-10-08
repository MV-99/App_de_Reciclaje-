import { useState } from 'react'
import Navbar from '@components/navbar.jsx'
import Record from '@home/components/Records/Record.jsx'
import Cards from '@home/components/Cards/cards.jsx'
import Login from '@user/login/Login.jsx'
import Buttons from '@home/components/buttons/buttons.jsx'
import Register from '@user/Register/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// ...existing imports...

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  
        path="/dashboard"
          element={
            <>
              <Cards />
              <Buttons />
              <Record />
            </>
          } />
      </Routes>
    </>
  );
}

export default App;
