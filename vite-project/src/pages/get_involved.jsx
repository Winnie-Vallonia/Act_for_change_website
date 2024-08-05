import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import OpportunityList from '../components/OpportunityList';
import '../css/get_involved.css';

const GetInvolved = () => (
  <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <OpportunityList />
        </div>
      </div>
    </div>
  </>
);

export default GetInvolved;
