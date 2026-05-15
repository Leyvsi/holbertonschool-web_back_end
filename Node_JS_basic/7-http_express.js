// Import the required modules
const express = require('express');
const fs = require('fs');

// Initialize the Express application
const app = express();
const PORT = 1245;
// Get the database file path from the command line arguments
const DATABASE_FILE = process.argv[2];

// Helper function to read and format student data asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const studentLines = lines.slice(1);
      const fields = {};
      let totalStudents = 0;
      let output = '';

      for (const line of studentLines) {
        const studentData = line.split(',');

        if (studentData.length >= 4) {
          const firstname = studentData[0].trim();
          const field = studentData[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          totalStudents += 1;
        }
      }

      output += `Number of students: ${totalStudents}`;

      for (const [field, list] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }

      resolve(output);
    });
  });
}

// Route for the root endpoint
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route for the students endpoint
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  
  countStudents(DATABASE_FILE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

// Listen on the specified port
app.listen(PORT);

// Export the app variable
module.exports = app;
