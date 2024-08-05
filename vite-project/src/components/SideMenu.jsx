import React from 'react';

const SideMenu = () => (
  <div className="list-group sticky-top" style={{ top: '20px' }}>
    <a href="#mission-section" className="list-group-item list-group-item-action">Mission</a>
    <a href="#vision-section" className="list-group-item list-group-item-action">Vision</a>
    <a href="#impact-statistics-section" className="list-group-item list-group-item-action">Our Impact</a>
    <a href="#team-members" className="list-group-item list-group-item-action">Team Members</a>
  </div>
);

export default SideMenu;