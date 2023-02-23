import { shuffleArray } from '@/helpers/array';

export class Ingredient {
  name;
  bonus;
  img = {
    basePath: '/images/ingredients',
    name: null,
  };

  /**
   * @param {string} name
   * @param {Number} bonus
   */
  constructor(name, bonus = 0, imgName) {
    this.name = name;
    this.bonus = bonus;
    this.img.name = imgName;
  }

  getName() {
    return this.name;
  }

  getBonus() {
    return this.bonus;
  }

  getImgPath() {
    return `${this.img.basePath}/${this.img.name}`;
  }

  getImgComponent() {
    return <img src={this.getImgPath()} alt="Picture of ingredient" />;
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
  ASPHODEL_ROOT: new Ingredient("Racine d'asphodèle", 0, 'asphodel_root.png'),
  NAPEL: new Ingredient('Napel', 0, 'nepal.png'),
  DRIED_NETTLES: new Ingredient('Orties séchées', 0, 'dried_nettles.png'),
  DICTAME: new Ingredient('Dictame', 0, 'dictame.png'),
  MUGWORT: new Ingredient('Armoise', 0, 'mugwort.png'),
  MANDRAKE_ROOT: new Ingredient('Racine de mandragore', 0, 'mandrake_root.png'),
  ORPHIDIAN_SKIN: new Ingredient("Peau d'ophidien", 0, 'orphidian_skin.png'),
  PORCUPINE_QUILLS: new Ingredient(
    'Épines de porc-épic',
    0,
    'porcupine_quills.png'
  ),
  OCTOPUS_POWDER: new Ingredient('Poudre de pieuvre', 0, 'octopus_powder.png'),
  SCARAB_EYES: new Ingredient('Yeux de scarabée', 0, 'scarab_eyes.png'),
  BICORN_HORN: new Ingredient('Corne de bicorne', 0, 'bicorn_horn.png'),
  SNAKE_HOOKS: new Ingredient('Crochets de serpent', 0, 'snake_hooks.png'),
  BEZOAR: new Ingredient('Bézoard', 0, 'bezoar.png'),
  SILVER_UNICORN_HORN: new Ingredient(
    'Corne de licorne en argent',
    0,
    'silver_unicorn_horn.png'
  ),
  ACONITE: new Ingredient('Aconit', 0, 'aconit.png'),
};

/**
 * TRANSFORM INGREDIENTS TO ARRAY
 */
export const getIngredients = () => {
  return Object.values(INGREDIENTS);
};

/**
 * GET SHUFFLED INGREDIENTS ARRAY
 */
export const getShuffledIngredients = () => {
  return shuffleArray(getIngredients());
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
