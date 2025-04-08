import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const SalaryForm = () => {
  const navigate = useNavigate(); // Used to navigate to payslip
  const [form, setForm] = useState({
    name: '',
    surname: '',
    employeeId: '',
    address: '',
    contact: '',
    hours: '',
    overtime: '',
    bonus: '',
    providentFund: '',
    professionalTax: '',
    loan: '',
    allowance: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to the Payslip component using navigate
    navigate('/payslip', { state: form });
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header title="Salary Calculation" />
        <form onSubmit={handleSubmit} className="salary-form">
          <div className="form-group">
            <label>Employee Name:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter employee name"
            />
          </div>
          <div className="form-group">
            <label>Surname:</label>
            <input
              name="surname"
              type="text"
              value={form.surname}
              onChange={handleChange}
              placeholder="Enter surname"
            />
          </div>
          <div className="form-group">
            <label>Employee ID:</label>
            <input
              name="employeeId"
              type="text"
              value={form.employeeId}
              onChange={handleChange}
              placeholder="Enter employee ID"
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              name="contact"
              type="text"
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
          </div>
          <div className="form-group">
            <label>Hours Worked:</label>
            <input
              name="hours"
              type="text"
              value={form.hours}
              onChange={handleChange}
              placeholder="Enter hours worked"
            />
          </div>
          <div className="form-group">
            <label>Overtime Hours:</label>
            <input
              name="overtime"
              type="text"
              value={form.overtime}
              onChange={handleChange}
              placeholder="Enter overtime hours"
            />
          </div>
          <div className="form-group">
            <label>Bonus:</label>
            <input
              name="bonus"
              type="text"
              value={form.bonus}
              onChange={handleChange}
              placeholder="Enter bonus amount"
            />
          </div>
          <div className="form-group">
            <label>Provident Fund:</label>
            <input
              name="providentFund"
              type="text"
              value={form.providentFund}
              onChange={handleChange}
              placeholder="Enter provident fund amount"
            />
          </div>
          <div className="form-group">
            <label>Professional Tax:</label>
            <input
              name="professionalTax"
              type="text"
              value={form.professionalTax}
              onChange={handleChange}
              placeholder="Enter professional tax amount"
            />
          </div>
          <div className="form-group">
            <label>Loan:</label>
            <input
              name="loan"
              type="text"
              value={form.loan}
              onChange={handleChange}
              placeholder="Enter loan amount"
            />
          </div>
          <div className="form-group">
            <label>Allowance:</label>
            <input
              name="allowance"
              type="text"
              value={form.allowance}
              onChange={handleChange}
              placeholder="Enter allowance amount"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalaryForm;
