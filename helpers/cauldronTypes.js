import { CauldronType } from '../entities/CauldronType';

// CAULDRON TYPES LIST
export const CAULDRON_TYPES = {
  FOLDABLE: new CauldronType('pliable', false),
  SILVER: new CauldronType('argent'),
  COPPER: new CauldronType('cuivre'),
  BRASS: new CauldronType('laiton'),
};

/**
 * TRANSFORM CAULDRON TYPES TO ARRAY
 */
export const getCauldronTypes = () => {
  return Object.values(CAULDRON_TYPES);
};

/**
 * GET CAULDRON TYPE BY NAME
 *
 * @param {String} name
 *
 */
export const getCauldronTypeByName = (name) => {
  return getCauldronTypes().find(
    (cauldronType) => cauldronType.getName() === name
  );
};
