import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const JoinParty = () => {
  return (
    <>
      <Head>
        <title>Hackaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className={'join'}>
          <aside className={'join-container'}>
            <div className={'join-container-back'}>
              <Link href={'/choice'}>
                <img src={'images/icons/arrow-left.svg'} alt={'back'} />
              </Link>
            </div>
            <div className={'join-container-user'}>
              <div className={'join-container-user-image'}>
                <img src={'images/houses/serpentard.png'} alt={'house'} />
              </div>

              <h2 className={'text-20 text-ProzaLibre-SemiBold text-white'}>
                Axel
              </h2>
            </div>
            <div className={'join-container-title'}>
              <h1 className={'text-50 text-ProzaLibre-SemiBold text-white'}>
                Join a party
              </h1>
            </div>
            <div className={'join-container-form'}>
              <form>
                <div className={'join-container-form-input'}>
                  <label
                    htmlFor={'party-code'}
                    className={'text-20 text-ProzaLibre-SemiBold text-white'}
                  >
                    Party code :
                  </label>
                  <input
                    type={'text'}
                    id={'party-code'}
                    className={'text-20 text-ProzaLibre-SemiBold text-white'}
                  />
                </div>
                <a type={'submit'} className={'btn-reset btn-yellow-plain'}>
                  Join
                </a>
              </form>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default JoinParty;
