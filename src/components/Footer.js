// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="container text-center">
      <h3 className="connect-heading mb-3">Connect with Us</h3>
      <p>1420 Chicago Ave, Evanston, IL</p>
      <button className="btn btn-outline-light btn-lg mb-3">Donate</button>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" className="me-2" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.whatsapp.com" target="_blank" className="me-2" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="me-2" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" className="me-2" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="mailto:winnienna2027@u.northwestern.edu" className="me-2" aria-label="Gmail">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
