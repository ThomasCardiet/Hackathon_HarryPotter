import { Server } from 'Socket.IO';

let rooms = [];

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('createParty', (user) => {
        const room = createRoom(user);
        rooms.push(room);
        socket.emit('redirectRoom', { user, room });
      });

      socket.on('getRoomById', (roomId) => {
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room) return;

        console.log(room, rooms);

        socket.emit('setRoom', { room });
      });

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

      socket.on('startGame', (roomId) => {
        const room = rooms.find(
          (room) => parseInt(room.id) === parseInt(roomId)
        );
        if (!room || room.started) return;

        rooms = rooms.filter((r) => r.id !== roomId);
        const newRoom = {
          ...room,
          started: true,
        };
        console.log('ROOMS LENGHT 1', rooms);
        rooms.push(newRoom);
        console.log('ROOMS LENGHT 2', rooms);

        console.log('StartRoom sent');

        socket.broadcast.emit('redirectToParty', roomId);
        socket.emit('redirectToParty', roomId);
      });
    });
  }
  res.end();
};

export default SocketHandler;

const createRoom = (owner) => {
  const room = {
    id: rooms.length,
    owner,
    users: [owner],
    started: false,
  };

  return room;
};
