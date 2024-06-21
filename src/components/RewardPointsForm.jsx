import React, { useState } from "react";
import "./RewardPointsForm.css";

const RewardPointsForm = ({ onSubmit }) => {
  const [customerId, setCustomerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerId, startDate, endDate });
  };

  return (
    <div className="RewardPoint">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId"> Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
