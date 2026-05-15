// Import the HTTP module
const http = require('http');

const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
});

// Listen on the specified port
app.listen(PORT);

// Export the app variable
module.exports = app;
