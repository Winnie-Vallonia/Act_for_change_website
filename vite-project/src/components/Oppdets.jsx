// src/components/OpportunityDetails.jsx
import React from 'react';

const OpportunityDetails = ({ imageSrc, description, details }) => (
  <section className="opportunity-details">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="opportunity-image">
            <img src={imageSrc} alt="Opportunity" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="opportunity-info">
            <div className="opportunity-description">
              <h2>Description</h2>
              <p>{description}</p>
            </div>
            <div className="opportunity-details-list">
              <h2>Details</h2>
              <ul>
                {details.map((detail, index) => (
                  <li key={index}><strong>{detail.label}:</strong> {detail.value}</li>
                ))}
              </ul>
              <div className="apply-button">
                <button className="btn btn-custom">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OpportunityDetails;
