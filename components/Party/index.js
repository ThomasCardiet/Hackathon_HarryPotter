import React, { useEffect, useState } from 'react';
import { DraggableIngredient } from '@/components/DraggableIngredient';
import { DropBlock } from '@/components/DropBlock';
import { getShuffledIngredients, Ingredient } from '@/entities/Ingredient';
import { getPartyPotions } from '@/entities/Potion';
import { Api } from '@/api';
import { Router } from '@/router';
import { useRouter } from 'next/router';
import { CountDown, DEFAULT_INIT_TIME } from '../CountDown';
import { toast } from 'react-toastify';
import { Indices } from './indices';
import { PartyEnd } from './end';

const TIME_PENALITY = {
  INDICE: 20,
  WRONG_INGREDIENT: 5,
};

const INDICE_TIMEOUT = 2000;

export const Party = ({ room, stopGame, winner, finished, setFinished }) => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState([]);
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

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
          stopGame(true);
        }
      }
    } else {
      // BAD INGREDIENT
      setCountDownTime((prev) => prev - TIME_PENALITY.WRONG_INGREDIENT);
      toast.error(
        `Mauvais ingrédient (- ${TIME_PENALITY.WRONG_INGREDIENT} sec)`,
        {
          icon: '❌',
          theme: 'light',
          position: 'bottom-center',
        }
      );
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
      return toast.error("Tu n'as plus le temps !", {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });
    }

    let findIndice = indices.find((item, indexItem) => indexItem === index);
    if (findIndice.indiceTaken === false && canTakeIndice) {
      toast.error(`Indice utilisé (- ${TIME_PENALITY.INDICE} sec)`, {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });

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
    if (winner) {
      setFinished(true);
    }
  }, [winner]);

  return (
    <>
      {finished && winner ? (
        <PartyEnd winner={winner} room={room} />
      ) : (
        <div className="party">
          <CountDown
            time={countdownTime}
            setTime={setCountDownTime}
            stopGame={stopGame}
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
          <Indices
            indices={indices}
            launchIndices={launchIndices}
            potions={potions}
            currentPotionIndex={currentPotionIndex}
            currentIngredientPotionIndex={currentIngredientPotionIndex}
            canTakeIndice={canTakeIndice}
            classFlipFirst={classFlipFirst}
            classFlipSecond={classFlipSecond}
            classFlipThird={classFlipThird}
          />
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
