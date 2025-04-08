import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Overview = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header title="Payroll Overview" />
        <p>• Total Employees: 20</p>
        <p>• Total Monthly Payroll: R300,000</p>
        <p>• Pending Approvals: 2</p>
      </div>
    </div>
  );
};

export default Overview;
