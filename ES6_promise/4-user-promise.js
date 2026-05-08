/**
 * Returns a resolved promise with user information.
 * @param {String} firstName - The user's first name.
 * @param {String} lastName - The user's last name.
 * @returns {Promise} A resolved promise containing the user object.
 */
export default function signUpUser(firstName, lastName) {
  // Promise.resolve creates a promise that is already settled with the given value
  return Promise.resolve({
    firstName,
    lastName,
  });
}
