import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import useSound from 'use-sound';

const Choice = () => {
  const soundUrl = '/sounds/button1.wav';

  const [play, { stop }] = useSound(soundUrl, { volume: 0.4 });
  const onClickLaunchSound = () => {
    play();
  };
  return (
    <>
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
              <Link
                href={'/create-party'}
                className={'btn-reset btn-yellow-plain'}
                onClick={(e) => onClickLaunchSound()}
              >
                Create a party
              </Link>
              <Link
                href={'/join-party'}
                className={'btn-reset btn-yellow-plain'}
                onClick={(e) => onClickLaunchSound()}
              >
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
