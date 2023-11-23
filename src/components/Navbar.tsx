import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo kasa" className="navbar__logo" />

        <ul>
          <li className="nav__links">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav__links">
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
