import { DraggableIngredient } from '../DraggableIngredient';
import { DropBlock } from '../DropBlock';
import { getShuffledIngredients, Ingredient } from '../../entities/Ingredient';
import { getCauldrons } from '../../entities/Cauldron';
import { useEffect, useState } from 'react';
import React from 'react';

const Party = () => {
  const [ingredients, setIngredients] = useState([]);
  const cauldrons = getCauldrons();
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

  useEffect(() => {
    setIngredients(getShuffledIngredients());
  }, []);

  /**
   * @param {Ingredient} droppedIngredient
   */
  const dropIngredient = (droppedIngredient) => {
    setIngredients(
      ingredients.filter((ingredient) => droppedIngredient !== ingredient)
    );
  };

  return (
    <main>
      <DropBlock
        cauldron={cauldrons[0]}
        setDropBoxOffsets={setDropBoxOffsets}
      />
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
