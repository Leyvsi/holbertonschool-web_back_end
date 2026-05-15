// Import the file system module
const fs = require('fs');

// Count students from a CSV database file synchronously
function countStudents(path) {
  try {
    // Read file synchronously and convert to string
    const data = fs.readFileSync(path, 'utf8');

    // Split lines and filter out empty lines or headers
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
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
  } catch (error) {
    // Throw error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

// Export the function
module.exports = countStudents;
