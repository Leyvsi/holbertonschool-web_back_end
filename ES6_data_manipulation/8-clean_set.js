/**
 * Returns a string of all set values that start with a specific string.
 * @param {Set} set - The set of strings to process.
 * @param {String} startString - The prefix to look for.
 * @returns {String} A string of suffixes joined by '-'.
 */
export default function cleanSet(set, startString) {
  // Return an empty string if startString is not a string or is empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Iterate through the set
  for (const value of set) {
    // Check if the value is a string and starts with the prefix
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the part of the string after the prefix
      parts.push(value.slice(startString.length));
    }
  }

  // Join all extracted parts with a hyphen
  return parts.join('-');
}
