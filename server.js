const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // You can restrict this to specific domains if needed
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware to fetch JSON data from given API link
app.get('/fetch/:apiLink', async (req, res) => {
  try {
    const apiLink = decodeURIComponent(req.params.apiLink);
    const response = await axios.get(apiLink);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API link' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
