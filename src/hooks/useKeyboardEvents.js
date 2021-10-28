import { useState, useEffect } from 'react';

const KeyboardEvents = () => {
  const [direction, setDirection] = useState('right');

  // const handleKeypress = useCallback(
  //   (target) => {
  //     console.log({ direction, target })
  //     if (
  //       (direction === 'right' && target === 'left') ||
  //       (direction === 'left' && target === 'right') ||
  //       (direction === 'up' && target === 'down') ||
  //       (direction === 'down' && target === 'up')
  //     ) {
  //       return null;
  //     } else {
  //       setDirection(() => target)
  //     }
  //   }, [direction]
  // )

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      console.log(e);
      if (e.key === 'ArrowRight') {
        setDirection('right');
      }
      if (e.key === 'ArrowLeft') {
        setDirection('left');
      }
      if (e.key === 'ArrowDown') {
        setDirection('down');
      }
      if (e.key === 'ArrowUp') {
        setDirection('up');
      } else {
        return false;
      }
    });
    return () => {
      window.removeEventListener('keyup', () => null);
    };
  }, []);

  return direction;
};

export default KeyboardEvents;
