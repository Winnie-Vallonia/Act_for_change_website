// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => (
  <div className="col-md-6 mb-4">
    <h2>Get in Touch</h2>
    <form id="contact-form">
      <div className="mb-3">
        <label htmlFor="contact-name" className="form-label">Name</label>
        <input type="text" className="form-control" id="contact-name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="contact-email" className="form-label">Email</label>
        <input type="email" className="form-control" id="contact-email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="contact-message" className="form-label">Message</label>
        <textarea className="form-control" id="contact-message" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </div>
);

export default ContactForm;
