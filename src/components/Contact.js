// Contact.js
import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-card">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.748723440513!2d74.2122391!3d16.8860475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7c089b520e9%3A0x907aed89f157d1e1!2sRamakrishna%20Agro&#39;s!5e1!3m2!1sen!2sin!4v1731527009369!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
            title="Location Map"
          ></iframe>
        </div>
        <div className="info-section">
          <h3 className="info-heading">Ramakrishna Agro's</h3>
          <p className="address">Amrutnagar, Chikorde Road, (Ambiltek) Kodoli, Tal: Panhala, Maharashtra 416114</p>
          <p className="contact-details">📞 Phone: +91 123 456 7890</p>
          <p className="contact-details">✉️ Email: contact@ramakrishnaagro.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
