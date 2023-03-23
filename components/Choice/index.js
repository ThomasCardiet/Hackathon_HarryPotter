import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { SplitChars, Tween } from 'react-gsap';
import UserBadge from '../UserBadge/UserBadge';

const Choice = ({ setUser, user }) => {
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
        <section className={'choice'}>
          <aside className={'choice-container'}>
            <div className="choice-container-title">
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
                    Fais ton choix
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
                    Fais ton choix
                  </SplitChars>
                </Tween>
              </h1>
            </div>
            <UserBadge user={user} setUser={setUser} />
            <div className={'choice-container-buttons'}>
              <Link
                href={'/create-party'}
                className={'btn-reset btn-yellow'}
                onClick={(e) => onClickLaunchSound()}
              >
                Creer une partie
              </Link>
              <Link
                href={Router.getRoutes().JOIN_PARTY.slug}
                className={'btn-reset btn-yellow'}
                onClick={(e) => onClickLaunchSound()}
              >
                Rejoindre une partie
              </Link>
            </div>
            <div className={'choice-container-buttons'}>
              <Link
                href={Router.getRoutes().LIST_PARTY.slug}
                className={'btn-reset btn-green'}
                onClick={(e) => onClickLaunchSound()}
              >
                Vos parties
              </Link>
              <Link
                href={Router.getRoutes().STATS.slug}
                className={'btn-reset btn-green'}
                onClick={(e) => onClickLaunchSound()}
              >
                Statistiques
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Choice;
