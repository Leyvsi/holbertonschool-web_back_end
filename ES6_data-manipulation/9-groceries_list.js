/**
 * Returns a Map containing a list of groceries and their quantities.
 * @returns {Map<string, number>} A Map with grocery items.
 */
export default function groceriesList() {
  // Creating a new Map and initializing it with an array of key-value pairs
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
