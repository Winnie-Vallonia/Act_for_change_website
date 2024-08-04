import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/home_page.css';

// Get the root element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the App component wrapped with Router
root.render(
  <Router>
    <App />
  </Router>
);
