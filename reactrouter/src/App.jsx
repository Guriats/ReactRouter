
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className='App'>
      <header className='header'>
        <h1>React Router v6</h1>
      </header>
      <div>
        <nav className='Navegador'>
          <NavLink to="">Home</NavLink>
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App
