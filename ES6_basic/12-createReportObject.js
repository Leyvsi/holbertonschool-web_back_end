/**
 * Creates a report object from an employees list.
 * @param {Object} employeesList - Object containing departments and employees.
 * @returns {Object} The report object.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
