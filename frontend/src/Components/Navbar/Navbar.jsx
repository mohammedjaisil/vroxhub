// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Images/vxlogo.png'; // Your logo
import { useNavigate ,NavLink  } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const token = localStorage.getItem("token");

    const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // redirect to login page
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
    {/* <button className="get-in-touch-btn" onClick={() => alert("Redirect to contact or open modal")}>
  Get in Touch
</button> */}
{token ? (
  <div className="dropdown" style={{ position: 'relative' }}>
  <button
    className="profile-btn"
    type="button"
    id="profileDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    onClick={(e) => e.preventDefault()} // to prevent default dropdown toggle since we're handling manually
  >
    <i className="bi bi-person-fill fs-4"></i>
  </button>
  
  <ul className="dropdown-menu dropdown-menu-end profile-dropdown" aria-labelledby="profileDropdown">
    <li>
      <NavLink className="dropdown-item d-flex align-items-center" to="/profile">
        <i className="bi bi-person-circle me-2"></i> Profile
      </NavLink>
    </li>
    <li><hr className="dropdown-divider" /></li>
    <li>
      <button className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
        <i className="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </li>
  </ul>
</div>

) : (
  <button className="get-in-touch-btn">
    <NavLink to="/login">Login</NavLink>
  </button>
)}

  </div>
        

</nav>

  );
};
