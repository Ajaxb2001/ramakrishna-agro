// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/"> {/* Wrap the logo in a Link to navigate to Productlist */}
          <img src={logo} alt="Ramakrishna Agro Logo" className="logo" />
        </Link>
        <h1 className="company-name">Ramakrishna Agro</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
