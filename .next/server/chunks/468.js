"use strict";
exports.id = 468;
exports.ids = [468];
exports.modules = {

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