import { Router } from '@/router';
import Default from '@/components/Default';
import { Waiting } from '@/components/Waiting';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Api } from '../api';
import Head from 'next/head';
import React from 'react';
import { useProps } from '../components/Hooks';

const Page = ({ path }) => {
  const route = Router.getRouteBySlug(path);

  const Component = dynamic(() => {
    return import(`../components/${route.name}/index.js`).catch(() => {
      return Default;
    });
  });

  // SOCKET STATES
  const [user, setUser] = useState(null);
  const [props, setProps] = useProps(path);

  // GET USERS FROM API
  useEffect(() => {
    Api.getLoggedUser().then((data) => {
      if (data && data.user) setUser(data.user);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Hackaton HP - Harry Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component route={route} user={user} setUser={setUser} props={props} />
    </>
  );
};
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
