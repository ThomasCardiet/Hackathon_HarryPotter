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

// INGREDIENTS LIST
export const INGREDIENTS = {
  ASPHODEL_ROOT: new Ingredient("Racine d'asphodèle", 0),
  NAPEL: new Ingredient('Napel', 0),
  DRIED_NETTLES: new Ingredient('Orties séchées', 0),
  MUGWORT: new Ingredient('Armoise', 0),
  MANDRAKE_ROOT: new Ingredient('Racine de mandragore', 0),
  ORPHIDIAN_SKIN: new Ingredient("Peau d'ophidien", 0),
  PORCUPINE_QUILLS: new Ingredient('Épines de porc-épic', 0),
  OCTOPUS_POWDER: new Ingredient('Poudre de pieuvre', 0),
  SCARAB_EYES: new Ingredient('Yeux de scarabée', 0),
  BICORN_HORN: new Ingredient('Corne de bicorne', 0),
  SNAKE_HOOKS: new Ingredient('Crochets de serpent', 0),
  BEZOAR: new Ingredient('Bézoard', 0),
  SILVER_UNICORN_HORN: new Ingredient('Corne de licorne en argent', 0),
  WOLFSBANE: new Ingredient('Tue-loup', 0),
  ACONITE: new Ingredient('Aconit', 0),
};

/**
 * TRANSFORM INGREDIENTS TO ARRAY
 */
export const getIngredients = () => {
  return Object.values(INGREDIENTS);
};

/**
 * GET INGREDIENT BY NAME
 *
 * @param {String} name
 *
 */
export const getIngredientByName = (name) => {
  return getIngredients().find((ingredient) => ingredient.getName() === name);
};
