import Currency from './3-currency.js';

export default class Pricing {
  /**
   * Represents the pricing of an item.
   * @param {Number} amount - The amount of the price.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    // Attributes stored with underscore
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    this._currency = value;
  }

  /**
   * Returns the full price format: amount name (code)
   * @returns {String}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Static method to convert price based on a rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The rate of conversion.
   * @returns {Number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
