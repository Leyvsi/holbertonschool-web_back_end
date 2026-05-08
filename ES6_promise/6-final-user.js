import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup by settling multiple promises.
 * @param {String} firstName - The user's first name.
 * @param {String} lastName - The user's last name.
 * @param {String} fileName - The name of the file to upload.
 * @returns {Promise} A promise that resolves to an array of results.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Promise.allSettled waits for all promises to finish, regardless of success or failure
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      // We map the results to format the error value if necessary
      return results.map((result) => ({
        status: result.status,
        // If the promise rejected, we use the string representation of the error
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }));
    });
}
