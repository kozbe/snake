import { useEffect } from 'react';

const useInterval = (fn, direction) => {
  useEffect(() => {
    let interval = setInterval(() => {
      fn(direction);
    }, 500 * 0.5);
    return () => {
      clearInterval(interval);
    };
  }, [direction, fn]);
};

export default useInterval;
