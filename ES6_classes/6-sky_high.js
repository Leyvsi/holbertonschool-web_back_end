import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * Represents a tall building.
   * @param {Number} sqft - The square footage (passed to parent).
   * @param {Number} floors - The number of floors.
   */
  constructor(sqft, floors) {
    // Call the parent constructor with sqft
    super(sqft);
    // Assign the floors attribute
    this._floors = floors;
  }

  // Getter for sqft (inherited from Building, but super ensures it's set)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the parent method to provide a specific message.
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
