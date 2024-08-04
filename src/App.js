import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/homepage'; // Ensure the paths and file names are correct
import AboutPage from './pages/about';   // Ensure the paths and file names are correct
import ContactPage from './pages/contact'; // Ensure the paths and file names are correct
import Opportunity from './pages/opportunity'; // Ensure the paths and file names are correct
import GetInvolved from './pages/get_involved'; // Ensure the paths and file names are correct
import './css/home_page.css'; 
import './css/about_us.css';
import './css/contact.css';
import './css/get_involved.css';
import './css/opp.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/opportunity" element={<Opportunity />} />
      </Routes>
    </Router>
  );
}

export default App
