"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 9937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3695);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4339);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1196);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UserBadge_UserBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(321);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_4__, _UserBadge_UserBadge__WEBPACK_IMPORTED_MODULE_8__]);
([_api__WEBPACK_IMPORTED_MODULE_4__, _UserBadge_UserBadge__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const JoinParty = ({ setUser , user  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const soundUrl = "/sounds/button1.wav";
    const [inputRoomId, setInputRoomId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [play, { stop  }] = use_sound__WEBPACK_IMPORTED_MODULE_3___default()(soundUrl, {
        volume: 0.4
    });
    const onClickLaunchSound = ()=>{
        play();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // REDIRECT IF NOT LOGGED
        if (!_api__WEBPACK_IMPORTED_MODULE_4__/* .Api.isLoggedUser */ .V.isLoggedUser()) router.push(_router__WEBPACK_IMPORTED_MODULE_5__/* .Router.getRoutes */ .F.getRoutes().LOGIN.slug);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "join",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: "join-container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "join-container-top",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/choice",
                                    className: "join-container-top-back",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "images/icons/arrow-left.svg",
                                        alt: "back"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "join-container-top-title",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-50 text-Harry text-yellow",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_7__.Tween, {
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_7__.SplitChars, {
                                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: "inline-block"
                                                        }
                                                    }),
                                                    children: "Rejoins une partie"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-50 text-Harry text-yellow text-blur",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_7__.Tween, {
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gsap__WEBPACK_IMPORTED_MODULE_7__.SplitChars, {
                                                    wrapper: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            display: "inline-block"
                                                        }
                                                    }),
                                                    children: "Rejoins une partie"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserBadge_UserBadge__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    user: user,
                                    setUser: setUser
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "join-container-form",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "join-container-form-input",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "party-code",
                                                className: "text-20 text-ProzaLibre-SemiBold text-white",
                                                children: "Code la partie :"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                id: "party-code",
                                                className: "text-20 text-ProzaLibre-SemiBold text-white",
                                                value: inputRoomId,
                                                onChange: (e)=>setInputRoomId(e.target.value),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `create-party/${inputRoomId}`,
                                        className: "btn-reset btn-yellow",
                                        onClick: (e)=>onClickLaunchSound(),
                                        children: "Join"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinParty);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;