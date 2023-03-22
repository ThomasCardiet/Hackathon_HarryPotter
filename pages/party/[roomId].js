import { Party } from '@/components/Party';
import { useRouter } from 'next/router';
import { Waiting } from '@/components/Waiting';
import React, { useContext, useEffect, useState } from 'react';
import { Api } from '@/api';
import io from 'socket.io-client';
import { Router } from '@/router';

const PlayParty = ({ gameId }) => {
  const router = useRouter();
  const { roomId } = router.query;

  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [winner, setWinner] = useState(null);
  const [room, setRoom] = useState(null);
  const [finished, setFinished] = useState(false);

  // GET USER FROM API
  useEffect(() => {
    // REDIRECT NOT LOGGED
    if (!Api.isLoggedUser()) router.push(Router.getRoutes().LOGIN.slug);
    Api.getLoggedUser().then((data) => {
      setUser(data.user);
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
      Api.getLoggedUser().then((data) => {
        if (
          room.started &&
          !room.users.find((roomUser) => roomUser.id === data.user?.id)
        )
          return router.push(Router.getRoutes().CHOICE.slug);
        setWinner(room.winner);
        setRoom(room);
      });
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

  const stopGame = async (isWinner) => {
    const againstUser = room.users.find((roomUser) => roomUser.id !== user.id);
    if (socket && roomId && user) {
      socket.emit('stopGame', {
        roomId,
        winner: isWinner ? user : againstUser,
      });
    }
  };

  useEffect(() => {
    getRoom();
  }, [socket, roomId]);

  if (!user || !room) return <Waiting />;

  return (
    <Party
      room={room}
      stopGame={stopGame}
      winner={winner}
      finished={finished}
      setFinished={setFinished}
    />
  );
};

export default PlayParty;
