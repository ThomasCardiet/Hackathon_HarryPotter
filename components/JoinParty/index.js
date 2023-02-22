import React from 'react';
import Link from 'next/link';
import useSound from 'use-sound';

const JoinParty = () => {
  const soundUrl = '/sounds/button1.wav';

  const [play, { stop }] = useSound(soundUrl, { volume: 0.4 });
  const onClickLaunchSound = () => {
    play();
  };
  return (
    <>
      <main>
        <section className={'join'}>
          <aside className={'join-container'}>
            <Link href={'/choice'} className={'join-container-back'}>
              <img src={'images/icons/arrow-left.svg'} alt={'back'} />
            </Link>
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
                <a
                  type={'submit'}
                  className={'btn-reset btn-white-clear'}
                  onClick={(e) => onClickLaunchSound()}
                >
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
