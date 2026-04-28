/**
 * Appends a string to each value in an array using for...of.
 * @param {Array} array - The original array.
 * @param {string} appendString - The string to prepend.
 * @returns {Array} The modified array.
 */
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(appendString + value);
  }

  return result;
}
