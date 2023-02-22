import Head from 'next/head';
import { getIngredients } from '../../entities/Ingredient';
import React, { useRef, useEffect } from 'react';
import useSound from 'use-sound';
import { SplitChars, Tween, Controls, PlayState } from 'react-gsap';
import Link from 'next/link';
import io from 'Socket.IO-client';
import { Router } from '../../router';
let socket;
const Home = ({user}) => {
  const dropBlockRef = useRef(null);
  const ingredients = getIngredients();
  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {});
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  const soundUrl = 'Booum.mp3';
  const soundUrl2 = 'rain-and-thunder-113218.mp3';
  
  const [play, { stop }] = useSound(
      soundUrl,
      { volume: 1 },
  );
  
  const [play2, { stop2 }] = useSound(
      soundUrl2,
      { volume: 0.6 },
  );
  const onClickLaunchSound = ()=>{
    play()
    play2()
  }
  
  return (
    <>
      <Head>
        <title>Hackaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className={'home'}>
          <aside className={'home-container'}>
            <div className={'home-container-title'}>
              <h1 className={'text-100 text-Harry text-yellow'}>
                <Tween
                  from={{ opacity: '0', scale: '0.4' }}
                  to={{ opacity: '100%', scale: '1' }}
                  ease="expo.out()"
                  duration={6}
                  stagger={0.1}
                >
                  <SplitChars
                    wrapper={<span style={{ display: 'inline-block' }} />}
                  >
                    Harry potion
                  </SplitChars>
                </Tween>
              </h1>
              <h1 className={'text-100 text-Harry text-yellow text-blur'}>
                <Tween
                  from={{ opacity: '0', scale: '0.4' }}
                  to={{ opacity: '100%', scale: '1' }}
                  ease="expo.out()"
                  duration={6}
                  stagger={0.1}
                >
                  <SplitChars
                    wrapper={<span style={{ display: 'inline-block' }} />}
                  >
                    Harry potion
                  </SplitChars>
                </Tween>
              </h1>
            </div>
            <div className={'home-container-description'}>
              <p className={'text-15 text-white text-ProzaLibre-Regular'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                consectetur deleniti ea enim, eos in inventore molestiae nihil
                officia perferendis.
              </p>
            </div>
            <div className={'home-container-button'}>
              <Link
                  onClick={()=>onClickLaunchSound()}
                href={
                  user
                    ? Router.getRoutes().CHOICE.slug
                    : Router.getRoutes().LOGIN.slug
                }
                className={'btn-reset btn-yellow'}
              >
                Commencer
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Home;
