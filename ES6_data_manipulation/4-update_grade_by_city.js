/**
 * Updates student grades for a specific city.
 * @param {Array} students - List of student objects.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - List of grade objects { studentId, grade }.
 * @returns {Array} List of students with their updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // First, filter the students by the given city
  return students
    .filter((student) => student.location === city)
    // Then, map each student to a new object including their grade
    .map((student) => {
      // Look for a matching grade in the newGrades array
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        // Set grade to the found value, or 'N/A' if not found
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
