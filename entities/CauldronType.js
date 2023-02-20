export class CauldronType {
  name;
  isMaterial;

  /**
   * @param {string} name
   * @param {boolean} isMaterial
   */
  constructor(name, isMaterial = true) {
    this.name = name;
    this.isMaterial = isMaterial;
  }

  getName() {
    return this.name;
  }

  getIsMaterial() {
    return this.isMaterial;
  }

  /**
   * @param {string} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * @param {boolean} isMaterial
   */
  setIsMaterial(isMaterial) {
    this.isMaterial = isMaterial;
  }
}

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
