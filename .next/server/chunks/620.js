"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 6468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1196);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4339);





const Compteur = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [apearSecond, setApearSecond] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeApearSecond = ()=>{
        setTimeout(function() {
            setApearSecond(true);
        }, 1000);
    };
    handleChangeApearSecond();
    const [apearOne, setApearOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeApearOne = ()=>{
        setTimeout(function() {
            setApearOne(true);
        }, 2000);
    };
    handleChangeApearOne();
    const [apearZero, setApearZero] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeApearZero = ()=>{
        setTimeout(function() {
            setApearZero(true);
        }, 3000);
    };
    handleChangeApearZero();
    const push = ()=>{
        setTimeout(function() {
            router.push(_router__WEBPACK_IMPORTED_MODULE_4__/* .Router.getRoutes */ .F.getRoutes().PARTY);
        }, 4000);
    };
    push();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "compteur",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "compteur-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "compteur-container-title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-Harry text-yellow",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "La partie commence dans"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-Harry text-yellow text-blur",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "La partie commence dans"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "compteur-container-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-ProzaLibre-Bold text-yellow third",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "3"
                                })
                            })
                        }),
                        apearSecond ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-ProzaLibre-Bold text-yellow third",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "2"
                                })
                            })
                        }) : "",
                        apearOne ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-ProzaLibre-Bold text-yellow third",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "1"
                                })
                            })
                        }) : "",
                        apearZero ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-100 text-ProzaLibre-Bold text-yellow third",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.Tween, {
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_2__.SplitChars, {
                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            display: "inline-block"
                                        }
                                    }),
                                    children: "0"
                                })
                            })
                        }) : ""
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compteur);


/***/ })

};
;