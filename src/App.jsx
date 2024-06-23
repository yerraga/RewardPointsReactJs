import React, { useState } from "react";
import RewardPointsForm from "./components/RewardPointsForm";
import "./App.css";

const App = () => {
  const [formValues, setFormValues] = useState({
    customerId: "",
    startDate: "",
    endDate: "",
    firstName: "",
    lastName: "",
  });
  const [rewardPoints, setRewardPoints] = useState(null);
  const [error, setError] = useState(null);

  const handleCustomerIdChange = (customerId) => {
    fetch(`http://localhost:8080/api/V1/rewardpoints/customers/${customerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          customerId,
          firstName: data.firstName,
          lastName: data.lastName,
        }));
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setError("Error fetching customer data. Please try again.");
      });
  };

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
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching reward points data:", error);
        setError("Error fetching reward points data. Please try again.");
        setRewardPoints(null);
      });
  };

  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>
      <RewardPointsForm
        onSubmit={handleSubmit}
        onCustomerIdChange={handleCustomerIdChange}
        formValues={formValues}
      />
      {rewardPoints !== null && (
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
