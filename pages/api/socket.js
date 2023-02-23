import { Server } from 'Socket.IO';

const rooms = [];

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
        socket.emit('setRoom', { room });
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
  };

  return room;
};
