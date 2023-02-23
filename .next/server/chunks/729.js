"use strict";
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 8729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Party": () => (/* binding */ Party)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DraggableIngredient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5149);
/* harmony import */ var _components_DropBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2530);
/* harmony import */ var _entities_Ingredient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6685);
/* harmony import */ var _entities_Potion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9579);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3695);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4339);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1196);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3582);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
([_api__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const TIME_PENALITY = {
    INDICE: 20,
    WRONG_INGREDIENT: 5
};
const INDICE_TIMEOUT = 3000;
const Party = ({ user , stopGame , winner  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [winnerHouse, setWinnerHouse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user ? user.house.name : "Ravenclaw");
    const [winnerHouseImg, setWinnerHouseImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/images/" + winnerHouse + ".png"
    }));
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [ingredients, setIngredients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [dropBoxOffsets, setDropBoxOffsets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [finished, setFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [countdownTime, setCountDownTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_CountDown__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_INIT_TIME);
    // POTIONS
    const [potions, setPotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentPotionIndex, setCurrentPotionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [currentIngredientPotionIndex, setCurrentIngredientPotionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // REDIRECT IF NOT LOGGED
        if (!_api__WEBPACK_IMPORTED_MODULE_6__/* .Api.isLoggedUser */ .V.isLoggedUser()) router.push(_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.getRoutes */ .F.getRoutes().LOGIN.slug);
        if (!ingredients.length) setIngredients((0,_entities_Ingredient__WEBPACK_IMPORTED_MODULE_4__/* .getShuffledIngredients */ .kt)());
        if (!potions.length) setPotions((0,_entities_Potion__WEBPACK_IMPORTED_MODULE_5__/* .getPartyPotions */ .ZA)());
    }, []);
    /**
   * @param {Ingredient} ingredient
   */ const dropIngredient = (droppedIngredient)=>{
        // ERROR IF INDICE IS FLIP
        if (classFlipFirst === "flip" || classFlipSecond === "flip" || classFlipThird === "flip") {
            return react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Impossible, vous lisez un indice !", {
                icon: "❌",
                theme: "light",
                position: "bottom-center"
            });
        }
        // GET NEEDED INGREDIENT
        const neededIngredient = potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex];
        // VERIFY IS DROPPED INGREDIENT IS EQUAL TO NEEDED INGREDIENT
        const isNeededIngredient = droppedIngredient === neededIngredient;
        // GOOD INGREDIENT
        if (isNeededIngredient) {
            // RESET CAN TAKE INDICE
            setCanTakeIndice(true);
            resetAllClassFlip();
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Ingr\xe9dient ajout\xe9", {
                icon: "\uD83E\uDDEA",
                theme: "light",
                position: "bottom-center"
            });
            // REMOVE INGREDIENT FROM LIST
            setIngredients(ingredients.filter((ingredient)=>droppedIngredient !== ingredient));
            // IF NOT LAST NEEDED INGREDIENT OF CURRENT POTION
            if (currentIngredientPotionIndex < potions[currentPotionIndex].getIngredients().length - 1) {
                setCurrentIngredientPotionIndex((prev)=>prev + 1);
            } else {
                // IF ITS LAST NEEDED INGREDIENT OF CURRENT POSTION
                // GO TO NEXT POTION
                if (currentPotionIndex < potions.length - 1) {
                    setCurrentPotionIndex((prev)=>prev + 1);
                    setCurrentIngredientPotionIndex(0);
                    setIngredients((0,_entities_Ingredient__WEBPACK_IMPORTED_MODULE_4__/* .getShuffledIngredients */ .kt)());
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Bien jou\xe9, potion suivante !", {
                        icon: "\uD83E\uDDEA",
                        theme: "light",
                        position: "bottom-center"
                    });
                } else {
                    // IF LAST POTION FINISH GAME
                    setFinished(true);
                }
            }
        } else {
            // BAD INGREDIENT
            setCountDownTime((prev)=>prev - TIME_PENALITY.WRONG_INGREDIENT);
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Mauvais ingr\xe9dient (- 5 sec)", {
                icon: "❌",
                theme: "light",
                position: "bottom-center"
            });
        }
    };
    const [indices, setIndices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            indiceTaken: false
        },
        {
            indiceTaken: false
        },
        {
            indiceTaken: false
        }
    ]);
    const [classFlipFirst, setClassFlipFirst] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [classFlipSecond, setClassFlipSecond] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [classFlipThird, setClassFlipThird] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [canTakeIndice, setCanTakeIndice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const resetAllClassFlip = ()=>{
        setClassFlipSecond("");
        setClassFlipFirst("");
        setClassFlipThird("");
    };
    const launchIndices = (index)=>{
        // NOT ENOUGH TIME
        if (countdownTime <= TIME_PENALITY.INDICE + 10) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Tu nas plus le temps !", {
                icon: "❌",
                theme: "light",
                position: "bottom-center"
            });
        }
        let findIndice = indices.find((item, indexItem)=>indexItem === index);
        if (findIndice.indiceTaken === false && canTakeIndice) {
            setCountDownTime((prev)=>prev - TIME_PENALITY.INDICE);
            /*Set to true if already taken*/ let indicesCopy = [
                ...indices
            ];
            findIndice.indiceTaken = true;
            setIndices(indicesCopy);
            if (index === 0) {
                setClassFlipFirst("flip");
            } else if (index === 1) {
                setClassFlipSecond("flip");
            } else if (index === 2) {
                setClassFlipThird("flip");
            }
            setCanTakeIndice(false);
            setTimeout(()=>{
                resetAllClassFlip();
            }, INDICE_TIMEOUT);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (finished) stopGame();
    }, [
        finished
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (winner) {
            setFinished(true);
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(`${winner.name} est le grand gagnant !`, {
                icon: "\uD83D\uDC4A",
                theme: "light",
                position: "bottom-right"
            });
        }
    }, [
        winner
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: finished ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "success " + winnerHouse,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "success-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "success-container-title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-50 text-Harry text-yellow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_10__.Tween, {
                                    from: {
                                        opacity: "0",
                                        scale: "0.4"
                                    },
                                    to: {
                                        opacity: "100%",
                                        scale: "1"
                                    },
                                    ease: "expo.out()",
                                    duration: 6,
                                    stagger: 0.1,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_10__.SplitChars, {
                                        wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                display: "inline-block"
                                            }
                                        }),
                                        children: "Victoire de la maison"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-100 text-Harry text-yellow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_10__.Tween, {
                                    from: {
                                        opacity: "0",
                                        scale: "0.4"
                                    },
                                    to: {
                                        opacity: "100%",
                                        scale: "1"
                                    },
                                    ease: "expo.out()",
                                    duration: 6,
                                    stagger: 0.1,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_10__.SplitChars, {
                                        wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                display: "inline-block"
                                            }
                                        }),
                                        children: winnerHouse
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "success-container-logo",
                        children: winnerHouseImg
                    }),
                    winner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "success-container-logo-name text-30 text-ProzaLibre-SemiBold text-yellow",
                        children: [
                            "Le joueur ",
                            winner.name,
                            " a gagn\xe9 !"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "success-container-content",
                        children: users.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-30 text-white text-ProzaLibre-Regular",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/" + item.house + ".png"
                                    }),
                                    item.name,
                                    " - ",
                                    item.potionDone,
                                    " / 3"
                                ]
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "success-container-button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                            href: "/choice",
                            className: "btn-reset btn-yellow",
                            children: "Rejouer"
                        })
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "party",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountDown__WEBPACK_IMPORTED_MODULE_11__.CountDown, {
                    time: countdownTime,
                    setTime: setCountDownTime,
                    setParentState: setFinished
                }),
                potions && potions[currentPotionIndex] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "party__potion-name",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    children: [
                                        "Potion (",
                                        currentPotionIndex + 1,
                                        "/",
                                        potions.length,
                                        "):",
                                        " ",
                                        potions[currentPotionIndex].getName()
                                    ]
                                }),
                                potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Ingr\xe9dient requis:",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex].name
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DropBlock__WEBPACK_IMPORTED_MODULE_3__.DropBlock, {
                            cauldron: potions[currentPotionIndex].getCauldron(),
                            setDropBoxOffsets: setDropBoxOffsets
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "indices",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "indices-container",
                        children: indices.map((item, index)=>{
                            if (index === 0) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: (e)=>launchIndices(index),
                                    className: "indices-container-item first " + classFlipFirst + (canTakeIndice ? "" : " inactive") + (item.indiceTaken === true ? " inactive" : ""),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-background ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/carte.png"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "content",
                                            children: potions && potions[currentPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex].getImgComponent()
                                        })
                                    ]
                                }, index);
                            } else if (index === 1) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: (e)=>launchIndices(index),
                                    className: "indices-container-item second " + classFlipSecond + (canTakeIndice ? "" : " inactive") + (item.indiceTaken === true ? " inactive" : ""),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-background",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/carte.png"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "content",
                                            children: potions && potions[currentPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex].getImgComponent()
                                        })
                                    ]
                                }, index);
                            } else if (index === 2) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: (e)=>launchIndices(index),
                                    className: "indices-container-item third " + classFlipThird + (canTakeIndice ? "" : " inactive") + (item.indiceTaken === true ? " inactive" : ""),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "indices-container-item-background",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/carte.png"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "content",
                                            children: potions && potions[currentPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex] && potions[currentPotionIndex].getIngredients()[currentIngredientPotionIndex].getImgComponent()
                                        })
                                    ]
                                }, index);
                            }
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "ingredients-block",
                    children: ingredients.map((ingredient, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DraggableIngredient__WEBPACK_IMPORTED_MODULE_2__.DraggableIngredient, {
                            dropBoxOffsets: dropBoxOffsets,
                            ingredient: ingredient,
                            dropIngredient: dropIngredient
                        }, index))
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZA": () => (/* binding */ getPartyPotions)
});

