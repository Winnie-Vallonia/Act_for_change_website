import React from 'react';

const opportunities = [
  {
    imgSrc: '/images/Get involved/Beach cleanup 2-min.jpg',
    title: 'Beach Cleanup',
    location: 'Miami, FL',
    dateTime: 'July 20, 2024, 9:00 AM',
    deadline: 'July 15, 2024',
    link: 'individual_opportunity.html'
  },
  {
    imgSrc: '/images/Get involved/Tutoring kids-min.jpg',
    title: 'Tutoring Kids',
    location: 'New York, NY',
    dateTime: 'July 22, 2024, 3:00 PM',
    deadline: 'July 18, 2024',
    link: 'individual_opportunity.html'
  },
  {
    imgSrc: '/images/Get involved/Health fair-min.jpg',
    title: 'Health Fair Assistance',
    location: 'Los Angeles, CA',
    dateTime: 'July 25, 2024, 10:00 AM',
    deadline: 'July 20, 2024',
    link: 'individual_opportunity.html'
  },
  {
    imgSrc: '/images/Get involved/community gardening-min.jpg',
    title: 'Community Gardening',
    location: 'Chicago, IL',
    dateTime: 'July 28, 2024, 8:00 AM',
    deadline: 'July 23, 2024',
    link: 'individual_opportunity.html'
  },
  {
    imgSrc: '/images/Get involved/Dog in animal shelter-min.jpg',
    title: 'Animal Shelter Help',
    location: 'Austin, TX',
    dateTime: 'July 30, 2024, 1:00 PM',
    deadline: 'July 25, 2024',
    link: 'individual_opportunity.html'
  }
];

const OpportunityList = () => (
  <div className="main-content">
    {opportunities.map((opp, index) => (
      <div className="opportunity mb-4" key={index}>
        <img src={opp.imgSrc} alt={opp.title} />
        <div className="opportunity-info">
          <h3><a href={opp.link}>{opp.title}</a></h3>
          <p><strong>Location:</strong> {opp.location}</p>
          <p><strong>Date and Time:</strong> {opp.dateTime}</p>
          <p><strong>Deadline:</strong> {opp.deadline}</p>
        </div>
      </div>
    ))}
  </div>
);

export default OpportunityList;
