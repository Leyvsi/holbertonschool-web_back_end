export default class Airport {
  /**
   * Represents an airport.
   * @param {String} name - The name of the airport.
   * @param {String} code - The airport code (e.g., SFO).
   */
  constructor(name, code) {
    // Attributes stored with underscore
    this._name = name;
    this._code = code;
  }

  /**
   * Overrides the default string representation of the object.
   * This is what controls the [object SFO] output.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
