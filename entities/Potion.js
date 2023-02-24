import { Cauldron, CAULDRONS } from './Cauldron';
import { Ingredient, INGREDIENTS } from './Ingredient';
import { shuffleArray } from '@/helpers/array';

const NUMBER_GAME_POTIONS = 4;

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

// POTIONS LIST
export const POTIONS = {
  ANTIDOT: new Potion(
    'Antidote',
    [INGREDIENTS.BEZOAR, INGREDIENTS.ACONITE, INGREDIENTS.ORPHIDIAN_SKIN],
    CAULDRONS.FOLDABLE
  ),
  WIGGENWELD: new Potion(
    'Wiggenweld',
    [INGREDIENTS.SILVER_UNICORN_HORN, INGREDIENTS.ACONITE],
    CAULDRONS.FOLDABLE
  ),
  WIGGENWELD_EXTRA: new Potion(
    'Wiggenweld extra',
    [
      INGREDIENTS.OCTOPUS_POWDER,
      INGREDIENTS.SILVER_UNICORN_HORN,
      INGREDIENTS.ACONITE,
    ],
    CAULDRONS.SILVER
  ),
  HERBICIDE: new Potion(
    'Herbicide',
    [
      INGREDIENTS.DRIED_NETTLES,
      INGREDIENTS.PORCUPINE_QUILLS,
      INGREDIENTS.SNAKE_HOOKS,
    ],
    CAULDRONS.COPPER
  ),
  PIMENTINE: new Potion(
    'Pimentine',
    [INGREDIENTS.BICORN_HORN, INGREDIENTS.MANDRAKE_ROOT],
    CAULDRONS.COPPER
  ),
  PIMENTINE_EXTRA: new Potion(
    'Pimentine extra',
    [
      INGREDIENTS.OCTOPUS_POWDER,
      INGREDIENTS.BICORN_HORN,
      INGREDIENTS.MANDRAKE_ROOT,
    ],
    CAULDRONS.BRASS
  ),
  VITAMIX: new Potion(
    'Vitamix',
    [INGREDIENTS.MUGWORT, INGREDIENTS.ASPHODEL_ROOT, INGREDIENTS.DICTAME],
    CAULDRONS.COPPER
  ),
};

/**
 * TRANSFORM POTIONS TO ARRAY
 */
export const getPotions = () => {
  return Object.values(POTIONS);
};

/**
 * GET INGREDIENT BY NAME
 *
 * @param {String} name
 *
 */
export const getPotionByName = (name) => {
  return getPotions().find((potion) => potion.getName() === name);
};

/**
 * GET 3 SHUFFLED ARRAY OF POTIONS
 */
export const getPartyPotions = () => {
  return shuffleArray(getPotions()).slice(0, NUMBER_GAME_POTIONS);
};
