import React, { useState } from "react";
import "./RewardPointsForm.css";

const RewardPointsForm = ({ onSubmit, onCustomerIdChange, formValues }) => {
  const [localFormValues, setLocalFormValues] = useState({
    customerId: "",
    startDate: "",
    endDate: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "customerId") {
      onCustomerIdChange(value); // Call parent component function to fetch customer details
    }

    // Always update the local form values state for all fields
    setLocalFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormValues);
  };

  return (
    <div className="RewardPoint">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={localFormValues.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            readOnly
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            readOnly
          />
        </div>
        <br />
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={localFormValues.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={localFormValues.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button className="rewardpointbutton">Calculate Reward Points</button>
      </form>
    </div>
  );
};

export default RewardPointsForm;
