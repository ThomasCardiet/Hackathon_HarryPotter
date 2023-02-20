export class Ingredient {
  name;
  bonus;

  /**
   * @param {string} name
   * @param {Number} bonus
   */
  constructor(name, bonus = 0) {
    this.name = name;
    this.bonus = bonus;
  }

  getName() {
    return this.name;
  }

  getBonus() {
    return this.bonus;
  }

  /**
   * @param {String} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * @param {Number} bonus
   */
  setBonus(bonus) {
    this.bonus = bonus;
  }
}
