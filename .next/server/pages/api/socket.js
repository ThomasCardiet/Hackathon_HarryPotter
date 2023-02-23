"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 4681:
/***/ ((module) => {

module.exports = import("Socket.IO");;

/***/ }),

/***/ 7966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Socket_IO__WEBPACK_IMPORTED_MODULE_0__]);
Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

let rooms = [];
const SocketHandler = (req, res)=>{
    if (res.socket.server.io) {
        console.log("Socket is already running");
    } else {
        console.log("Socket is initializing");
        const io = new Socket_IO__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server, {
            cors: {
                origin: "*",
                allowedHeaders: [
                    "Authorization"
                ]
            }
        });
        res.socket.server.io = io;
        io.on("connection", (socket)=>{
            // CREATE PARTY
            socket.on("createParty", (user)=>{
                const room = createRoom(user);
                rooms.push(room);
                socket.emit("redirectRoom", {
                    user,
                    room
                });
            });
            // GET ROOM BY ID
            socket.on("getRoomById", (roomId)=>{
                const room = rooms.find((room)=>parseInt(room.id) === parseInt(roomId));
                if (!room) return;
                socket.emit("setRoom", {
                    room
                });
            });
            // ADD USER TO ROOM
            socket.on("addUserToRoom", ({ user , roomId  })=>{
                const room = rooms.find((room)=>parseInt(room.id) === parseInt(roomId));
                if (!room || room.users.find((roomUser)=>parseInt(roomUser.id) === parseInt(user.id))) return;
                rooms = rooms.filter((r)=>r.id !== roomId);
                const users = room.users;
                users.push(user);
                const newRoom = {
                    ...room,
                    users
                };
                rooms.push(newRoom);
                console.log("updateRoom sent");
                socket.broadcast.emit("updateRoom", {
                    newRoom
                });
                socket.emit("updateRoom", {
                    newRoom
                });
            });
            // START GAME
            socket.on("startGame", (roomId)=>{
                const room = rooms.find((room)=>parseInt(room.id) === parseInt(roomId));
                if (!room || room.started) return;
                rooms = rooms.filter((r)=>r.id !== parseInt(roomId));
                const newRoom = {
                    ...room,
                    started: true
                };
                console.log("StartRoom sent");
                if (!rooms.find((r)=>parseInt(r.id) === parseInt(roomId))) {
                    rooms.push(newRoom);
                }
                socket.broadcast.emit("redirectToParty", roomId);
                socket.emit("redirectToParty", roomId);
            });
            // STOP GAME
            socket.on("stopGame", ({ roomId , winner  })=>{
                console.log("Gamed Stopped");
                updateRoom(roomId, {
                    finished: true,
                    winner: winner
                });
                console.log(rooms);
                socket.broadcast.emit("sendWinner", {
                    rId: roomId,
                    winner
                });
                socket.emit("sendWinner", {
                    rId: roomId,
                    winner
                });
            });
        });
    }
    res.end();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);
// CREATE ROOM
const createRoom = (owner)=>{
    const room = {
        id: rooms.length,
        owner,
        users: [
            owner
        ],
        started: false,
        finished: false,
        winner: null
    };
    return room;
};
const updateRoom = (roomId, params)=>{
    const room = rooms.find((room)=>parseInt(room.id) === parseInt(roomId));
    if (!room) return;
    rooms = rooms.filter((r)=>r.id !== parseInt(roomId));
    const newRoom = {
        ...room,
        ...params
    };
    console.log("StartRoom sent");
    if (!rooms.find((r)=>parseInt(r.id) === parseInt(roomId))) {
        rooms.push(newRoom);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7966));
module.exports = __webpack_exports__;

})();