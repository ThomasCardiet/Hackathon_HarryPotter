export const DEFAULT_POSITION = { x: 0, y: 0 };

// VERIFY IF IS ON DROPBOX ELEMENT
export const isOnDropBox = (el, dropBoxOffsets) => {
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
