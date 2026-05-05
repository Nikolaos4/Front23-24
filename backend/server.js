const express = require('express');
const app = express();
const PORT = 3000;

const serverId = process.env.SERVER_ID || 'unknown';

app.get('/', (req, res) => {
  res.json({ server: `backend-${serverId}` });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend ${serverId} running on port ${PORT}`);
});