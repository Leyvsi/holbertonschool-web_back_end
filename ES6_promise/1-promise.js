/**
 * Simulates an API response based on a success boolean.
 * @param {boolean} success - Indicates if the request should succeed.
 * @returns {Promise} Resolves with an object or rejects with an Error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // If success is true, resolve with the specified object
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject with an Error object and specific message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
