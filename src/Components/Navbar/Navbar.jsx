// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Images/vxlogo.png'; // Your logo
import { NavLink  } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on link click (optional)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">VROXHUB</span>
      </div>


  <div
    className="navbar-toggle"
    onClick={toggleMenu}
    aria-label="Toggle menu"
    role="button"
    tabIndex={0}
    onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}
  >
    ☰
  </div>

  <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
    <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
    <NavLink to="/service" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
    {/* <NavLink to="/industries" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Industries</NavLink>
    <NavLink to="/portfolio" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
    <NavLink to="/costomers" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Costomers</NavLink>
    <NavLink to="/company" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Company</NavLink> */}
    <button className="get-in-touch-btn" onClick={() => alert("Redirect to contact or open modal")}>
  Get in Touch
</button>
  </div>

</nav>

  );
};
