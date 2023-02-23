import { Api } from '@/api';
import { ViewRoom } from '@/components/ViewRoom';
import { Waiting } from '@/components/Waiting';
import { useRouter } from 'next/router';
import { Router } from '@/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import io from 'Socket.IO-client';

const MAX_USER_PER_ROOM = 2;

const Create = () => {
  const router = useRouter();
  const { roomId } = router.query;

  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [partyCanStart, setPartyCanStart] = useState(false);
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

    // SET ROOM
    socket.on('setRoom', ({ room }) => {
      setRoom(room);
    });

    // UPDATE ROOM
    socket.on('updateRoom', ({ newRoom }) => {
      if (newRoom.id === parseInt(roomId)) {
        setRoom(newRoom);
        if (newRoom.users.length >= MAX_USER_PER_ROOM) setPartyCanStart(true);
      }
    });

    // REDIRECT TO PARTY
    socket.on('redirectToParty', (roomId) => {
      if (room && room.id === parseInt(roomId)) router.push(`/party/${roomId}`);
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

  useEffect(() => {
    if (room && user) {
      if (room.users.length <= MAX_USER_PER_ROOM) {
        if (room.owner.id !== user.id && socket) {
          socket.emit('addUserToRoom', { user, roomId });
          getRoom();
        }
      } else if (
        !room.users.find(
          (roomUser) => parseInt(roomUser.id) === parseInt(user.id)
        )
      ) {
        toast.error(
          `Le nombre maximum de joueurs par partie est ${MAX_USER_PER_ROOM}`,
          {
            icon: '🧙',
            theme: 'light',
          }
        );
        router.push(Router.getRoutes().CHOICE.slug);
      }
    }
  }, [room, user, socket]);

  // START GAME
  const startGame = () => {
    if (socket) socket.emit('startGame', roomId);
  };

  if (!roomId || !user || !room) return <Waiting />;

  return (
    <ViewRoom
      setUser={setUser}
      user={user}
      socket={socket}
      room={room}
      partyCanStart={partyCanStart}
      startGame={startGame}
    />
  );
};

export default Create;
