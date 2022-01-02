import React, { useState, useCallback } from 'react';

import useInterval from '../hooks/useInterval';
import useKeyboardEvents from '../hooks/useKeyboardEvents';
import { size, initialSnakeCoords, initialApple } from '../consts';
import getNextCoords from '../helpers/getNextCoords';

export const GameContext = React.createContext();

const GameContextWrapper = ({ children }) => {
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState(initialSnakeCoords);
  const [apple, setApple] = useState(initialApple);

  const direction = useKeyboardEvents();

  const moveSnake = useCallback(
    (direction) => {
      const nextCoords = getNextCoords(snake, direction);
      if (nextCoords.some(([x, y]) => x < 1 || x > size || y < 1 || y > size)) {
        setGameOver(true);
        return;
      }
      if (!gameOver) {
        setSnake(nextCoords);
      }
    },
    [snake, gameOver],
  );
  useInterval(moveSnake, direction);

  return (
    <GameContext.Provider value={{ size, snake, apple, direction }}>{children}</GameContext.Provider>
  );
};

export default GameContextWrapper;
