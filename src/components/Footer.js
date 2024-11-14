import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ramakrishna Agro. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>Contact: info@ramakrishnaagro.com | +91 1234567890</p>
    </footer>
  );
};

export default Footer;
