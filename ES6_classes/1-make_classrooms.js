import ClassRoom from './0-classroom.js';

/**
 * Creates an array of 3 ClassRoom objects with specific sizes.
 * @returns {Array} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  // Create and return an array with three ClassRoom instances
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
