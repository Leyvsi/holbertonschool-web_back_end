/**
 * Retrieves ids from a list of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array} An array of ids or an empty array if input is invalid.
 */
export default function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract only the id from each student object
  return students.map((student) => student.id);
}
