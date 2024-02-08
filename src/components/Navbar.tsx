import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo kasa" />
      <ul>
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </header>
  )
}
export default Navbar
