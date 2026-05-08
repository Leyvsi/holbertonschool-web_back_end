/**
 * Checks if all elements in an array exist within a Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of values to find.
 * @returns {Boolean} True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // Use every to ensure all elements satisfy the condition
  return array.every((element) => set.has(element));
}
