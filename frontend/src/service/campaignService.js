// src/services/campaignService.js
import axios from "axios";

// Replace this with your API base URL if different
const API_BASE_URL = "http://localhost:5000/api";

// Fetch campaigns
export const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/campaign`);
    return response.data; // Return the list of campaigns
  } catch (error) {
    throw error.response?.data || "Error fetching campaigns"; // Error handling
  }
};

// Create a new campaign
export const createCampaign = async (campaignData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/campaign`, campaignData);
    return response.data; // Return the created campaign data
  } catch (error) {
    throw error.response?.data || "Error creating campaign"; // Error handling
  }
};

// Update an existing campaign
export const updateCampaign = async (campaignId, campaignData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/campaign/${campaignId}`, campaignData);
    return response.data; // Return the updated campaign data
  } catch (error) {
    throw error.response?.data || "Error updating campaign"; // Error handling
  }
};

// Delete a campaign
export const deleteCampaign = async (campaignId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/campaign/${campaignId}`);
    return response.data; // Return response confirming deletion
  } catch (error) {
    throw error.response?.data || "Error deleting campaign"; // Error handling
  }
};
