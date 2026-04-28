/**
 * Demonstrates block scoping using let and const.
 * @param {boolean} trueOrFalse - Determines if the block should execute.
 * @returns {Array} An array containing the task statuses.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // These variables are now scoped only to this 'if' block
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
