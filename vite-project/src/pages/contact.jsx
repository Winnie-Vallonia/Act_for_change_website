// src/pages/ContactPage.jsx
import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import "../css/contact.css";

const ContactPage = () => (
  <>

    <section className="contact-section py-5">
      <div className="container">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>

    
  </>
);

export default ContactPage;
