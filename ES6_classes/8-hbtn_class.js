export default class HolbertonClass {
  /**
   * Represents a Holberton Class.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Method called when the object is cast to a Number.
   * @returns {Number}
   */
  valueOf() {
    return this._size;
  }

  /**
   * Method called when the object is cast to a String.
   * @returns {String}
   */
  toString() {
    return this._location;
  }
}
