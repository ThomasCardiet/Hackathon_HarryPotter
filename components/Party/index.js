import React, { useRef, useEffect, useState } from 'react';
import { DraggableIngredient } from '@/components/DraggableIngredient';
import { DropBlock } from '@/components/DropBlock';
import { getShuffledIngredients, Ingredient } from '@/entities/Ingredient';
import { getPartyPotions } from '@/entities/Potion';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SplitChars, Tween } from 'react-gsap';
import { CountDown, DEFAULT_INIT_TIME } from '../CountDown';
import { toast } from 'react-toastify';

const TIME_PENALITY = {
  INDICE: 20,
  WRONG_INGREDIENT: 5,
};

const INDICE_TIMEOUT = 3000;

export const Party = ({ user, stopGame, winner }) => {
  const router = useRouter();

  const [winnerHouse, setWinnerHouse] = useState(
    user ? user.house.name : 'Serdaigle'
  );
  const [winnerHouseImg, setWinnerHouseImg] = useState(
    <img src={'/images/' + winnerHouse + '.png'} />
  );

  const [users, setUsers] = useState([
    { name: 'Axel', house: 'Serpentard', potionDone: 3 },
    { name: 'Sofyane', house: 'Gryffondor', potionDone: 2 },
    { name: 'Thomas', house: 'Serdaigle', potionDone: 1 },
    { name: 'Louis', house: 'Poufsouffle', potionDone: 2 },
  ]);

  const [ingredients, setIngredients] = useState([]);
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

  const [finished, setFinished] = useState(false);
  const [countdownTime, setCountDownTime] = useState(DEFAULT_INIT_TIME);

  // POTIONS
  const [potions, setPotions] = useState([]);
  const [currentPotionIndex, setCurrentPotionIndex] = useState(0);
  const [currentIngredientPotionIndex, setCurrentIngredientPotionIndex] =
    useState(0);

  useEffect(() => {
    // REDIRECT IF NOT LOGGED
    if (!Api.isLoggedUser()) router.push(Router.getRoutes().LOGIN.slug);

    if (!ingredients.length) setIngredients(getShuffledIngredients());
    if (!potions.length) setPotions(getPartyPotions());
  }, []);

  /**
   * @param {Ingredient} ingredient
   */
  const dropIngredient = (droppedIngredient) => {
    // ERROR IF INDICE IS FLIP
    if (
      classFlipFirst === 'flip' ||
      classFlipSecond === 'flip' ||
      classFlipThird === 'flip'
    ) {
      return toast.error('Impossible, vous lisez un indice !', {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });
    }
    
    // GET NEEDED INGREDIENT
    const neededIngredient =
      potions[currentPotionIndex].getIngredients()[
        currentIngredientPotionIndex
      ];

    // VERIFY IS DROPPED INGREDIENT IS EQUAL TO NEEDED INGREDIENT
    const isNeededIngredient = droppedIngredient === neededIngredient;

    // GOOD INGREDIENT
    if (isNeededIngredient) {
      // RESET CAN TAKE INDICE
      setCanTakeIndice(true);
      resetAllClassFlip();

      toast.success('Ingrédient ajouté', {
        icon: '🧪',
        theme: 'light',
        position: 'bottom-center',
      });

      // REMOVE INGREDIENT FROM LIST
      setIngredients(
        ingredients.filter((ingredient) => droppedIngredient !== ingredient)
      );

      // IF NOT LAST NEEDED INGREDIENT OF CURRENT POTION
      if (
        currentIngredientPotionIndex <
        potions[currentPotionIndex].getIngredients().length - 1
      ) {
        setCurrentIngredientPotionIndex((prev) => prev + 1);
      } else {
        // IF ITS LAST NEEDED INGREDIENT OF CURRENT POSTION
        // GO TO NEXT POTION
        if (currentPotionIndex < potions.length - 1) {
          setCurrentPotionIndex((prev) => prev + 1);
          setCurrentIngredientPotionIndex(0);
          setIngredients(getShuffledIngredients());
          toast.success('Bien joué, potion suivante !', {
            icon: '🧪',
            theme: 'light',
            position: 'bottom-center',
          });
        } else {
          // IF LAST POTION FINISH GAME
          setFinished(true);
        }
      }
    } else {
      // BAD INGREDIENT
      setCountDownTime((prev) => prev - TIME_PENALITY.WRONG_INGREDIENT);
      toast.error('Mauvais ingrédient (- 5 sec)', {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });
    }
  };

  const [indices, setIndices] = useState([
    { indiceTaken: false },
    { indiceTaken: false },
    { indiceTaken: false },
  ]);

  const [classFlipFirst, setClassFlipFirst] = useState('');
  const [classFlipSecond, setClassFlipSecond] = useState('');
  const [classFlipThird, setClassFlipThird] = useState('');
  const [canTakeIndice, setCanTakeIndice] = useState(true);

  const resetAllClassFlip = () => {
    setClassFlipSecond('');
    setClassFlipFirst('');
    setClassFlipThird('');
  };

  const launchIndices = (index) => {
    // NOT ENOUGH TIME
    if (countdownTime <= TIME_PENALITY.INDICE + 10) {
      return toast.error('Tu nas plus le temps !', {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });
    }

    let findIndice = indices.find((item, indexItem) => indexItem === index);
    if (findIndice.indiceTaken === false && canTakeIndice) {
      setCountDownTime((prev) => prev - TIME_PENALITY.INDICE);
      /*Set to true if already taken*/
      let indicesCopy = [...indices];
      findIndice.indiceTaken = true;
      setIndices(indicesCopy);
      if (index === 0) {
        setClassFlipFirst('flip');
      } else if (index === 1) {
        setClassFlipSecond('flip');
      } else if (index === 2) {
        setClassFlipThird('flip');
      }
      setCanTakeIndice(false);
      setTimeout(() => {
        resetAllClassFlip();
      }, INDICE_TIMEOUT);
    }
  };

  useEffect(() => {
    if (finished) stopGame();
  }, [finished]);

  useEffect(() => {
    if (winner) setFinished(true);
  }, [winner]);

  return (
    <>
      {finished ? (
        <section className={'success ' + winnerHouse}>
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
                    {winnerHouse}
                  </SplitChars>
                </Tween>
              </h1>
            </div>
            <div className={'success-container-logo'}>{winnerHouseImg}</div>
            {winner && <p>Le joueur {winner.name} & gagné !</p>}
            <ul className={'success-container-content'}>
              {users.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={'text-30 text-white text-ProzaLibre-Regular'}
                  >
                    <img src={'/images/' + item.house + '.png'} />
                    {item.name} - {item.potionDone} / 3
                  </li>
                );
              })}
            </ul>
            <div className={'success-container-button'}>
              <Link href={'/choice'} className={'btn-reset btn-yellow'}>
                Rejouer
              </Link>
            </div>
          </aside>
        </section>
      ) : (
        <div className="party">
          <CountDown
            time={countdownTime}
            setTime={setCountDownTime}
            setParentState={setFinished}
          />
          {potions && potions[currentPotionIndex] && (
            <>
              <div className="party__potion-name">
                <h1>
                  Potion ({currentPotionIndex + 1}/{potions.length}):{' '}
                  {potions[currentPotionIndex].getName()}
                </h1>
                {potions[currentPotionIndex].getIngredients()[
                  currentIngredientPotionIndex
                ] && (
                  <p>
                    Ingrédient requis:{' '}
                    <span>
                      {
                        potions[currentPotionIndex].getIngredients()[
                          currentIngredientPotionIndex
                        ].name
                      }
                    </span>
                  </p>
                )}
              </div>
              <DropBlock
                cauldron={potions[currentPotionIndex].getCauldron()}
                setDropBoxOffsets={setDropBoxOffsets}
              />
            </>
          )}
          <div className={'indices'}>
            <div className={'indices-container'}>
              {indices.map((item, index) => {
                if (index === 0) {
                  return (
                    <div
                      onClick={(e) => launchIndices(index)}
                      key={index}
                      className={
                        'indices-container-item first ' +
                        classFlipFirst +
                        (canTakeIndice ? '' : ' inactive') +
                        (item.indiceTaken === true ? ' inactive' : '')
                      }
                    >
                      <div className={'indices-container-item-image'}></div>
                      <div className={'indices-container-item-background '}>
                        <img src={'/images/carte.png'} />
                      </div>
                      <div className={'content'}>
                        {/* {item.img && item.img} */}
                        {potions &&
                          potions[currentPotionIndex] &&
                          potions[currentPotionIndex].getIngredients()[
                            currentIngredientPotionIndex
                          ] &&
                          potions[currentPotionIndex]
                            .getIngredients()
                            [currentIngredientPotionIndex].getImgComponent()}
                      </div>
                    </div>
                  );
                } else if (index === 1) {
                  return (
                    <div
                      onClick={(e) => launchIndices(index)}
                      key={index}
                      className={
                        'indices-container-item second ' +
                        classFlipSecond +
                        (canTakeIndice ? '' : ' inactive') +
                        (item.indiceTaken === true ? ' inactive' : '')
                      }
                    >
                      <div className={'indices-container-item-image'}></div>
                      <div className={'indices-container-item-background'}>
                        <img src={'/images/carte.png'} />
                      </div>
                      <div className={'content'}>
                        {/* {item.img && item.img} */}
                        {potions &&
                          potions[currentPotionIndex] &&
                          potions[currentPotionIndex].getIngredients()[
                            currentIngredientPotionIndex
                          ] &&
                          potions[currentPotionIndex]
                            .getIngredients()
                            [currentIngredientPotionIndex].getImgComponent()}
                      </div>
                    </div>
                  );
                } else if (index === 2) {
                  return (
                    <div
                      onClick={(e) => launchIndices(index)}
                      key={index}
                      className={
                        'indices-container-item third ' +
                        classFlipThird +
                        (canTakeIndice ? '' : ' inactive') +
                        (item.indiceTaken === true ? ' inactive' : '')
                      }
                    >
                      <div className={'indices-container-item-image'}></div>
                      <div className={'indices-container-item-background'}>
                        <img src={'/images/carte.png'} />
                      </div>
                      <div className={'content'}>
                        {/* {item.img && item.img} */}
                        {potions &&
                          potions[currentPotionIndex] &&
                          potions[currentPotionIndex].getIngredients()[
                            currentIngredientPotionIndex
                          ] &&
                          potions[currentPotionIndex]
                            .getIngredients()
                            [currentIngredientPotionIndex].getImgComponent()}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <ul className="ingredients-block">
            {ingredients.map((ingredient, index) => (
              <DraggableIngredient
                dropBoxOffsets={dropBoxOffsets}
                ingredient={ingredient}
                dropIngredient={dropIngredient}
                key={index}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
