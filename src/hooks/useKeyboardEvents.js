import { useState, useEffect } from 'react';

const ARROW_KEYS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

const useKeyboardEvents = () => {
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const { key } = e;
      if (ARROW_KEYS[key]) {
        setDirection(ARROW_KEYS[key]);
      }
    });
    return () => {
      window.removeEventListener('keydown', () => null);
    };
  }, [direction]);

  return direction;
};

export default useKeyboardEvents;
