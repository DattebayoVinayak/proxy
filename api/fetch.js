const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const apiLink = decodeURIComponent(req.query.apiLink);
    const response = await axios.get(apiLink);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API link' });
  }
};
