/**
 * Executes a function and captures its result or error in a queue.
 * @param {Function} mathFunction - The function to execute.
 * @returns {Array} A queue containing the result/error and a final message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Attempt to execute the function and push the result
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    // If an error occurs, push the string representation of the error
    queue.push(String(err));
  } finally {
    // This message is added regardless of success or failure
    queue.push('Guardrail was processed');
  }

  return queue;
}
