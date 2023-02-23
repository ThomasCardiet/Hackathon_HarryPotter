"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 6685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ getIngredients),
/* harmony export */   "Wv": () => (/* binding */ INGREDIENTS),
/* harmony export */   "kt": () => (/* binding */ getShuffledIngredients)
/* harmony export */ });
/* unused harmony exports Ingredient, getIngredientByName */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1678);


class Ingredient {
    name;
    bonus;
    img = {
        basePath: "/images/ingredients",
        name: null
    };
    /**
   * @param {string} name
   * @param {Number} bonus
   */ constructor(name, bonus = 0, imgName){
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
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: this.getImgPath(),
            alt: "Picture of ingredient"
        });
    }
    /**
   * @param {String} name
   */ setName(name) {
        this.name = name;
    }
    /**
   * @param {Number} bonus
   */ setBonus(bonus) {
        this.bonus = bonus;
    }
}
// INGREDIENTS LIST
const INGREDIENTS = {
    ASPHODEL_ROOT: new Ingredient("Racine d'asphod\xe8le", 0, "asphodel_root.png"),
    NAPEL: new Ingredient("Napel", 0, "nepal.png"),
    DRIED_NETTLES: new Ingredient("Orties s\xe9ch\xe9es", 0, "dried_nettles.png"),
    DICTAME: new Ingredient("Dictame", 0, "dictame.png"),
    MUGWORT: new Ingredient("Armoise", 0, "mugwort.png"),
    MANDRAKE_ROOT: new Ingredient("Racine de mandragore", 0, "mandrake_root.png"),
    ORPHIDIAN_SKIN: new Ingredient("Peau d'ophidien", 0, "orphidian_skin.png"),
    PORCUPINE_QUILLS: new Ingredient("\xc9pines de porc-\xe9pic", 0, "porcupine_quills.png"),
    OCTOPUS_POWDER: new Ingredient("Poudre de pieuvre", 0, "octopus_powder.png"),
    SCARAB_EYES: new Ingredient("Yeux de scarab\xe9e", 0, "scarab_eyes.png"),
    BICORN_HORN: new Ingredient("Corne de bicorne", 0, "bicorn_horn.png"),
    SNAKE_HOOKS: new Ingredient("Crochets de serpent", 0, "snake_hooks.png"),
    BEZOAR: new Ingredient("B\xe9zoard", 0, "bezoar.png"),
    SILVER_UNICORN_HORN: new Ingredient("Corne de licorne en argent", 0, "silver_unicorn_horn.png"),
    ACONITE: new Ingredient("Aconit", 0, "aconit.png")
};
/**
 * TRANSFORM INGREDIENTS TO ARRAY
 */ const getIngredients = ()=>{
    return Object.values(INGREDIENTS);
};
/**
 * GET SHUFFLED INGREDIENTS ARRAY
 */ const getShuffledIngredients = ()=>{
    return (0,_helpers_array__WEBPACK_IMPORTED_MODULE_1__/* .shuffleArray */ .S)(getIngredients());
};
/**
 * GET INGREDIENT BY NAME
 *
 * @param {String} name
 *
 */ const getIngredientByName = (name)=>{
    return getIngredients().find((ingredient)=>ingredient.getName() === name);
};


/***/ }),

/***/ 1678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ shuffleArray)
/* harmony export */ });
const shuffleArray = (array)=>{
    let index = array.length, randomIndex;
    // While there remain elements to shuffle.
    while(index != 0){
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * index);
        index--;
        // And swap it with the current element.
        [array[index], array[randomIndex]] = [
            array[randomIndex],
            array[index]
        ];
    }
    return array;
};


/***/ })

};
;