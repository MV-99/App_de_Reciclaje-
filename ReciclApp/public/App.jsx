import { useState } from 'react'
<<<<<<< HEAD:appReciclaje/src/App.jsx
import './App.css'
import Record from './pages/Home/Components/Record/Record'
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './app/components/layout.jsx'
import Record from './app/home/components/Records/Record.jsx'
import Cards from './app/home/components/Cards/cards.jsx'
import Login from './app/user/login/Login.jsx'
>>>>>>> 3e2d32b5402c6d425878453a8b6a9661fd6ac9e2:ReciclApp/public/App.jsx

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Navbar />
      <Login />
      <Cards />
      <Record />
    </>
  )
}

<<<<<<< HEAD:appReciclaje/src/App.jsx
export default App;
=======
export default App
>>>>>>> 3e2d32b5402c6d425878453a8b6a9661fd6ac9e2:ReciclApp/public/App.jsx
