const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/campaignController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, createCampaign);
router.get('/', getCampaigns);

module.exports = router;
