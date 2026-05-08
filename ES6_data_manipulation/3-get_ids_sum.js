/**
 * Calculates the sum of all student ids.
 * @param {Array} students - The array of student objects.
 * @returns {Number} The total sum of the ids.
 */
export default function getStudentIdsSum(students) {
  // Use reduce to accumulate the sum of ids
  // The second argument (0) initializes the accumulator
  return students.reduce((sum, student) => sum + student.id, 0);
}
