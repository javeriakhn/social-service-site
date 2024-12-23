// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json', // Sending JSON data
  },
});

export default api;
