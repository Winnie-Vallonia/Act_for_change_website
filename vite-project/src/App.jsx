import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/homepage';
import AboutPage from './pages/about';
import GetInvolved from './pages/get_involved';
import ContactPage from './pages/contact';
import OpportunityPage from './pages/opportunity';
import './css/home_page.css';
import './css/get_involved.css';
import './css/opp.css';
import './css/contact.css';
import './css/about_us.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get_involved" element={<GetInvolved />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
