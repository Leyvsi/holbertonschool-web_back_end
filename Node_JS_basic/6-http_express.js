// Import the Express module
const express = require('express');

// Initialize the Express application
const app = express();
const PORT = 1245;

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on the specified port
app.listen(PORT);

// Export the app variable
module.exports = app;

