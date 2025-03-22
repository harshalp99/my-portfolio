// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/publications">Publications</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;