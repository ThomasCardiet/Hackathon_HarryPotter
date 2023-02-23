import { Party } from '@/components/Party';
import { useRouter } from 'next/router';
import { Waiting } from '@/components/Waiting';
import React, { useEffect, useState } from 'react';
import { Api } from '@/api';
import io from 'Socket.IO-client';
import { Router } from '@/router';

const PlayParty = () => {
  const router = useRouter();
  const { roomId } = router.query;

  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState(null);

  // GET USER FROM API
  useEffect(() => {
    // REDIRECT NOT LOGGED
    if (!Api.isLoggedUser()) router.push(Router.getRoutes().LOGIN.slug);
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

    // SET ROOM
    socket.on('setRoom', ({ room }) => {
      setRoom(room);
    });
  };

  const getRoom = () => {
    if (socket && roomId) {
      socket.emit('getRoomById', roomId);
    }
  };

  useEffect(() => {
    getRoom();
  }, [socket, roomId]);

  console.log(room);

  if (!user || !room) return <Waiting />;

  return <Party user={user} />;
};

export default PlayParty;
