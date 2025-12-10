// src/components/NavBar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <div className="logo">
            U<span>toolsx</span>
          </div>
        </Link>
        {/* 
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/tools/age-calculator">
            Age Calculator
          </NavLink>
        </nav> */}
      </div>
    </header>
  );
}
