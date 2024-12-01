require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());

// Enable CORS
app.use(cors());

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Service site!');
});

// Define your API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/campaign', require('./routes/campaign'));
app.use('/api/admin', require('./routes/admin'));

// Example routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







