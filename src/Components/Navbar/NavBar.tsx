import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";

const NavBar: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={handleClick}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <HamburgetMenuOpen /> : <HamburgetMenuClose />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
