// src/components/ContactInformation.jsx
import React from 'react';

const ContactInfo = () => (
  <div className="col-md-6 mb-4">
    <h2>Contact Information</h2>
    <ul className="list-unstyled">
      <li><i className="fas fa-map-marker-alt me-2"></i> 1420 Chicago Ave, Evanston, IL 60201 </li>
      <li><i className="fas fa-phone me-2"></i> (872) 281-1693 </li>
      <li><i className="fas fa-envelope me-2"></i> info@actforchange.org</li>
    </ul>
    <h3 className="mt-4">Office Hours</h3>
    <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
    <div className="mt-4">
      <img src="images/Contact/MAP.png" alt="Map" className="img-fluid rounded" />
    </div>
  </div>
);

export default ContactInfo;
