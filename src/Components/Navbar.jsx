import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active" : "regular";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/api-data"
        className={({ isActive }) => {
          return isActive ? "active" : "regular";
        }}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
