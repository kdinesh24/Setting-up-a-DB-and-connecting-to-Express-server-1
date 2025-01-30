require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const port = 3010;

// Middleware
app.use(express.json());
app.use(express.static('static'));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(() => console.log('Connected to database'))
.catch(err => console.error(`Error connecting to database: ${err.message}`));

// Routes
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
