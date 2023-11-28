import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="navbar__logo" />
      </Link>

      <nav>
        <ul>
          <li className="nav__links">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav__links">
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
