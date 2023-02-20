import { Potion } from '../entities/Potion';
import { CAULDRONS } from './cauldrons';
import { INGREDIENTS } from './ingredients';

// POTIONS LIST
export const POTIONS = {
  ANTIDOT: new Potion(
    'Antidote',
    [INGREDIENTS.BEZOAR, INGREDIENTS.ACONITE, INGREDIENTS.ORPHIDIAN_SKIN],
    CAULDRONS.FOLDABLE
  ),
  WIFFENWELD: new Potion(
    'Wiggenweld',
    [INGREDIENTS.SILVER_UNICORN_HORN, INGREDIENTS.WOLFSBANE],
    CAULDRONS.FOLDABLE
  ),
  WIFFENWELD_EXTRA: new Potion(
    'Wiggenweld extra',
    [
      INGREDIENTS.OCTOPUS_POWDER,
      INGREDIENTS.SILVER_UNICORN_HORN,
      INGREDIENTS.WOLFSBANE,
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
    [INGREDIENTS.MUGWORT, INGREDIENTS.ASPHODEL_ROOT, INGREDIENTS.NAPELL_ROOT],
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
