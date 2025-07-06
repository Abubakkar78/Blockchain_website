const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Load sample data
const importsData = JSON.parse(fs.readFileSync('./db.json'));

// API endpoints
app.get('/api/imports', (req, res) => {
  res.json(importsData.imports);
});

app.post('/api/contact', (req, res) => {
  console.log('Contact form submitted:', req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));