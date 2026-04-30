export default class Car {
  /**
   * Represents a car.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Symbol.species allows us to specify the constructor 
   * to use when creating derived objects.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Returns a new instance of the current class or subclass.
   * @returns {Object} A new Car (or subclass) instance.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
