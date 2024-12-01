const express = require('express');
const Campaign = require('../models/Campaign');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.put('/approve/:id', authMiddleware, async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.status = 'Approved';
    await campaign.save();
    res.json({ message: 'Campaign approved', campaign });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/reject/:id', authMiddleware, async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.status = 'Rejected';
    await campaign.save();
    res.json({ message: 'Campaign rejected', campaign });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
