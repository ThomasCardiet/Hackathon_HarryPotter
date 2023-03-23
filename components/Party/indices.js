import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { TIME_PENALITY } from '.';

export const INDICE_TIMEOUT = 2000;

export const Indices = ({
  countdownTime,
  setCountDownTime,
  potions,
  currentPotionIndex,
  currentIngredientPotionIndex,
  setClassFlipFirst,
  setClassFlipSecond,
  setClassFlipThird,
  canTakeIndice,
  setCanTakeIndice,
  classFlipFirst,
  classFlipSecond,
  classFlipThird,
  resetAllClassFlip,
}) => {
  const [indices, setIndices] = useState([
    { indiceTaken: false },
    { indiceTaken: false },
    { indiceTaken: false },
  ]);

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

  return (
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
  );
};
