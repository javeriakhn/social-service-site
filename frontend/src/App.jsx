// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CampaignPage from './pages/CampaignPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/campaigns" element={<CampaignPage />} />
      </Routes>
    </Router>
  );
}

export default App;


