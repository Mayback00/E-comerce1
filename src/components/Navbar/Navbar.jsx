import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'
import TotalItems from '../CartContent/TotalItems'
import './Navbar.css'
import { SiCoffeescript } from "react-icons/si";
import { MdLogin } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(dataContext);

  return (
      <nav className="navbar">
        <Link to={"/"} className="navbar-link">
          <h1 className="navbar-logo"><SiCoffeescript /></h1>
        </Link>
        <div className="navbar-right">
        <Link to={"products"} className="items">Products</Link>
        <Link to={"login"} className="items">Login<MdLogin className="login-icon" /></Link>
        <Link to={"cart"} className="navbar-link-cart items">
        <FaCartPlus />{cart.length > 0 ? <TotalItems /> : null}
        </Link>
        </div>
      </nav>
  )
}

export default Navbar;

