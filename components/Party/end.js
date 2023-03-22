import React, { useEffect, useState } from 'react';
import { SplitChars, Tween } from 'react-gsap';
import Link from 'next/link';
import { Api } from '../../api';

export const PartyEnd = ({ winner, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  useEffect(() => {
    room.users.forEach((user) => {
      Api.getUser(user.id).then((user) => {
        setRoomUsers((prev) => [...prev, user]);
      });
    });
  }, []);

  return (
    <section className={'success ' + winner.house.name}>
      <aside className={'success-container'}>
        <div className={'success-container-title'}>
          <h1 className={'text-50 text-Harry text-yellow'}>
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
                Victoire de la maison
              </SplitChars>
            </Tween>
          </h1>
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
                {winner.house.name}
              </SplitChars>
            </Tween>
          </h1>
        </div>
        <div className={'success-container-logo'}>
          <img src={'/images/' + winner.house.name + '.png'} />
        </div>

        {winner && (
          <p
            className={
              'success-container-logo-name text-30 text-ProzaLibre-SemiBold text-yellow'
            }
          >
            Le joueur {winner.username} a gagné !
          </p>
        )}
        {room && (
          <ul className={'success-container-content'}>
            {roomUsers.map((item, index) => {
              return (
                <li
                  key={index}
                  className={'text-30 text-white text-ProzaLibre-Regular'}
                >
                  <img src={'/images/' + item.house.name + '.png'} />
                  {item.username} - {item.points} Points
                </li>
              );
            })}
          </ul>
        )}
        <div className={'success-container-button'}>
          <Link href={'/choice'} className={'btn-reset btn-yellow'}>
            Rejouer
          </Link>
        </div>
      </aside>
    </section>
  );
};
