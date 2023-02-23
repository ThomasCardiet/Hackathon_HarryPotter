"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 3695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const LOCAL_STORAGE_AUTH = "auth";
class Api {
    static path = "/";
    static routes = {
        GET_USERS: "users",
        AUTH_LOGIN: "auth/log-in",
        AUTH_REGISTER: "auth/register"
    };
    static getPath() {
        return this.path;
    }
    static getRoutes() {
        return this.routes;
    }
    /**
   * CREATE REQUEST HEADERS
   *
   * @param {Object} params
   *
   * @return {Object}
   */ static getHeaders(params = {}) {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        };
        Object.values(params).forEach(([key, value])=>{
            headers[key] = value;
        });
        return headers;
    }
    /**
   * FETCH API
   *
   * @param {String} path
   * @param {Object} body
   * @param {String} method
   *
   * @return {Promise<Object>}
   */ static async fetchApi(path, body = {}, method = "GET") {
        const request = {
            method,
            headers: this.getHeaders()
        };
        if (Object.keys(body).length > 0) request.body = JSON.stringify(body);
        return await fetch(`${"https://hp-api-iim.azurewebsites.net"}${this.getPath()}${path}`, request).then((response)=>response.json()).then((json)=>{
            return json;
        }).catch((error)=>{
            return {
                status: 400,
                message: error.message
            };
        });
    }
    /**
   * GET ALL USERS
   */ static async getAllUsers() {
        return await this.fetchApi(this.getRoutes().GET_USERS);
    }
    /**
   * LOGIN USER
   *
   * @param {Object} credentials
   */ static async loginUser(credentials) {
        if (this.isLoggedUser()) return {
            statusCode: 500,
            message: "Vous \xeates d\xe9j\xe0 connect\xe9"
        };
        return await this.fetchApi(this.getRoutes().AUTH_LOGIN, credentials, "POST");
    }
    /**
   * LOGOUT USER
   *
   * @param {Object} credentials
   */ static LogoutUser(setState = null) {
        if (!this.isLoggedUser()) {
            return {
                statusCode: 400,
                message: "Vous n'\xeates pas connect\xe9"
            };
        }
        this.unStoreUser();
        if (setState) setState(null);
        return {
            statusCode: 200,
            message: "Vous avez \xe9t\xe9 d\xe9connect\xe9"
        };
    }
    // AUTH
    /**
   * STORE USER
   *
   */ static storeUser(credentials) {
        localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(credentials));
    }
    /**
   * UNSTORE USER
   *
   */ static unStoreUser() {
        localStorage.removeItem(LOCAL_STORAGE_AUTH);
    }
    /**
   * EXIST LOGGED USER
   *
   */ static isLoggedUser() {
        return localStorage.getItem(LOCAL_STORAGE_AUTH) ? true : false;
    }
    /**
   * GET CURRENT LOGGED USER
   *
   */ static getLoggedUser() {
        if (!this.isLoggedUser()) return null;
        const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH));
        if (!local.user) return null;
        return local.user;
    }
    static postNewGame = async (data)=>{
        if (!this.isLoggedUser()) return null;
        const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH));
        const request = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://hp-api-iim.azurewebsites.net/matches/start", data, {
            headers: {
                Authorization: "Bearer " + local.token,
                "Content-Type": "application/json"
            }
        });
        console.log(request);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Waiting": () => (/* binding */ Waiting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);



const Waiting = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "waiting-block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.Oval, {
            height: 100,
            width: 100,
            color: "#F9C749",
            wrapperStyle: {},
            wrapperClass: "",
            visible: true,
            ariaLabel: "oval-loading",
            secondaryColor: "##FFEBB8",
            strokeWidth: 2,
            strokeWidthSecondary: 2
        })
    });
};


/***/ })

};
;