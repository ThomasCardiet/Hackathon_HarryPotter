import Draggable from 'react-draggable';
import { Ingredient } from '../../entities/Ingredient';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { ICONS } from '../Icon';

/**
 * @param {Ingredient} ingredient
 */
export const DraggableIngredient = ({ ingredient, dropBox }) => {
  // REFS
  const nodeRef = useRef(null);
  const draggerRef = useRef(null);

  // POSITIONS
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);
  const [dragPosition, setDragPosition] = useState(null);

  // DRAG STATES
  const [isDragging, setIsDragging] = useState(false);
  const [isDroppable, setIsDroppable] = useState(false);

  // INIT DROPBOX OFFSETS
  useEffect(() => {
    if (dropBox) {
      const dropBoxPosition = {
        top: dropBox.getBoundingClientRect().top,
        left: dropBox.getBoundingClientRect().left,
      };
      const { width, height } = getComputedStyle(dropBox);
      setDropBoxOffsets({
        x: {
          min: dropBoxPosition.left,
          max: dropBoxPosition.left + parseInt(width),
        },
        y: {
          min: dropBoxPosition.top,
          max: dropBoxPosition.top + parseInt(height),
        },
      });
    }
  }, [dropBox]);

  // VERIFY IF IS ON DROPBOX ELEMENT
  const isOnDropBox = (el) => {
    if (!dropBoxOffsets) return false;

    const position = {
      x:
        el.getBoundingClientRect().left +
        parseInt(getComputedStyle(el).width) / 2,
      y:
        el.getBoundingClientRect().top +
        parseInt(getComputedStyle(el).height) / 2,
    };

    return (
      position.x >= dropBoxOffsets.x.min &&
      position.x <= dropBoxOffsets.x.max &&
      position.y >= dropBoxOffsets.y.min &&
      position.y <= dropBoxOffsets.y.max
    );
  };

  // RESET DRAGGING ELEMENT POSITION
  const resetDrag = useCallback(() => {
    setDragPosition({ x: 0, y: 0 });
    draggerRef.current?.setState({ x: 0, y: 0 });
  }, [setDragPosition, draggerRef]);

  // CALL ON ELEMENT START DRAGGING
  const handleStart = () => {
    setIsDragging(true);
  };

  // CALL ON ELEMENT DRAG
  const handleDrag = (e, data) => {
    setIsDroppable(isOnDropBox(data.node));
  };

  // CALL ON ELELEMEN STOP DRAGGING
  const handleStop = (e, data) => {
    setIsDragging(false);
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
        {ingredient.getName()}
        <div className="draggable-ingredient__icon">{ICONS.PLUS}</div>
      </div>
    </Draggable>
  );
};
