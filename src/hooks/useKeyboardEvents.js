import { useState, useEffect } from 'react';
import { ARROW_KEYS } from '../consts';
import getNextDirection from '../helpers/getNextDirection';

const useKeyboardEvents = () => {
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const { key } = e;
      if (ARROW_KEYS[key]) {
        setDirection((prevDirection) => getNextDirection(prevDirection, ARROW_KEYS[key]));
      }
    });
    return () => {
      window.removeEventListener('keydown', () => null);
    };
  }, []);

  return direction;
};

export default useKeyboardEvents;
