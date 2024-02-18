import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'
import TotalItems from '../CartContent/TotalItems'
import './Navbar.css'
import { SiCoffeescript } from "react-icons/si";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  const { cart } = useContext(dataContext);

  return (
      <nav className="navbar">
        <Link to={"/"} className="navbar-link">
          <h1 className="navbar-logo"><SiCoffeescript /></h1>
        </Link>
        <div className="navbar-right">
        <Link to={"user"} className="items">User</Link>
        <Link to={"login"} className="items">Login<MdLogin className="login-icon" /></Link>
        <Link to={"cart"} className="navbar-link-cart items">
          🛒{cart.length > 0 ? <TotalItems /> : null}
        </Link>
        </div>
      </nav>
  )
}

export default Navbar;

