import React, { useState, useEffect } from "react";
import { getCampaigns } from "../service/campaignService"; // Importing getCampaigns from campaignService

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]); // State to hold campaigns
  const [error, setError] = useState(""); // State for storing error messages

  useEffect(() => {
    // Fetch campaigns when the component mounts
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns(); // Call the getCampaigns function from campaignService
        setCampaigns(data); // Set the fetched campaigns data
      } catch (err) {
        setError("Failed to load campaigns."); // Handle error
      }
    };

    fetchCampaigns();
  }, []); // Empty dependency array ensures the API is called once when the component mounts

  return (
    <div>
      <h2>Campaigns</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign._id}>{campaign.name}</li> // Display campaign names
        ))}
      </ul>
    </div>
  );
};

export default CampaignPage;
