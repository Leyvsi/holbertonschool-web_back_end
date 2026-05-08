/**
 * Performs a division and throws an error if the denominator is zero.
 * @param {Number} numerator - The number to be divided.
 * @param {Number} denominator - The divisor.
 * @returns {Number} The result of the division.
 * @throws {Error} If the denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  // Perform and return the division
  return numerator / denominator;
}
