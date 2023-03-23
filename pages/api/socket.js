import { Server } from 'socket.io';
import { Api } from '../../api';

let rooms = [];
const GAME_WIN_POINTS = 10;

const SocketHandler = (req, res) => {
  Api.getGames().then((res) => {
    setRooms(res);
  });
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server, {
      cors: {
        origin: '*',
        allowedHeaders: ['Authorization'],
      },
    });
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

        let usersId = [];

        //SEND API
        room.users.map((item) => {
          usersId.push(item.id);
        });

        let data = {
          userIds: usersId,
          roomId,
        };
        Api.postNewGame(data).then((response) => {
          console.log('start game: ', data);
          updateRoom(roomId, { gameId: response.data.id });
        });

        // ADD STARTED

        rooms = rooms.filter((r) => r.id !== parseInt(roomId));
        const newRoom = {
          ...room,
          started: true,
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
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room) return;

        console.log('stopGame', roomId, winner.username);
        updateRoom(roomId, {
          finished: true,
          winner: winner,
        });

        let data = {
          roomId: room.id,
          winnerId: winner.id,
          points: GAME_WIN_POINTS,
        };

        Api.postNewGameEnd(data).then((res) => {
          console.log('Sended To api');
        });

        socket.broadcast.emit('sendWinner', { rId: roomId, winner });
        socket.emit('sendWinner', { rId: roomId, winner });
      });
    });
  }
  res.end();
};

export default SocketHandler;

const getNextRoomId = () => {
  const sort = rooms.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return sort.length > 0 ? sort[0].id + 1 : 0;
};

const createRoom = (owner) => {
  const room = {
    id: getNextRoomId(),
    owner,
    users: [owner],
    started: false,
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

const setRooms = (array) => {
  array.forEach((room) => {
    rooms.push({
      id: room.roomId,
      finished: room.finished,
      users: room.players,
      started: true,
      winner: room.winner,
    });
  });
};
