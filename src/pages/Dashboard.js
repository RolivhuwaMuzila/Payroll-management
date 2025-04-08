import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  // Sample data for the cards (can be dynamic if needed)
  const dashboardData = {
    totalEmployees: 120,
    departmentCount: 5,
    monthlyPay: 250000,
    payslipsIssued: 100,
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header title="Payroll Dashboard" />
        <p>Welcome to the Payroll Processing System.</p>
        
        {/* Dashboard Cards Container */}
        <div style={styles.dashboardCards}>
          {/* Left Column (Total Employees and Departments) */}
          <div style={styles.leftColumn}>
            <div style={styles.card}>
              <h3 style={styles.heading}>Total Employees</h3>
              <p>{dashboardData.totalEmployees}</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.heading}>Departments</h3>
              <p>{dashboardData.departmentCount}</p>
            </div>
          </div>

          {/* Right Column (Monthly Pay and Payslips Issued) */}
          <div style={styles.rightColumn}>
            <div style={styles.card}>
              <h3 style={styles.heading}>Monthly Pay</h3>
              <p>R{dashboardData.monthlyPay}</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.heading}>Payslips Issued</h3>
              <p>{dashboardData.payslipsIssued}</p>
            </div>
          </div>

          {/* Centered Card (Overview) */}
          <div style={styles.centeredCard}>
            <div style={styles.card}>
              <h3 style={styles.heading}>Overview</h3>
              <p>View overall system performance and details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardCards: {
    display: 'flex',
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'center', // Center the content horizontally
    gap: '30px',
    marginTop: '20px',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '30%', // 30% width for left column
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '30%', // 30% width for right column
  },
  centeredCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px', // Space between top section and this card
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    minHeight: '170px',
  },
  heading: {
    color: 'crimson', // Apply crimson color to h3 headings
  },
};

export default Dashboard;
