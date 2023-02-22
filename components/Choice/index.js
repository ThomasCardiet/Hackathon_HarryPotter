import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const Choice = () => {
  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className={'choice'}>
          <aside className={'choice-container'}>
            <div className={'choice-container-user'}>
              <div className={'choice-container-user-image'}>
                <img src={'images/houses/serpentard.png'} alt={'house'} />
              </div>

              <h2 className={'text-20 text-ProzaLibre-SemiBold text-white'}>
                Axel
              </h2>
            </div>
            <div className={'choice-container-title'}>
              <h1 className={'text-50 text-ProzaLibre-SemiBold text-white'}>
                Make your choice
              </h1>
            </div>
            <div className={'choice-container-button'}>
              <Link href={'/create'} className={'btn-reset btn-yellow'}>
                Create a party
              </Link>
              <Link href={'/join'} className={'btn-reset btn-yellow'}>
                Join a party
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Choice;
