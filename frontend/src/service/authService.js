// src/services/authService.js
import axios from "axios";

// Replace this with your API base URL if different
const API_BASE_URL = "http://localhost:5000/api"; 

// Sign Up API
export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data; // Return the data from the response
  } catch (error) {
    throw error.response?.data || "Error during sign up"; // Error handling
  }
};

// Login API
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data; // Return the data from the response (token, user data, etc.)
  } catch (error) {
    throw error.response?.data || "Error during login"; // Error handling
  }
};

// Exporting functions so they can be used in other parts of the frontend
