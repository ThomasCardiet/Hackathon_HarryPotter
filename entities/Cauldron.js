import { CauldronType } from './CauldronType';

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
