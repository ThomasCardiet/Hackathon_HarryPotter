import { Cauldron } from './Cauldron';
import { Ingredient } from './Ingredient';

export class Potion {
  name;
  ingredients;
  cauldron;

  /**
   * @param {string} name
   * @param {Array<Ingredient>} ingredients
   */
  constructor(name, ingredients, cauldron) {
    this.name = name;
    this.ingredients = ingredients;
    this.cauldron = cauldron;
  }

  getName() {
    return this.name;
  }

  getIngredients() {
    return this.ingredients;
  }

  getCauldron() {
    return this.cauldron;
  }

  /**
   * @param {String} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * @param {Array<Ingredient>} ingredients
   */
  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }

  /**
   * @param {Cauldron} cauldron
   */
  setCauldron(cauldron) {
    this.cauldron = cauldron;
  }
}
