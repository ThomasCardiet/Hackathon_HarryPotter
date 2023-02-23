"use strict";
exports.id = 149;
exports.ids = [149,298];
exports.modules = {

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DraggableIngredient": () => (/* binding */ DraggableIngredient)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-draggable"
var external_react_draggable_ = __webpack_require__(964);
var external_react_draggable_default = /*#__PURE__*/__webpack_require__.n(external_react_draggable_);
// EXTERNAL MODULE: ./entities/Ingredient.js
var Ingredient = __webpack_require__(6685);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Icon/index.js + 1 modules
var Icon = __webpack_require__(4298);
;// CONCATENATED MODULE: ./helpers/dropBox.js
const DEFAULT_POSITION = {
    x: 0,
    y: 0
};
// VERIFY IF IS ON DROPBOX ELEMENT
const isOnDropBox = (el, dropBoxOffsets)=>{
    if (!dropBoxOffsets) return false;
    const position = {
        x: el.getBoundingClientRect().left + parseInt(getComputedStyle(el).width) / 2,
        y: el.getBoundingClientRect().top + parseInt(getComputedStyle(el).height) / 2
    };
    return position.x >= dropBoxOffsets.x.min && position.x <= dropBoxOffsets.x.max && position.y >= dropBoxOffsets.y.min && position.y <= dropBoxOffsets.y.max;
};

// EXTERNAL MODULE: external "react-parallax-tilt"
var external_react_parallax_tilt_ = __webpack_require__(3124);
var external_react_parallax_tilt_default = /*#__PURE__*/__webpack_require__.n(external_react_parallax_tilt_);
;// CONCATENATED MODULE: ./components/DraggableIngredient/index.js








/**
 * @param {Ingredient} ingredient
 */ const DraggableIngredient = ({ ingredient , dropBoxOffsets , dropIngredient  })=>{
    // REFS
    const nodeRef = (0,external_react_.useRef)(null);
    const draggerRef = (0,external_react_.useRef)(null);
    // POSITIONS
    const [dragPosition, setDragPosition] = (0,external_react_.useState)(null);
    // DRAG STATES
    const [isDragging, setIsDragging] = (0,external_react_.useState)(false);
    const [isDroppable, setIsDroppable] = (0,external_react_.useState)(false);
    // RESET DRAGGING ELEMENT POSITION
    const resetDrag = (0,external_react_.useCallback)(()=>{
        var _draggerRef_current;
        setDragPosition(DEFAULT_POSITION);
        (_draggerRef_current = draggerRef.current) === null || _draggerRef_current === void 0 ? void 0 : _draggerRef_current.setState(DEFAULT_POSITION);
    }, [
        setDragPosition,
        draggerRef
    ]);
    // CALL ON ELEMENT START DRAGGING
    const handleStart = ()=>{
        setIsDragging(true);
    };
    // CALL ON ELEMENT DRAG
    const handleDrag = (e, data)=>{
        setIsDroppable(isOnDropBox(data.node, dropBoxOffsets));
    };
    // CALL ON ELELEMEN STOP DRAGGING
    const handleStop = (e, data)=>{
        setIsDragging(false);
        if (isDroppable) dropIngredient(ingredient);
        setIsDroppable(false);
        resetDrag();
    };
    (0,external_react_.useEffect)(()=>{
        if (isDragging) {
            setTiltMaxAngleX(0);
            setTiltMaxAngleY(0);
            setScale(1);
        } else {
            setTiltMaxAngleX(40);
            setTiltMaxAngleY(40);
            setScale(1.2);
        }
    }, [
        isDragging
    ]);
    const [scale, setScale] = (0,external_react_.useState)(1.2);
    const [tiltMaxAngleX, setTiltMaxAngleX] = (0,external_react_.useState)(40);
    const [tiltMaxAngleY, setTiltMaxAngleY] = (0,external_react_.useState)(40);
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_parallax_tilt_default()), {
        reset: true,
        tiltReverse: true,
        glareEnable: true,
        glareBorderRadius: "100px",
        glareReverse: true,
        glareColor: "#FFF9F0",
        scale: scale,
        transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
        tiltMaxAngleX: tiltMaxAngleX,
        tiltMaxAngleY: tiltMaxAngleY,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_draggable_default()), {
            onStart: handleStart,
            onDrag: handleDrag,
            onStop: handleStop,
            nodeRef: nodeRef,
            ref: draggerRef,
            position: dragPosition,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: nodeRef,
                className: external_classnames_default()("draggable-ingredient", {
                    drag: isDragging,
                    droppable: isDroppable,
                    "not-droppable": !isDroppable && isDragging
                }),
                children: [
                    ingredient.getImgComponent(),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "draggable-ingredient__icon",
                        children: Icon.ICONS.PLUS
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 4298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ICONS": () => (/* binding */ ICONS)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Icon/icons/plus.js


/* harmony default export */ const plus = (/*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    })
}));

;// CONCATENATED MODULE: ./components/Icon/index.js

const ICONS = {
    PLUS: plus
};


/***/ })

};
;