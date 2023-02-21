import { useEffect, useState } from 'react';

export const usePosition = (ref) => {
  const [dropBoxOffsets, setDropBoxOffsets] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const dropBoxPosition = {
        top: element.getBoundingClientRect().top,
        left: element.getBoundingClientRect().left,
      };
      const { width, height } = getComputedStyle(element);
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
  }, [ref]);

  return [dropBoxOffsets, setDropBoxOffsets];
};
