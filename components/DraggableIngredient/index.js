import Draggable from 'react-draggable';
import { Ingredient } from '../../entities/Ingredient';
import React, { useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { ICONS } from '../Icon';
import { isOnDropBox, DEFAULT_POSITION } from '@/helpers/dropBox';

/**
 * @param {Ingredient} ingredient
 */
export const DraggableIngredient = ({
  ingredient,
  dropBoxOffsets,
  dropIngredient,
}) => {
  // REFS
  const nodeRef = useRef(null);
  const draggerRef = useRef(null);

  // POSITIONS
  const [dragPosition, setDragPosition] = useState(null);

  // DRAG STATES
  const [isDragging, setIsDragging] = useState(false);
  const [isDroppable, setIsDroppable] = useState(false);

  // RESET DRAGGING ELEMENT POSITION
  const resetDrag = useCallback(() => {
    setDragPosition(DEFAULT_POSITION);
    draggerRef.current?.setState(DEFAULT_POSITION);
  }, [setDragPosition, draggerRef]);

  // CALL ON ELEMENT START DRAGGING
  const handleStart = () => {
    setIsDragging(true);
  };

  // CALL ON ELEMENT DRAG
  const handleDrag = (e, data) => {
    setIsDroppable(isOnDropBox(data.node, dropBoxOffsets));
  };

  // CALL ON ELELEMEN STOP DRAGGING
  const handleStop = (e, data) => {
    setIsDragging(false);
    if (isDroppable) dropIngredient(ingredient);
    setIsDroppable(false);
    resetDrag();
  };

  return (
    <Draggable
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      nodeRef={nodeRef}
      ref={draggerRef}
      position={dragPosition}
    >
      <div
        ref={nodeRef}
        className={classNames('draggable-ingredient', {
          drag: isDragging,
          droppable: isDroppable,
          'not-droppable': !isDroppable && isDragging,
        })}
      >
        {ingredient.getImgComponent()}
        <div className="draggable-ingredient__icon">{ICONS.PLUS}</div>
      </div>
    </Draggable>
  );
};
