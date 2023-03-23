import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { SplitChars, Tween } from 'react-gsap';
import UserBadge from '../UserBadge/UserBadge';
import { ICONS } from '../Icon';
import { capitalizeFirstLetter } from '../../helpers/string';
import classNames from 'classnames';
import { INDICE_PARAMS } from '../Party/indices';
import { getPotions, NUMBER_GAME_POTIONS } from '../../entities/Potion';
import { DEFAULT_INIT_TIME_MINUTES } from '../CountDown';

export const ViewRoom = ({ setUser, user, room, partyCanStart, startGame }) => {
  const [params, setParams] = useState({
    timer: DEFAULT_INIT_TIME_MINUTES,
    potions: NUMBER_GAME_POTIONS,
    indices: INDICE_PARAMS.DEFAULT_QUANTITY,
  });

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
    <section className={'join'}>
      <aside className={'join-container'}>
        <div className={'join-container-top'}>
          <Link href={'/choice'} className={'join-container-top-back'}>
            <img src={'/images/icons/arrow-left.svg'} alt={'back'} />
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
          <div style={{ marginBottom: '20px' }} className={'room'}>
            <p className={'text-yellow text-15 text-ProzaLibre-Regular'}>
              {' '}
              Le numéro de la room : {room.id}
            </p>
          </div>
          {user.id === room.owner.id && (
            <div
              className={classNames('join-container-form-params', {
                odd: Object.keys(params).length % 2 !== 0,
              })}
            >
              {Object.entries(params).map(([key, value], index) => {
                return (
                  <div key={index}>
                    <label>
                      {capitalizeFirstLetter(key)}
                      {key === 'timer' ? ' (en minutes)' : ''}:
                    </label>
                    <input
                      min={key === 'indices' ? 0 : 1}
                      {...(key === 'potions'
                        ? { max: Object.keys(getPotions()).length }
                        : '')}
                      value={value}
                      type="number"
                      onChange={(e) => {
                        setParams({
                          ...params,
                          [key]: e.target.value,
                        });
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <p className="text-20 text-Harry text-yellow">Liste des joueurs:</p>
          <ul
            className="join-container-form-crown"
            style={{ marginTop: '10px' }}
          >
            {room.users.map((user, index) => (
              <li
                style={{ marginBottom: '10px' }}
                className="text-white text-ProzaLibre-Regular"
                key={index}
              >
                {user.id === room.owner.id && ICONS.CROWN} {user.username}
              </li>
            ))}
          </ul>
          {partyCanStart && user && user.id === room.owner.id && (
            <>
              <br />
              <button
                onClick={() => startGame(params)}
                className="btn-reset btn-yellow"
              >
                Commencer
              </button>
            </>
          )}
        </div>
      </aside>
    </section>
  );
};
