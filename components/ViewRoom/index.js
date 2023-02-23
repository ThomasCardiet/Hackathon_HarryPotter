import React, { useEffect } from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { SplitChars, Tween } from 'react-gsap';
import UserBadge from '../UserBadge/UserBadge';

export const ViewRoom = ({ setUser, user, room, partyCanStart, startGame }) => {
  const router = useRouter();

  const soundUrl = '/sounds/button1.wav';

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
                <img src={'../images/icons/arrow-left.svg'} alt={'back'} />
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
                      Infos de la Room
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
                      Infos de la Room
                    </SplitChars>
                  </Tween>
                </h3>
              </div>
              <UserBadge user={user} setUser={setUser} />
            </div>
            <div className={'join-container-form'}>
              <p className="text-20 text-white">
                Le créateur de la partie est: {room.owner.name}
              </p>
              <br />
              <p className="text-20 text-Harry text-yellow">
                Liste des joueurs:
              </p>
              <ul>
                {room.users.map((user, index) => (
                  <li className="text-white" key={index}>
                    {user.name}
                  </li>
                ))}
              </ul>
              {partyCanStart && user && user.id === room.owner.id && (
                <>
                  <br />
                  <button onClick={startGame} className="text-40 tex-yellow">
                    Commencer
                  </button>
                </>
              )}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};
