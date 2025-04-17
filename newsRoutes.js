const express = require('express');
const axios = require('axios');
const router = express.Router();

// Use your actual API key here
const API_KEY = '90019c6937c24e048fb3704365b3d9a8';  // Replace this with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

// Fetch news from NewsAPI
router.get('/', async (req, res) => {
  try {
    // Define your NewsAPI request URL with country set to 'in' (India)
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,  
        category: 'general',  
        language: 'en',  
        country: 'in',  
      },
    });

    // Send back the articles to the client
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Failed to fetch news');
  }
});

module.exports = router;
