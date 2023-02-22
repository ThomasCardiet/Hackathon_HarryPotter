import React, { useEffect, useRef } from 'react';
import { usePosition } from '@/components/Hooks';

export const DropBlock = ({ cauldron, setDropBoxOffsets }) => {
  const dropBlockRef = useRef(null);
  const [dropBoxOffsets] = usePosition(dropBlockRef);

  useEffect(() => {
    setDropBoxOffsets(dropBoxOffsets);
  }, [dropBoxOffsets]);

  return (
    <div className="drop-block" ref={dropBlockRef}>
      {cauldron.getImgComponent()}
    </div>
  );
};
