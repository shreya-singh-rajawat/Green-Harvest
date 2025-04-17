const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// POST - submit a comment
router.post('/comments', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save comment' });
  }
});

// GET - fetch comments
router.get('/comments/:blogId', async (req, res) => {
    try {
      const { blogId } = req.params;
      const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  });
  

module.exports = router;
