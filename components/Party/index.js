import Head from 'next/head'
import { DraggableIngredient } from '@/components/DraggableIngredient'
import { DropBlock } from '@/components/DropBlock'
import { getShuffledIngredients, Ingredient } from '@/entities/Ingredient'
import { getCauldrons } from '@/entities/Cauldron'
import {useEffect, useRef, useState} from 'react';
import {gsap} from "gsap";
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
    const dropIngredient = (droppedIngredient) => {
        setIngredients(
            ingredients.filter((ingredient) => droppedIngredient !== ingredient)
        );
    };
    
    
    const [indices, setIndices] = useState([{img :"" , indiceTaken : false},{img :"" , indiceTaken : false},{img :"" , indiceTaken : false}]);
    const [classFlipFirst, setClassFlipFirst] = useState("");
    const [classFlipSecond, setClassFlipSecond] = useState("");
    const [classFlipThird, setClassFlipThird] = useState("");
    const [canTakeIndice, setCanTakeIndice] = useState(true);
    
    const launchIndices = (index)=>{
        let findIndice = indices.find((item,indexItem)=>indexItem === index)
        if (findIndice.indiceTaken === false && canTakeIndice){
            /*Set to true if already taken*/
            let indicesCopy = [...indices]
            findIndice.indiceTaken = true
            console.log(findIndice)
            setIndices(indicesCopy)
            if (index === 0){
                setClassFlipFirst("flip")
            }else if (index === 1){
                setClassFlipSecond("flip")
            }else if (index === 2){
                setClassFlipThird("flip")
            }
            setCanTakeIndice(false)
            setTimeout(() => {
                setClassFlipSecond("")
                setClassFlipFirst("")
                setClassFlipThird("")
            }, "5000")
            
        }
    }
    
    useEffect(() => {
        console.log(indices)
    }, [indices]);
    
    
    
    
    
    useEffect(() => {
        console.log(indices)
    }, [indices]);
    
    
    
    
    return (
        <>
            <Head>
                <title>Hackaton Harry Potter - Potion Game</title>
                <meta name="description" content="Harry Potter potion maker game" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <main>
                <DropBlock cauldron={cauldrons[0]} setDropBoxOffsets={setDropBoxOffsets} />
                <div className={"indices"}>
                    <div className={"indices-container"}>
                        {indices.map((item,index)=>{
                            if (index === 0){
                                return(
                                    <div onClick={(e)=>launchIndices(index)} key={index} className={"indices-container-item first " + (classFlipFirst) + (canTakeIndice ? "" : " inactive") + (item.indiceTaken === true ? " inactive" : "")}>
                                        <div className={"indices-container-item-image"}>
                                        </div>
                                        <div className={"indices-container-item-background "}>
                                            <img src={"images/carte.png"}/>
                                        </div>
                                        <div className={"content"}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi consequatur facere impedit nobis perspiciatis, quam quasi sunt ullam veniam.</p>
                                        </div>
                                    </div>
                                )
                            }else if (index ===1)
                            {
                                return(
                                    <div onClick={(e)=>launchIndices(index)} key={index} className={"indices-container-item second " + (classFlipSecond) + (canTakeIndice ? "" : " inactive")+ (item.indiceTaken === true ? " inactive" : "")}>
                                        <div className={"indices-container-item-image"}>
                                        
                                        </div>
                                        <div className={"indices-container-item-background"}>
                                            <img src={"images/carte.png"}/>
                                        </div>
                                    </div>
                                )
                            }else if (index ===2)
                            {
                                return(
                                    <div onClick={(e)=>launchIndices(index)} key={index} className={"indices-container-item third " + (classFlipThird) + (canTakeIndice ? "" : " inactive")+ (item.indiceTaken === true ? " inactive" : "")}>
                                        <div className={"indices-container-item-image"}>
                                        
                                        </div>
                                        <div className={"indices-container-item-background"}>
                                            <img src={"images/carte.png"}/>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="ingredients-block">
                    {ingredients.map((ingredient, index) => (<DraggableIngredient dropBoxOffsets={dropBoxOffsets} ingredient={ingredient} dropIngredient={dropIngredient} key={index} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Party;
