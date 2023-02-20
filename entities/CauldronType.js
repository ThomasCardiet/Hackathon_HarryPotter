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
