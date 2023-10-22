// server.js
const path = require('path'); // Add this line at the beginning
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

app.use(cors()); // Enable CORS

app.use(bodyParser.json());

// ... (the rest of your server code)

const PORT = 5000;

app.get('/api/users', (req, res) => {
  // const dataFilePath = path.join(__dirname, 'data.json');
  // Read the JSON data from the file
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading data' });
      return;
    }

    const jsonData = JSON.parse(data);
    console.log(jsonData,'jsonData')
    res.setHeader('Content-Type', 'application/json');
    res.json(jsonData.products);
  });
});

// Default route to handle root URL
app.get('/', (req, res) => {
  res.send('Hello, this is your API server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
