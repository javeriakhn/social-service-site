const express = require('express');
const router = express.Router();

// Simple route to test the auth endpoint
router.get('/', (req, res) => {
  res.send('Auth route is working!');
});

module.exports = router;

