// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Ramakrishna Agro Logo" className="logo" />
        </Link>
        <h1 className="company-name">Ramakrishna Agro</h1>
      </div>
      <nav className={`nav ${isSidebarOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;