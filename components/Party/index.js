import Head from 'next/head';
import { DraggableIngredient } from '@/components/DraggableIngredient';
import { DropBlock } from '@/components/DropBlock';
import { getShuffledIngredients, Ingredient } from '@/entities/Ingredient';
import { getPartyPotions, Potion } from '@/entities/Potion';
import { useEffect, useState } from 'react';
import { Api } from '@/api';
import React from 'react';
import { CountDown, DEFAULT_INIT_TIME } from '../CountDown';
import { toast } from 'react-toastify';

const TIME_PENALITY = {
  INDICE: 20,
  WRONG_INGREDIENT: 5,
};

const Party = () => {
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
      }, '5000');
    }
  };

  if (finished)
    return (
      <div className="party-finish">
        <h2>Partie Terminée !</h2>
        {countdownTime <= 0 ? (
          <p className="party-finish__text lose">Le temps est écoulé...</p>
        ) : (
          <p className="party-finish__text win">
            Félicitation vous voilà Alchimiste !
          </p>
        )}
      </div>
    );

  return (
    <main className="party">
      <CountDown
        time={countdownTime}
        setTime={setCountDownTime}
        setParentState={setFinished}
      />
      {potions && potions[currentPotionIndex] && (
        <>
          <div className="party__potion-name">
            <h1>Potion: {potions[currentPotionIndex].getName()}</h1>
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
                    <img src={'images/carte.png'} />
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
                    <img src={'images/carte.png'} />
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
                    <img src={'images/carte.png'} />
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
    </main>
  );
};

export default Party;
