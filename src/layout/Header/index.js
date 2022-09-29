import React from "react";
import { NavLink } from "react-router-dom";

import './style.css'

function Header() {
  const activeClass = (({ isActive }) => isActive ? 'current' : 'notCurrent')

  return (
    <nav className="px-3 d-flex align-items-center justify-content-between">
      <h1>Music App</h1>
      <div className="mx-5 px-5 d-flex align-items-center">
        <NavLink className={activeClass} to="/" end><button>Home</button></NavLink>
        <NavLink id="navLink_artists" className={activeClass} to="/artists" end><button>Artists</button></NavLink>
      </div>
    </nav>
  );
}

export default Header;
