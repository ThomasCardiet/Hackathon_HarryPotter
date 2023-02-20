import Head from 'next/head'
import { DraggableIngredient } from '../components/DraggableIngredient'
import { getIngredients } from '@/entities/Ingredient'
import { useEffect, useRef, useState } from 'react';


const Test = () => {
  const dropBlockRef = useRef(null)
  const ingredients = getIngredients();
  const [dropBox, setDropBox] = useState(null)

  useEffect(() => {
    setDropBox(dropBlockRef.current)
  }, [])
  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <div className="drop-block" ref={dropBlockRef} />
        <div className="ingredients-block">
          <h2>Ingrédients :</h2>
          {ingredients.map((ingredient, index) => (<DraggableIngredient dropBox={dropBox} ingredient={ingredient} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Test;