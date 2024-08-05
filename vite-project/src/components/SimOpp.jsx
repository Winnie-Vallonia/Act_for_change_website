// src/components/SimilarOpportunities.jsx
import React from 'react';

const SimilarOpportunities = ({ opportunities }) => (
  <div className="container opportunities">
    <h2>Similar Opportunities</h2>
    <div className="row">
      {opportunities.map((opp, index) => (
        <div className="col-md-4" key={index}>
          <div className="opportunity">
            <a href={opp.link}>
              <img src={opp.imageSrc} alt={opp.title} className="img-fluid" />
              <div className="opportunity-title">{opp.title}</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SimilarOpportunities;
