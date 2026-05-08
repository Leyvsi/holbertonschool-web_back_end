import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by resolving multiple promises.
 * Logs the results or an error message if any promise fails.
 */
export default function handleProfileSignup() {
  // Promise.all takes an array of promises and resolves when all of them succeed
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // values is an array containing the results in the same order
      const { body } = values[0];
      const { firstName, lastName } = values[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      // If any promise in the array rejects, log the error message
      console.log('Signup system offline');
    });
}
