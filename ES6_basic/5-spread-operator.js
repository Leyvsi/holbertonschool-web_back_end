/**
 * Concatenates two arrays and a string's characters using spread syntax.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {string} string - The string to split into characters.
 * @returns {Array} The combined array.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
