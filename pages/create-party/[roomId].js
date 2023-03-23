import { Api } from '@/api';
import { ViewRoom } from '@/components/ViewRoom';
import { Waiting } from '@/components/Waiting';
import { useRouter } from 'next/router';
import { Router } from '@/router';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

const MAX_USER_PER_ROOM = 2;

const Create = () => {
  const router = useRouter();
  const { roomId } = router.query;

  // SOCKET STATES
  const [user, setUser] = useState(false);
  const [room, setRoom] = useState(null);
  const [partyCanStart, setPartyCanStart] = useState(false);
  const [socket, setSocket] = useState(null);

  // GET USERS FROM API
  useEffect(() => {
    Api.getLoggedUser().then((data) => {
      if (data && data.user) setUser(data.user);
      else router.push(Router.getRoutes().HOME.slug);
    });
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
      if (room.started) router.push(`/party/${roomId}`);
      setRoom(room);
      if (room.users.length >= MAX_USER_PER_ROOM) setPartyCanStart(true);
    });

    // UPDATE ROOM
    socket.on('updateRoom', ({ newRoom }) => {
      if (newRoom.id === parseInt(roomId)) {
        setRoom(newRoom);
        if (newRoom.users.length >= MAX_USER_PER_ROOM) setPartyCanStart(true);
      }
    });

    // REDIRECT TO PARTY
    socket.on('redirectToParty', (id) => {
      if (parseInt(roomId) === parseInt(id)) router.push(`/party/${roomId}`);
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
    if (room && user && Api.isLoggedUser()) {
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
  const startGame = async (params) => {
    if (socket) socket.emit('startGame', { roomId, params });
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
