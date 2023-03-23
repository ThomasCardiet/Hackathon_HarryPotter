import { useEffect, useState } from 'react';
import { Api } from '@/api';
import { Router } from '@/router';

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

//PROPS
export const useProps = (path) => {
  const [props, setProps] = useState({});

  const route = Router.getRouteBySlug(path);

  useEffect(() => {
    if (route.props) {
      switch (true) {
        case route.props.games:
          Api.getGames().then((games) => {
            setProps((prev) => ({ ...prev, ...{ games } }));
          });
          break;

        case route.props.houses:
          Api.getHouses().then((houses) => {
            setProps((prev) => ({ ...prev, ...{ houses } }));
          });
          break;
      }
    }
  }, [path]);

  return [props, setProps];
};
