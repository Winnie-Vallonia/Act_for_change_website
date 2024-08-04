import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mx-auto" to="/">
          <p>☯︎ Act for Change</p>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-involved">Get Involved</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="font-size-adjuster">
            <button id="increase-font" className="btn adj-btn-custom">A+</button>
            <button id="decrease-font" className="btn adj-btn-custom">A-</button>
          </div>
        </div>
        <span className="navbar-text">
          <form className="form-inline d-flex my-2 my-lg-0 searchForm">
            <input className="form-control mr-sm-2 me-2 searchInput" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </span>
      </div>
    </nav>
  );
  
  export default Header;