import { Api } from '@/api';
import { CreateParty } from '@/components/CreateParty';
import { Waiting } from '@/components/Waiting';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import io from 'Socket.IO-client';

const Create = () => {
  const router = useRouter();
  const { roomId } = router.query;

  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [socket, setSocket] = useState(null);

  // GET USERS FROM API
  useEffect(() => {
    setUser(Api.getLoggedUser());
  }, []);

  // SOCKETS
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    const socket = io();
    setSocket(socket);

    socket.on('connect', () => {});
    socket.on('setRoom', ({ room }) => {
      console.log('end', room);

      setRoom(room);
    });
  };

  const getRoom = () => {
    if (socket && roomId) {
      console.log('sent', roomId);
      socket.emit('getRoomById', roomId);
    }
  };

  useEffect(() => {
    getRoom();
  }, [socket, roomId]);

  console.log(room);

  if (!roomId || !user || !room) return <Waiting />;

  return (
    <CreateParty setUser={setUser} user={user} socket={socket} room={room} />
  );
};

export default Create;
