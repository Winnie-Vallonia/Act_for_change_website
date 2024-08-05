import React from 'react';

const OurStory = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-lg-5 offset-lg-1">
        <div className="story-content">
          <h2 className="section-heading mb-4">Our Story</h2>
          <p>Act for Change is an initiative dedicated to empowering communities through volunteerism and social action. Our mission is to create a platform where individuals can connect with meaningful opportunities to make a positive impact. Join us in making a difference, one step at a time.</p>
          <a href="/about-us" className="btn btn-outline-primary mt-3">Learn More</a>
        </div>
      </div>
      <div className="col-lg-5 d-flex align-items-center">
        <img src="images/Home Page/Our story-min.jpg" alt="Image of a hand picking a bottle" className="custom-img-fluid"/>
      </div>
    </div>
  </div>
);

export default OurStory;
