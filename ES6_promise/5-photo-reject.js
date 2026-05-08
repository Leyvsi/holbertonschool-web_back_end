/**
 * Returns a rejected promise with a specific error message.
 * @param {String} fileName - The name of the file to process.
 * @returns {Promise} A rejected promise containing an Error object.
 */
export default function uploadPhoto(fileName) {
  // Promise.reject creates a promise that is already rejected with the provided reason
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
