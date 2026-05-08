/**
 * Updates quantities in a map where the initial quantity is 1.
 * @param {Map} map - The map of grocery items to update.
 * @returns {Map} The updated map.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is an instance of Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  map.forEach((quantity, item) => {
    // If the quantity is 1, update it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  return map;
}
