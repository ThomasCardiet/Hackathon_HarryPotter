import { Server } from 'Socket.IO';
import {Api} from "../../api";

let rooms = [];

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      // CREATE PARTY
      socket.on('createParty', (user) => {
        const room = createRoom(user);
        rooms.push(room);
        socket.emit('redirectRoom', { user, room });
      });

      // GET ROOM BY ID
      socket.on('getRoomById', (roomId) => {
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room) return;

        socket.emit('setRoom', { room });
      });

      // ADD USER TO ROOM
      socket.on('addUserToRoom', ({ user, roomId }) => {
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (
          !room ||
          room.users.find(
            (roomUser) => parseInt(roomUser.id) === parseInt(user.id)
          )
        )
          return;

        rooms = rooms.filter((r) => r.id !== roomId);
        const users = room.users;
        users.push(user);
        const newRoom = {
          ...room,
          users,
        };
        rooms.push(newRoom);

        console.log('updateRoom sent');

        socket.broadcast.emit('updateRoom', { newRoom });
        socket.emit('updateRoom', { newRoom });
      });

      // START GAME
      socket.on('startGame', (roomId) => {
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room || room.started) return;

        rooms = rooms.filter((r) => r.id !== parseInt(roomId));
  
        let usersId = []
        room.users.map((item)=>{
          usersId.push(item.id)
        })
  
        let data = {
          game :"Harry Potion",
          userIds : usersId,
          type : "1v1"
        }
        let idGame = 0;
        Api.postNewGame(data).then(res => {
          console.log(res.data.id)
          idGame = res.data.id
        })
        
        const newRoom = {
          ...room,
          started: true,
          idGame
        };
        console.log('StartRoom sent');

        if (!rooms.find((r) => parseInt(r.id) === parseInt(roomId))) {
          rooms.push(newRoom);
        }

        socket.broadcast.emit('redirectToParty', roomId);
        socket.emit('redirectToParty', roomId);
      });

      // STOP GAME
      socket.on('stopGame', ({ roomId, winner }) => {
        console.log('Gamed Stopped');
        updateRoom(roomId, {
          finished: true,
          winner: winner,
        });

        console.log(rooms);
        console.log('stopGame', roomId, winner);
  
        const room = rooms.find(
            (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room) return;
        
        let data = {
          gameId: room.idGame,
          userId : room.winner.id
        }
        
        Api.postNewGameEnd(data)
        
        socket.broadcast.emit('sendWinner', { rId: roomId, winner });
        socket.emit('sendWinner', { rId: roomId, winner });
        
      });
    });
  }
  res.end();
};

export default SocketHandler;

// CREATE ROOM
const createRoom = (owner) => {
  const room = {
    id: rooms.length,
    owner,
    users: [owner],
    started: false,
    finished: false,
    winner: null,
  };

  return room;
};

const updateRoom = (roomId, params) => {
  const room = rooms.find((room) => parseInt(room.id) === parseInt(roomId));
  if (!room) return;

  rooms = rooms.filter((r) => r.id !== parseInt(roomId));
  const newRoom = {
    ...room,
    ...params,
  };
  console.log('StartRoom sent');

  if (!rooms.find((r) => parseInt(r.id) === parseInt(roomId))) {
    rooms.push(newRoom);
  }
};
