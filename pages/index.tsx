import Head from 'next/head'
import { DraggableIngredient } from '../components/DraggableIngredient'
import { getIngredients } from '@/entities/Ingredient'


export default function Home() {
  const ingredients = getIngredients();
  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        {ingredients.map((ingredient, index) => (<DraggableIngredient ingredient={ingredient} key={index} />
        ))}
        <div className="potion">
          
        </div>
      </main>
    </>
  )
}
