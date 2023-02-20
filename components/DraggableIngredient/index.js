import Draggable from 'react-draggable';
import { Ingredient } from '../../entities/Ingredient';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';

/**
 * @param {Ingredient} ingredient
 */
export const DraggableIngredient = ({ ingredient }) => {
  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef(null);

  const handleStart = () => {
    setIsDragging(true);
  };

  //const handleDrag = () => {};

  const handleStop = (e, data) => {
    setIsDragging(false);
    console.log(data);
    resetPosition();
  };

  const resetPosition = () => {
    nodeRef.current.style.transform = 'translate(0px,0px)';
  };

  return (
    <Draggable
      onStart={handleStart}
      //onDrag={handleDrag}
      onStop={handleStop}
      nodeRef={nodeRef}
    >
      <p
        ref={nodeRef}
        className={classNames('', {
          drag: isDragging,
        })}
      >
        {ingredient.getName()}
      </p>
    </Draggable>
  );
};
