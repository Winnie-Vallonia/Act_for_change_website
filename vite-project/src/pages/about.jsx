// src/pages/AboutUs.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';

const AboutUs = () => (
  <>

    {/* About Us Introduction Section */}
    <section className="about-us-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SideMenu />
          </div>
          <div className="col-md-9">
            <div className="about-us-content">
              <h1 className="mb-4">About Us</h1>
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="about-us-text">
                    <p>Welcome to Act for Change, where our mission is to empower communities through sustainable initiatives and volunteerism. We believe in the power of collective action to drive positive social change.</p>
                    <p>At Act for Change, we are committed to creating a better future for generations to come. Through innovative projects and partnerships, we aim to address pressing social and environmental challenges in our communities.</p>
                    <p>Join us in making a difference. Together, we can build a more equitable and sustainable world, one act of kindness at a time.</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="about-us-image">
                    <img src="images/About Us/Mission: Vision/About Us-min.jpg" alt="Image of the team" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section id="mission-section" className="mission-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mission-image">
              <img src="images/About Us/Mission: Vision/Our mission-min.jpg" alt="Community project in action" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>Act for Change is dedicated to fostering positive change through community engagement and volunteerism. We strive to create a platform where individuals can connect with meaningful opportunities to make a tangible impact. Our mission is to empower people to take action, build stronger communities, and address social and environmental issues through collaborative efforts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section id="vision-section" className="vision-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>We envision a world where every individual recognizes their power to effect change. Our vision is to create a global network of engaged citizens who actively participate in shaping a more sustainable, equitable, and compassionate society. By fostering a culture of volunteerism and social responsibility, we aim to inspire lasting positive change in communities worldwide.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="vision-image">
              <img src="images/About Us/Mission: Vision/Our vision-min.jpg" alt="Diverse group of volunteers" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Impact Statistics Section */}
    <section id="impact-statistics-section" className="impact-statistics-section">
      <div className="container">
        <h2 className="text-center mb-5">Our Impact</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h3>10,000+</h3>
              <p>Volunteers Engaged</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-hands-helping fa-3x mb-3"></i>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-globe-americas fa-3x mb-3"></i>
              <h3>50+</h3>
              <p>Communities Served</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-tree fa-3x mb-3"></i>
              <h3>100,000+</h3>
              <p>Trees Planted</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-school fa-3x mb-3"></i>
              <h3>200+</h3>
              <p>Schools Supported</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-stat text-center">
              <i className="fas fa-heart fa-3x mb-3"></i>
              <h3>50,000+</h3>
              <p>Meals Distributed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Members Section */}
    <section id="team-members" className="team-members-section">
      <div className="container">
        <h2>Team Members</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="team-member text-center">
              <img src="images/About Us/Team members/Winnie Nna.jpg" alt="Winnie Nna" className="img-fluid mb-3" />
              <p>Winnie Nna<br />Founder</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member text-center">
              <img src="images/About Us/Team members/Terry Nanje.jpg" alt="Terry Nanje" className="img-fluid mb-3" />
              <p>Terry Nanje<br />Project Manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-member text-center">
              <img src="images/About Us/Team members/Nanwou Esther.jpg" alt="Nanwou Esther" className="img-fluid mb-3" />
              <p>Nanwou Esther<br />Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
);

export default AboutUs;
