import { Cauldron } from '../entities/Cauldron';
import { CauldronType } from '../entities/CauldronType';
import { CAULDRON_TYPES } from './cauldronTypes';

// CAULDRONS LIST
export const CAULDRONS = {
  FOLDABLE: new Cauldron(CAULDRON_TYPES.FOLDABLE),
  SILVER: new Cauldron(CAULDRON_TYPES.SILVER),
  COPPER: new Cauldron(CAULDRON_TYPES.COPPER),
  BRASS: new Cauldron(CAULDRON_TYPES.BRASS),
};

/**
 * TRANSFORM CAULDRONS TO ARRAY
 */
export const getCauldrons = () => {
  return Object.values(CAULDRONS);
};

/**
 * GET CAULDRON BY NAME
 *
 * @param {String} name
 *
 */
export const getCauldronByName = (name) => {
  return getCauldrons().find((cauldron) => cauldron.getName() === name);
};

/**
 * GET CAULDRON BY TYPE
 *
 * @param {CauldronType} type
 *
 */
export const getCauldronByType = (type) => {
  return getCauldrons().find((cauldron) => cauldron.getType() === type);
};
