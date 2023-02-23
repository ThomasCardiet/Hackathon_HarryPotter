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
  const [winner, setWinner] = useState(null);
  const [room, setRoom] = useState(null);

  // GET USER FROM API
  useEffect(() => {
    // REDIRECT NOT LOGGED
    if (!Api.isLoggedUser()) router.push(Router.getRoutes().LOGIN.slug);
    setUser(Api.getLoggedUser());
    setWinner(Api.getLoggedUser())
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
      if (
        room.started &&
        !room.users.find((roomUser) => roomUser.id === Api.getLoggedUser().id)
      )
        return router.push(Router.getRoutes().CHOICE.slug);
      setRoom(room);
    });

    socket.on('sendWinner', ({ rId, winner }) => {
      if (parseInt(roomId) === parseInt(rId) && winner) {
        setWinner(winner);
      }
    });
  };

  const getRoom = () => {
    if (socket && roomId) {
      socket.emit('getRoomById', roomId);
    }
  };

  const stopGame = () => {
    if (socket && roomId && user) {
      socket.emit('stopGame', { roomId, winner: user });
      
    }
  };

  useEffect(() => {
    getRoom();
  }, [socket, roomId]);

  if (!user || !room) return <Waiting />;

  return <Party user={user} stopGame={stopGame} winner={winner} />;
};

export default PlayParty;
