/**
 * Creates a Set from an array.
 * @param {Array} array - The array to convert.
 * @returns {Set} A Set containing the unique elements of the array.
 */
export default function setFromArray(array) {
  // Initializing a Set with an array automatically removes duplicates
  return new Set(array);
}
