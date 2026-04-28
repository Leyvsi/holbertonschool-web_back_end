/**
 * Returns the count of arguments passed to the function.
 * @param {...*} args - The arguments to count.
 * @returns {number} The number of arguments.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
