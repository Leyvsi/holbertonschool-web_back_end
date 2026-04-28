/**
 * Creates an object containing department name and its employees.
 * @param {string} departmentName - The name of the department.
 * @param {string[]} employees - An array of employee names.
 * @returns {Object} An object with the department name as a key.
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}