// UNUSED EXPORTS: POTIONS, Potion, getPotionByName, getPotions

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./entities/CauldronType.js
class CauldronType {
    name;
    isMaterial;
    /**
   * @param {string} name
   * @param {boolean} isMaterial
   */ constructor(name, isMaterial = true){
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
   */ setName(name) {
        this.name = name;
    }
    /**
   * @param {boolean} isMaterial
   */ setIsMaterial(isMaterial) {
        this.isMaterial = isMaterial;
    }
}
// CAULDRON TYPES LIST
const CAULDRON_TYPES = {
    FOLDABLE: new CauldronType("pliable", false),
    SILVER: new CauldronType("argent"),
    COPPER: new CauldronType("cuivre"),
    BRASS: new CauldronType("laiton")
};
/**
 * TRANSFORM CAULDRON TYPES TO ARRAY
 */ const getCauldronTypes = ()=>{
    return Object.values(CAULDRON_TYPES);
};
/**
 * GET CAULDRON TYPE BY NAME
 *
 * @param {String} name
 *
 */ const getCauldronTypeByName = (name)=>{
    return getCauldronTypes().find((cauldronType)=>cauldronType.getName() === name);
};

;// CONCATENATED MODULE: ./entities/Cauldron.js



class Cauldron {
    type;
    name;
    img = {
        basePath: "/images/cauldrons",
        name: null
    };
    /**
   * @param {CauldronType} type
   */ constructor(type, imgName = CAULDRON_IMAGES.DEFAULT){
        this.type = type;
        this.name = `Chaudron ${type.getIsMaterial() ? "en " : ""}${type.getName()}`;
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
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: this.getImgPath(),
            alt: "Picture of Cauldron",
            useMap: `#${map}`
        });
    }
    /**
   * @param {string} name
   */ setName(name) {
        this.name = name;
    }
    /**
   * @param {CauldronType} type
   */ setType(type) {
        this.type = type;
    }
}
// CAULDRON IMAGE LIST
const CAULDRON_IMAGES = {
    DEFAULT: "cauldron_default.png"
};
// CAULDRONS LIST
const CAULDRONS = {
    FOLDABLE: new Cauldron(CAULDRON_TYPES.FOLDABLE),
    SILVER: new Cauldron(CAULDRON_TYPES.SILVER),
    COPPER: new Cauldron(CAULDRON_TYPES.COPPER),
    BRASS: new Cauldron(CAULDRON_TYPES.BRASS)
};
/**
 * TRANSFORM CAULDRONS TO ARRAY
 */ const getCauldrons = ()=>{
    return Object.values(CAULDRONS);
};
/**
 * GET CAULDRON BY NAME
 *
 * @param {String} name
 *
 */ const getCauldronByName = (name)=>{
    return getCauldrons().find((cauldron)=>cauldron.getName() === name);
};
/**
 * GET CAULDRON BY TYPE
 *
 * @param {CauldronType} type
 *
 */ const getCauldronByType = (type)=>{
    return getCauldrons().find((cauldron)=>cauldron.getType() === type);
};

