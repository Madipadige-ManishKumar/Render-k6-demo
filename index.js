const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Render and Grafana k6!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Success', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});