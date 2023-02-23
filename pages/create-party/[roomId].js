import { Api } from '@/api';
import { CreateParty } from '@/components/CreateParty';
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

    //UPDATE ROOM
    socket.on('updateRoom', ({ newRoom }) => {
      if (newRoom.id === parseInt(roomId)) setRoom(newRoom);
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

  if (!roomId || !user || !room) return <Waiting />;

  return (
    <CreateParty setUser={setUser} user={user} socket={socket} room={room} />
  );
};

export default Create;
