import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="main-error">
      <h3>404</h3>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
