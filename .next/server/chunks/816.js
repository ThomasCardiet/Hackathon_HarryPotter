"use strict";
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 4816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_Ingredient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1196);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Socket_IO_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5970);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4339);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Socket_IO_client__WEBPACK_IMPORTED_MODULE_7__]);
Socket_IO_client__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









let socket;
const Home = ({ user  })=>{
    const dropBlockRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const ingredients = (0,_entities_Ingredient__WEBPACK_IMPORTED_MODULE_2__/* .getIngredients */ .AE)();
    const socketInitializer = async ()=>{
        await fetch("/api/socket");
        socket = (0,Socket_IO_client__WEBPACK_IMPORTED_MODULE_7__["default"])();
        socket.on("connect", ()=>{});
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        socketInitializer();
    }, []);
    const soundUrl = "Booum.mp3";
    const soundUrl2 = "rain-and-thunder-113218.mp3";
    const [play, { stop  }] = use_sound__WEBPACK_IMPORTED_MODULE_4___default()(soundUrl, {
        volume: 1
    });
    const [play2, { stop2  }] = use_sound__WEBPACK_IMPORTED_MODULE_4___default()(soundUrl2, {
        volume: 0.6
    });
    const onClickLaunchSound = ()=>{
        play();
        play2();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "home",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "home-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "home-container-title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-100 text-Harry text-yellow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_5__.Tween, {
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_5__.SplitChars, {
                                        wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                display: "inline-block"
                                            }
                                        }),
                                        children: "Harry potion"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-100 text-Harry text-yellow text-blur",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_5__.Tween, {
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_5__.SplitChars, {
                                        wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                display: "inline-block"
                                            }
                                        }),
                                        children: "Harry potion"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "home-container-description",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-15 text-white text-ProzaLibre-Regular",
                            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur deleniti ea enim, eos in inventore molestiae nihil officia perferendis."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "home-container-button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            onClick: ()=>onClickLaunchSound(),
                            href: user ? _router__WEBPACK_IMPORTED_MODULE_8__/* .Router.getRoutes */ .F.getRoutes().CHOICE.slug : _router__WEBPACK_IMPORTED_MODULE_8__/* .Router.getRoutes */ .F.getRoutes().LOGIN.slug,
                            className: "btn-reset btn-yellow",
                            children: "Commencer"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;