// EXTERNAL MODULE: ./entities/Ingredient.js
var Ingredient = __webpack_require__(6685);
// EXTERNAL MODULE: ./helpers/array.js
var array = __webpack_require__(1678);
;// CONCATENATED MODULE: ./entities/Potion.js



class Potion {
    name;
    ingredients;
    cauldron;
    /**
   * @param {string} name
   * @param {Array<Ingredient>} ingredients
   */ constructor(name, ingredients, cauldron){
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
   */ setName(name) {
        this.name = name;
    }
    /**
   * @param {Array<Ingredient>} ingredients
   */ setIngredients(ingredients) {
        this.ingredients = ingredients;
    }
    /**
   * @param {Cauldron} cauldron
   */ setCauldron(cauldron) {
        this.cauldron = cauldron;
    }
}
// POTIONS LIST
const POTIONS = {
    ANTIDOT: new Potion("Antidote", [
        Ingredient/* INGREDIENTS.BEZOAR */.Wv.BEZOAR,
        Ingredient/* INGREDIENTS.ACONITE */.Wv.ACONITE,
        Ingredient/* INGREDIENTS.ORPHIDIAN_SKIN */.Wv.ORPHIDIAN_SKIN
    ], CAULDRONS.FOLDABLE),
    WIGGENWELD: new Potion("Wiggenweld", [
        Ingredient/* INGREDIENTS.SILVER_UNICORN_HORN */.Wv.SILVER_UNICORN_HORN,
        Ingredient/* INGREDIENTS.ACONITE */.Wv.ACONITE
    ], CAULDRONS.FOLDABLE),
    WIGGENWELD_EXTRA: new Potion("Wiggenweld extra", [
        Ingredient/* INGREDIENTS.OCTOPUS_POWDER */.Wv.OCTOPUS_POWDER,
        Ingredient/* INGREDIENTS.SILVER_UNICORN_HORN */.Wv.SILVER_UNICORN_HORN,
        Ingredient/* INGREDIENTS.ACONITE */.Wv.ACONITE
    ], CAULDRONS.SILVER),
    HERBICIDE: new Potion("Herbicide", [
        Ingredient/* INGREDIENTS.DRIED_NETTLES */.Wv.DRIED_NETTLES,
        Ingredient/* INGREDIENTS.PORCUPINE_QUILLS */.Wv.PORCUPINE_QUILLS,
        Ingredient/* INGREDIENTS.SNAKE_HOOKS */.Wv.SNAKE_HOOKS
    ], CAULDRONS.COPPER),
    PIMENTINE: new Potion("Pimentine", [
        Ingredient/* INGREDIENTS.BICORN_HORN */.Wv.BICORN_HORN,
        Ingredient/* INGREDIENTS.MANDRAKE_ROOT */.Wv.MANDRAKE_ROOT
    ], CAULDRONS.COPPER),
    PIMENTINE_EXTRA: new Potion("Pimentine extra", [
        Ingredient/* INGREDIENTS.OCTOPUS_POWDER */.Wv.OCTOPUS_POWDER,
        Ingredient/* INGREDIENTS.BICORN_HORN */.Wv.BICORN_HORN,
        Ingredient/* INGREDIENTS.MANDRAKE_ROOT */.Wv.MANDRAKE_ROOT
    ], CAULDRONS.BRASS),
    VITAMIX: new Potion("Vitamix", [
        Ingredient/* INGREDIENTS.MUGWORT */.Wv.MUGWORT,
        Ingredient/* INGREDIENTS.ASPHODEL_ROOT */.Wv.ASPHODEL_ROOT,
        Ingredient/* INGREDIENTS.DICTAME */.Wv.DICTAME
    ], CAULDRONS.COPPER)
};
/**
 * TRANSFORM POTIONS TO ARRAY
 */ const getPotions = ()=>{
    return Object.values(POTIONS);
};
/**
 * GET INGREDIENT BY NAME
 *
 * @param {String} name
 *
 */ const getPotionByName = (name)=>{
    return getPotions().find((potion)=>potion.getName() === name);
};
/**
 * GET 3 SHUFFLED ARRAY OF POTIONS
 */ const getPartyPotions = ()=>{
    return (0,array/* shuffleArray */.S)(getPotions()).slice(0, 3);
};


/***/ })

};
;