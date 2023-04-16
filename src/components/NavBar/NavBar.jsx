import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgRelojes = "https://img.freepik.com/vector-premium/icono-logotipo-reloj-pared_414847-367.jpg?w=2000";
  return (
    <header>
      <Link to={"/"}>
        <img className="imgRelojes" src={imgRelojes} alt="Logo Relojes" />
      </Link>
      <ul className="links">
        <li>
          <NavLink to={`/categoria/2`}>Productos en stock</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Nuevos lanzamientos</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar;
