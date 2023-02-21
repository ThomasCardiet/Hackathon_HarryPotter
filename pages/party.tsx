import Head from 'next/head'
import { DraggableIngredient } from '@/components/DraggableIngredient'
import { DropBlock } from '@/components/DropBlock'
import { getIngredients, getShuffledIngredients, Ingredient } from '@/entities/Ingredient'
import { getCauldrons } from '@/entities/Cauldron'
import { useEffect, useState } from 'react';

const Party = () => {
    const [ingredients, setIngredients] = useState([])
    const cauldrons = getCauldrons();
    const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

    useEffect(() => {
      setIngredients(getShuffledIngredients())
    }, [])

    /**
     * @param {Ingredient} ingredient
     */
    const dropIngredient = (droppedIngredient: Ingredient) => {
      setIngredients(ingredients.filter((ingredient: Ingredient) => droppedIngredient !== ingredient))
    }

    return (
      <>
      <Head>
        <title>Hackaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <DropBlock cauldron={cauldrons[0]} setDropBoxOffsets={setDropBoxOffsets} />
        <div className="ingredients-block">
          <h2>Ingrédients :</h2>
          {ingredients.map((ingredient, index) => (<DraggableIngredient dropBoxOffsets={dropBoxOffsets} ingredient={ingredient} dropIngredient={dropIngredient} key={index} />
          ))}
        </div>
      </main>
    </>
    )
}

export default Party;