import { useState, useCallback } from 'react';
import './App.css';
import getNextCoords from './helpers/getNextCoords';
import useKeyBoardEvents from './hooks/useKeyboardEvents';
import useInterval from './hooks/useInterval';

import Grid from './Components/Grid';

const initialSnakeCoords = [
  [5, 4],
  [5, 3],
  [5, 2],
];
const initialApple = [[10, 10]];
const size = 40;

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState(initialSnakeCoords);
  const [apple, setApple] = useState(initialApple);
  const direction = useKeyBoardEvents();
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
    <div className="App">
      <h1>Snake 🐍</h1>
      <Grid snake={snake} apple={apple} size={size} />
      {direction}
    </div>
  );
}

export default App;
