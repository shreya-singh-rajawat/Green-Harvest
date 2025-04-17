// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema
const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  enjoyment: String,
  features: String,
  improvements: [String],
  feedback: String,
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

// POST route to save review
router.post('/submit-review', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json({ message: "Review submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
