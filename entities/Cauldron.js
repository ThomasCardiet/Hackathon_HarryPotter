import React from 'react';
import { CauldronType, CAULDRON_TYPES } from './CauldronType';

export class Cauldron {
  type;
  name;
  img = {
    basePath: '/images/cauldrons',
    name: null,
  };

  /**
   * @param {CauldronType} type
   */
  constructor(type, imgName = CAULDRON_IMAGES.DEFAULT) {
    this.type = type;
    this.name = `Chaudron ${
      type.getIsMaterial() ? 'en ' : ''
    }${type.getName()}`;
    this.img.name = imgName;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getImgPath() {
    return `${this.img.basePath}/${this.img.name}`;
  }

  getImgComponent(map = null) {
    return (
      <img
        src={this.getImgPath()}
        alt="Picture of Cauldron"
        useMap={`#${map}`}
      />
    );
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

// CAULDRON IMAGE LIST
export const CAULDRON_IMAGES = {
  DEFAULT: 'cauldron_default.png',
  FOLDABLE: 'cauldron_foldable.png',
  SILVER: 'cauldron_silver.png',
  COPPER: 'cauldron_copper.png',
  BRASS: 'cauldron_brass.png',
};

// CAULDRONS LIST
export const CAULDRONS = {
  FOLDABLE: new Cauldron(CAULDRON_TYPES.FOLDABLE, CAULDRON_IMAGES.FOLDABLE),
  SILVER: new Cauldron(CAULDRON_TYPES.SILVER, CAULDRON_IMAGES.SILVER),
  COPPER: new Cauldron(CAULDRON_TYPES.COPPER, CAULDRON_IMAGES.COPPER),
  BRASS: new Cauldron(CAULDRON_TYPES.BRASS, CAULDRON_IMAGES.BRASS),
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
