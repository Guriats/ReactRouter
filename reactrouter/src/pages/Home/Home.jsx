import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <h2>Home Page</h2>
      <p>App ejemplo sobre React Router</p>

      <ul>
        <li>
          <p>
            <span>Visita la página de héroes:</span>
            <Link to="heroes">Heroes</Link>
          </p>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Home
