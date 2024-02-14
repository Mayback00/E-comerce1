import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'
import TotalItems from '../CartContent/TotalItems'
import './Navbar.css'

const Navbar = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"} className="navbar-link">
          <h1 className="navbar-logo">Shop</h1>
        </Link>
        <Link to={"user"}>User</Link>
        <Link to="cart" className="navbar-link-cart">
          🛒{cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;
