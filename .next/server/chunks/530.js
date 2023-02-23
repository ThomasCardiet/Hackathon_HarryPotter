"use strict";
exports.id = 530;
exports.ids = [530,468];
exports.modules = {

/***/ 2530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropBlock": () => (/* binding */ DropBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5468);



const DropBlock = ({ cauldron , setDropBoxOffsets  })=>{
    const dropBlockRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [dropBoxOffsets] = (0,_components_Hooks__WEBPACK_IMPORTED_MODULE_2__.usePosition)(dropBlockRef);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDropBoxOffsets(dropBoxOffsets);
    }, [
        dropBoxOffsets
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "drop-block",
        ref: dropBlockRef,
        children: cauldron.getImgComponent()
    });
};


/***/ }),

/***/ 5468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePosition": () => (/* binding */ usePosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const usePosition = (ref)=>{
    const [dropBoxOffsets, setDropBoxOffsets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const element = ref.current;
        if (element) {
            const dropBoxPosition = {
                top: element.getBoundingClientRect().top,
                left: element.getBoundingClientRect().left
            };
            const { width , height  } = getComputedStyle(element);
            setDropBoxOffsets({
                x: {
                    min: dropBoxPosition.left,
                    max: dropBoxPosition.left + parseInt(width)
                },
                y: {
                    min: dropBoxPosition.top,
                    max: dropBoxPosition.top + parseInt(height)
                }
            });
        }
    }, [
        ref
    ]);
    return [
        dropBoxOffsets,
        setDropBoxOffsets
    ];
};


/***/ })

};
;