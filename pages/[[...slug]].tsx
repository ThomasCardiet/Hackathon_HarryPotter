import { Router } from '@/router';
import Default from '@/components/Default';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import io from 'Socket.IO-client'
import { Api } from '../api'
import Head from 'next/head';
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

  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component route={route} users={users} user={user} setUser={setUser} />
    </>
  )

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