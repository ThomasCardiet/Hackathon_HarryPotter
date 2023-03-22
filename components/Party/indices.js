import React from 'react';

export const Indices = ({
  indices,
  launchIndices,
  potions,
  currentPotionIndex,
  currentIngredientPotionIndex,
  canTakeIndice,
  classFlipFirst,
  classFlipSecond,
  classFlipThird,
}) => {
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
