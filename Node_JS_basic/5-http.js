const http = require('http');
const fs = require('fs');

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

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    countStudents(DATABASE_FILE)
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(PORT);

// Export the app variable
module.exports = app;

