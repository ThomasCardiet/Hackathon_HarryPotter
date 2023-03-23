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

export const TIME_PENALITY = {
  INDICE: 20,
  WRONG_INGREDIENT: 5,
};

export const Party = ({ room, stopGame, winner, finished, setFinished }) => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState([]);
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

  const [countdownTime, setCountDownTime] = useState(DEFAULT_INIT_TIME);

  // INDICES
  const [classFlipFirst, setClassFlipFirst] = useState('');
  const [classFlipSecond, setClassFlipSecond] = useState('');
  const [classFlipThird, setClassFlipThird] = useState('');
  const [canTakeIndice, setCanTakeIndice] = useState(true);

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

  // INDICES

  const resetAllClassFlip = () => {
    setClassFlipSecond('');
    setClassFlipFirst('');
    setClassFlipThird('');
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
            potions={potions}
            currentPotionIndex={currentPotionIndex}
            currentIngredientPotionIndex={currentIngredientPotionIndex}
            countdownTime={countdownTime}
            setCountDownTime={setCountDownTime}
            setClassFlipFirst={setClassFlipFirst}
            setClassFlipSecond={setClassFlipSecond}
            setClassFlipThird={setClassFlipThird}
            canTakeIndice={canTakeIndice}
            setCanTakeIndice={setCanTakeIndice}
            classFlipFirst={classFlipFirst}
            classFlipSecond={classFlipSecond}
            classFlipThird={classFlipThird}
            resetAllClassFlip={resetAllClassFlip}
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
