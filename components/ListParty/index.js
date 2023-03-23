import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { SplitChars, Tween } from 'react-gsap';
import UserBadge from '../UserBadge/UserBadge';
import { useProps } from '../Hooks';
import Link from 'next/link';

const Choice = ({ setUser, user, props }) => {
  const [games, setGames] = useState([]);

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

  useEffect(() => {
    if (props.games && user) {
      setGames(
        props.games.filter((game) => {
          return (
            game.players.find((player) => player.id === user.id) &&
            game.finished
          );
        })
      );
    }
  }, [props, user]);

  return (
    <section className={'party-list'}>
      <aside className={'party-list-container'}>
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
        <ul className={'party-container-list'}>
          {games.map((game, index) => {
            return (
              <li key={index}>
                <span>Numéro de Room: {game.roomId}</span>
                <Link
                  href={`/party/${game.roomId}`}
                  className={'btn-reset btn-yellow'}
                  onClick={(e) => onClickLaunchSound()}
                >
                  Voir resultat
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
};

export default Choice;
