"use strict";
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 3582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountDown": () => (/* binding */ CountDown),
/* harmony export */   "DEFAULT_INIT_TIME": () => (/* binding */ DEFAULT_INIT_TIME),
/* harmony export */   "MINUTE": () => (/* binding */ MINUTE),
/* harmony export */   "SECOND": () => (/* binding */ SECOND)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MINUTE = 60; // SECONDS
const SECOND = 1000; // MILLISECONDS
const DEFAULT_INIT_TIME = 5 * MINUTE; // 5 MINUTES
const formatTimer = (time)=>{
    const minutes = Math.trunc(time / MINUTE);
    const seconds = time - minutes * MINUTE;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
const CountDown = ({ time , setTime , setParentState =null , start =true  })=>{
    const [run, setRun] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(start);
    const [initTime, setInitTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(DEFAULT_INIT_TIME);
    const [timerInterval, setTimerInterval] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (run && timerInterval === null) {
            setInitTime(time);
            const interval = setInterval(()=>{
                setTime((prev)=>prev - 1);
            }, SECOND);
            setTimerInterval(interval);
        } else {
            clearInterval(timerInterval);
        }
        return ()=>clearInterval(timerInterval);
    }, [
        run
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (time <= 0) {
            setTime(0);
            setRun(false);
            if (setParentState) setParentState(true);
        }
    }, [
        time
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("count-down", {
            warning: time < initTime / 2 && time > initTime / 4,
            dangerous: time < initTime / 4
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: formatTimer(time)
        })
    });
};


/***/ })

};
;