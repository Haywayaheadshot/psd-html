import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => (
  <nav className="flex flex-row justify-between items-center w-full px-5 py-2 fixed top-0 desktop:px-[200px]">
    <NavLink to="/">
      <img src={logo} alt="Los Angeles Mountains Logo" className="w-[40px]" />
    </NavLink>
    <ul className="font-lato flex flex-row gap-5 text-[12px] tracking-[1px] uppercase text-[#fefeff] font-black italic underline underline-offset-4">
      <li>
        <NavLink to="/history">
          01. History
        </NavLink>
      </li>
      <li>
        <NavLink to="/teams">
          02. Team
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
