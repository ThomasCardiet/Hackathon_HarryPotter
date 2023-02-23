import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { SplitChars, Tween } from 'react-gsap';
import UserBadge from '../UserBadge/UserBadge';

const JoinParty = ({ setUser, user }) => {
  const router = useRouter();

  const soundUrl = '/sounds/button1.wav';

  const [inputRoomId, setInputRoomId] = useState(0);

  const [play, { stop }] = useSound(soundUrl, { volume: 0.4 });
  const onClickLaunchSound = () => {
    play();
  };

  useEffect(() => {
    // REDIRECT IF NOT LOGGED
    if (!Api.isLoggedUser()) router.push(Router.getRoutes().LOGIN.slug);
  }, []);
  return (
    <>
      <main>
        <section className={'join'}>
          <aside className={'join-container'}>
            <div className={'join-container-top'}>
              <Link href={'/choice'} className={'join-container-top-back'}>
                <img src={'images/icons/arrow-left.svg'} alt={'back'} />
              </Link>
              <div className={'join-container-top-title'}>
                <h3 className={'text-50 text-Harry text-yellow'}>
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
                      Rejoins une partie
                    </SplitChars>
                  </Tween>
                </h3>
                <h3 className={'text-50 text-Harry text-yellow text-blur'}>
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
                      Rejoins une partie
                    </SplitChars>
                  </Tween>
                </h3>
              </div>
              <UserBadge user={user} setUser={setUser} />
            </div>
            <div className={'join-container-form'}>
              <form>
                <div className={'join-container-form-input'}>
                  <label
                    htmlFor={'party-code'}
                    className={'text-20 text-ProzaLibre-SemiBold text-white'}
                  >
                    Code la partie :
                  </label>
                  <input
                    type={'number'}
                    id={'party-code'}
                    className={'text-20 text-ProzaLibre-SemiBold text-white'}
                    value={inputRoomId}
                    onChange={(e) => setInputRoomId(e.target.value)}
                    required
                  />
                </div>
                <Link
                  href={`create-party/${inputRoomId}`}
                  className={'btn-reset btn-yellow'}
                  onClick={(e) => onClickLaunchSound()}
                >
                  Join
                </Link>
              </form>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default JoinParty;
