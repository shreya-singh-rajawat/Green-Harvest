const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/messages - handle contact form submissions
router.post('/messages', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Basic validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save message to MongoDB
    const newMessage = new Message({ name, phone, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Server error, please try again later' });
  }
});

module.exports = router;
