import { Waiting } from '@/components/Waiting';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Api } from '../../api';
import io from 'socket.io-client';

const CreateParty = () => {
  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const router = useRouter();

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
    socket.on('redirectRoom', ({ user, room }) => {
      router.push(`/create-party/${room.id}`);
    });
  };

  const createParty = () => {
    if (socket) {
      socket.emit('createParty', user);
    }
  };

  useEffect(() => {
    if (user) createParty();
  }, [socket, user]);

  return <Waiting />;
};

export default CreateParty;
