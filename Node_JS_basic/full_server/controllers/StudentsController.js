import readDatabase from '../utils';

// Controller handling student-related endpoints
export default class StudentsController {
  // Display all students grouped by field, sorted alphabetically
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((fields) => {
        let output = 'This is the list of our students';

        // Sort fields alphabetically, case-insensitive
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          const list = fields[field];
          output += `\nNumber of students in ${field}: ${list.length}. `
            + `List: ${list.join(', ')}`;
        });

        return response.status(200).send(output);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  // Display students belonging to a specific major (CS or SWE)
  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(databaseFile)
      .then((fields) => {
        const list = fields[major] || [];
        return response.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}
