import React from 'react';

const HeroSection = () => (
  <div className="container-fluid px-0">
    <div className="row">
      <div className="col-12 px-0">
        <div className="hero position-relative">
          <img src="images/Home Page/beach cleanup-min.jpeg" alt="Hero image of volunteers" className="img-fluid hero-image"/>
          <div className="overlay"></div>
          <div className="hero-content text-center">
            <h1 className="hero-text">Join Us Today</h1>
            <a href="/get-involved"><button className="btn btn-primary get-involved-btn">Get Involved</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
