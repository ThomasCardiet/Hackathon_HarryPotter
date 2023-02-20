import { CauldronType, CAULDRON_TYPES } from './CauldronType';

export class Cauldron {
  type;
  name;

  /**
   * @param {CauldronType} type
   */
  constructor(type) {
    this.type = type;
    this.name = `Chaudron ${
      type.getIsMaterial() ? 'en ' : ''
    }${type.getName()}`;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  /**
   * @param {string} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * @param {CauldronType} type
   */
  setType(type) {
    this.type = type;
  }
}

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
