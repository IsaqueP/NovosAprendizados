import { NavLink } from "react-router-dom";

import './Navbar.css'

export function Navbar(){


  return(
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </nav>
  )
}