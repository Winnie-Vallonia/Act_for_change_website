// src/pages/OpportunityPage.jsx
import React from 'react';
import Header from '../components/Header';
import OpportunityTitle from '../components/OppTitle';
import OpportunityDetails from '../components/Oppdets';
import SimilarOpportunities from '../components/SimOpp';
import Footer from '../components/Footer';
import '../css/opp.css'; 

const opportunityDetails = {
  imageSrc: 'images/Get involved/Beach cleanup 2-min.jpg',
  description: `Join us for a beach cleanup event and help keep our coastlines clean and beautiful! Volunteers will work together to collect trash and debris from the shoreline, ensuring a safer environment for marine life and beachgoers. All necessary supplies will be provided. This is a great opportunity to make a positive impact on the environment, meet new people, and enjoy a day at the beach. Whether you're an individual or part of a group, everyone is welcome to participate. Let's work together to protect our oceans and preserve the natural beauty of our beaches.`,
  details: [
    { label: 'Date', value: 'July 20, 2024' },
    { label: 'Time', value: '9:00 AM - 12:00 PM' },
    { label: 'Location', value: 'Miami, FL' },
    { label: 'Organization', value: <a href="https://example.org" target="_blank" rel="noopener noreferrer">Ocean Conservancy</a> }
  ]
};

const similarOpportunities = [
  { link: 'individual_opportunity.html', imageSrc: 'images/Opportunities/oppportunity 1.jpg', title: 'Opportunity 1' },
  { link: 'individual_opportunity.html', imageSrc: 'images/Opportunities/opportunity 2.jpg', title: 'Opportunity 2' },
  { link: 'individual_opportunity.html', imageSrc: 'images/Opportunities/opportunity 3.jpg', title: 'Opportunity 3' }
];

const OpportunityPage = () => (
  <>
    <Header />
    <OpportunityTitle title="Beach Cleanup" />
    <OpportunityDetails 
      imageSrc={opportunityDetails.imageSrc}
      description={opportunityDetails.description}
      details={opportunityDetails.details}
    />
    <SimilarOpportunities opportunities={similarOpportunities} />
    <Footer />
  </>
);

export default OpportunityPage;
