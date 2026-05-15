// Import the file system module
const fs = require('fs');

// Count students from a CSV database file asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // Reject the promise if the file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // Remove the header line
      const studentLines = lines.slice(1);

      const fields = {};
      let totalStudents = 0;

      // Parse each line
      for (const line of studentLines) {
        const studentData = line.split(',');

        // Ensure the row has the required columns
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

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log details for each field
      for (const [field, list] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      // Resolve the promise upon successful completion
      resolve();
    });
  });
}

// Export the function
module.exports = countStudents;
