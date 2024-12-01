// src/pages/CampaignPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../utils/api'; // Import the API utility

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        const response = await api.get('/api/campaign', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCampaigns(response.data); // Set campaigns data
      } catch (err) {
        setError('Failed to fetch campaigns');
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      {error && <p>{error}</p>}
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignPage;
