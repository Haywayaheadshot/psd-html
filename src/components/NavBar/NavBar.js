import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => (
  <nav className="nav-container">
    <img src={logo} alt="Los Angeles Mountains Logo" className="page-logo" />
    <ul>
      <li>01. History</li>
      <li>03. Team</li>
    </ul>
  </nav>
);

export default NavBar;
