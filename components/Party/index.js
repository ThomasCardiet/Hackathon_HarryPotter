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
    const neededIngredient =
      potions[currentPotionIndex].getIngredients()[
        currentIngredientPotionIndex
      ];
    const isNeededIngredient = droppedIngredient === neededIngredient;
    if (isNeededIngredient) {
      toast.success('Ingrédient ajouté', {
        icon: '🧪',
        theme: 'light',
        position: 'bottom-center',
      });
      setIngredients(
        ingredients.filter((ingredient) => droppedIngredient !== ingredient)
      );

      if (
        currentIngredientPotionIndex <
        potions[currentPotionIndex].getIngredients().length - 1
      ) {
        console.log(
          currentIngredientPotionIndex,
          potions[currentPotionIndex].getIngredients().length - 1
        );
        setCurrentIngredientPotionIndex((prev) => prev + 1);
      } else {
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
        }
      }
    } else {
      setCountDownTime((prev) => prev - 5);
      toast.error('Mauvais ingrédient (- 5 sec)', {
        icon: '❌',
        theme: 'light',
        position: 'bottom-center',
      });
    }
  };

  const [indices, setIndices] = useState([
    { img: '', indiceTaken: false },
    { img: '', indiceTaken: false },
    { img: '', indiceTaken: false },
  ]);
  const [classFlipFirst, setClassFlipFirst] = useState('');
  const [classFlipSecond, setClassFlipSecond] = useState('');
  const [classFlipThird, setClassFlipThird] = useState('');
  const [canTakeIndice, setCanTakeIndice] = useState(true);

  const launchIndices = (index) => {
    let findIndice = indices.find((item, indexItem) => indexItem === index);
    if (findIndice.indiceTaken === false && canTakeIndice) {
      setCountDownTime((prev) => prev - 20);
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
        setClassFlipSecond('');
        setClassFlipFirst('');
        setClassFlipThird('');
      }, '5000');
    }
  };

  useEffect(() => {
    if (finished) console.log('Countdown terminé');
  }, [finished]);

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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aut commodi consequatur facere impedit nobis perspiciatis,
                      quam quasi sunt ullam veniam.
                    </p>
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
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="ingredients-block">
        {ingredients.map((ingredient, index) => (
          <DraggableIngredient
            dropBoxOffsets={dropBoxOffsets}
            ingredient={ingredient}
            dropIngredient={dropIngredient}
            key={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Party;
