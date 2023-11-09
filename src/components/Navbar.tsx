import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo kasa" />

      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </header>
  )
}
export default Navbar
