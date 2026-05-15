import fs from 'fs';

// Read the database file asynchronously and return an object of student arrays per field
export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve({});
        return;
      }

      const studentLines = lines.slice(1);
      const fields = {};

      studentLines.forEach((line) => {
        const studentData = line.split(',');

        if (studentData.length >= 4) {
          const firstname = studentData[0].trim();
          const field = studentData[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    });
  });
}
