const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  try {
    const { title, description } = req.body;
    const campaign = new Campaign({ title, description, createdBy: req.user.id });
    await campaign.save();
    res.status(201).json({ message: 'Campaign created successfully', campaign });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('createdBy', 'name email');
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
