import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => (
  <nav className="flex flex-row justify-between items-center w-full px-5 py-2 fixed">
    <NavLink to="/">
      <img src={logo} alt="Los Angeles Mountains Logo" className="w-[40px]" />
    </NavLink>
    <ul className="flex flex-row gap-5 text-[12px] tracking-[1px] uppercase text-[#fefeff] font-black italic underline underline-offset-4">
      <NavLink to="/history">
        <li>01. History</li>
      </NavLink>
      <li>02. Team</li>
    </ul>
  </nav>
);

export default NavBar;
