export default class Building {
  /**
   * Represents a building.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Check if the class is being extended and if the method exists
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
