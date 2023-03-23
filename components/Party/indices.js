import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TIME_PENALITY } from '.';

export const INDICE_PARAMS = {
  TIMEOUT: 2000,
  DEFAULT_QUANTITY: 3,
};

export const Indices = ({
  countdownTime,
  setCountDownTime,
  potions,
  currentPotionIndex,
  currentIngredientPotionIndex,
  canTakeIndice,
  setCanTakeIndice,
  setIsUsingIndice,
  quantity = INDICE_PARAMS.DEFAULT_QUANTITY,
}) => {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < quantity; i++) {
      array.push({ indiceTaken: false, flip: false });
    }
    setIndices(array);
  }, []);

  const flipIndice = (index) => {
    setIndices((prev) => {
      const array = [...indices];
      array[index] = { ...array[index], flip: true };
      return array;
    });
    setIsUsingIndice(true);

    setTimeout(() => {
      setIndices((prev) => {
        const array = [...indices];
        array[index] = { ...array[index], flip: false };
        return array;
      });
      setIsUsingIndice(false);
    }, INDICE_PARAMS.TIMEOUT);
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
      flipIndice(index);
      setCanTakeIndice(false);
    }
  };

  return (
    <div className={'indices'}>
      <div className={'indices-container'}>
        {indices.map((item, index) => {
          return (
            <div
              onClick={(e) => launchIndices(index)}
              key={index}
              className={
                'indices-container-item ' +
                (item.flip ? 'flip' : '') +
                (canTakeIndice ? '' : ' inactive') +
                (item.indiceTaken ? ' inactive' : '')
              }
              style={{ left: `${80 - 5 * (indices.length - 1) + 5 * index}%` }}
            >
              <div className={'indices-container-item-image'}></div>
              <div className={'indices-container-item-background '}>
                <img draggable="false" src={'/images/carte.png'} />
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
        })}
      </div>
    </div>
  );
};
