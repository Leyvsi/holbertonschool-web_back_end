/**
 * Return a string using const.
 * @returns {string} The task string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Return a string suffix.
 * @returns {string} The suffix string.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Return a combined string using let.
 * @returns {string} The combined string.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
