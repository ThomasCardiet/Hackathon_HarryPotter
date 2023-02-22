import { Router } from '@/router';
import Default from '@/components/Default';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import io from 'Socket.IO-client'
import { Api } from '../api'
let socket;

const Page = ({ path }) => {

  const route = Router.getRouteBySlug(path);

  const Component = dynamic(() => {
    return import(`../components/${route.name}/index.js`).catch(() => {
      return Default;
    });
  });

  // SOCKET STATES
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  // GET USERS FROM API
  useEffect(() => {
    Api.getAllUsers().then(data => {
      if(!data.status || data.status !== 400) {
        setUsers(data);
      }
    })
    setUser(Api.getLoggedUser())
  }, [])

  useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {})
  }

  return (<Component route={route} users={users} user={user} />)

}

export default Page;

export async function getStaticPaths() {
  return {
    paths: Router.getStaticPaths(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const path = Router.getPathByArray(params.slug);
  return {
    props: {
      path,
    },
  };
}