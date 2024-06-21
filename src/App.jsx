import React, { useState } from "react";
import RewardPointsForm from "./components/RewardPointsForm";
import "./App.css";

const App = () => {
  const [rewardPoints, setRewardPoints] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = ({ customerId, startDate, endDate }) => {
    fetch(
      `http://localhost:8080/api/V1/rewardpoints/${customerId}?startDate=${startDate}&endDate=${endDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRewardPoints(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
        setRewardPoints(null);
      });
  };

  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>
      <RewardPointsForm onSubmit={handleSubmit} />
      {rewardPoints && (
        <div>
          <h2>Reward Points Earned</h2>
          <p>Total Points: {rewardPoints}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
