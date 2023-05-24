const express = require('express');
const axios = require('axios');

const router = express.Router();
const apiKey = '262443cd'; // 

router.get('/', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://api.example.com/search?q=${query}&apikey=${apiKey}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.example.com/movies/${id}?apikey=${apiKey}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
