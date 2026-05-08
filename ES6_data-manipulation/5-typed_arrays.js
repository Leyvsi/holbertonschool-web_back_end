/**
 * Creates an Int8 typed array within an ArrayBuffer.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The index where to insert the value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} A view of the buffer.
 * @throws {Error} If the position is outside the range of the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the buffer boundaries
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified size
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to manipulate the buffer's content
  const view = new DataView(buffer);

  // Set the Int8 value at the specific position
  view.setInt8(position, value);

  return view;
}
