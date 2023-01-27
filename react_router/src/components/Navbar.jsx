import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navbar.css'

export function Navbar(){

  return(
    <nav>
      {/* 
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

    </nav>
  )
}