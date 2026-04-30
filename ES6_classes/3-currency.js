export default class Currency {
  /**
   * Represents a currency.
   * @param {String} code - The currency code (e.g., '$').
   * @param {String} name - The currency name (e.g., 'Dollars').
   */
  constructor(code, name) {
    // Attributes stored with underscore
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }

  /**
   * Returns the full currency format: name (code)
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
