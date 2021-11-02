import { useState, useEffect, useCallback } from 'react';
import './App.css';
import getNextCoords from './helpers/getNextCoords';
import useKeyBoardEvents from './hooks/useKeyboardEvents';
// import useTicker from './hooks/useTicker';

import Grid from './Components/Grid';

const initialSnakeCoords = [
  [5, 4],
  [5, 3],
  [5, 2],
];

let initialApple = [[10, 10]];

function App() {
  const [snake, setSnake] = useState(initialSnakeCoords);
  const [apple, setApple] = useState(initialApple);
  const direction = useKeyBoardEvents();
  const moveSnake = useCallback(
    (direction) => {
      const nextCoords = getNextCoords(snake, direction);
      setSnake(nextCoords);
      return;
    },
    [snake],
  );
  useEffect(() => {
    let interval = setInterval(() => {
      moveSnake(direction);
    }, 1000 * 0.5);
    return () => {
      clearInterval(interval);
    };
  }, [direction, moveSnake]);
  return (
    <div className="App">
      <h1>Snake 🐍</h1>
      <Grid snake={snake} apple={apple} size={40} />
      {direction}
    </div>
  );
}

export default App;

/* Need a grid to play the game on let's start by 10 x 10
 * Spawn the snake with 3 length
 * Set snake's direction to right
 * Each time snake eats an apple, the apple becomes the head
 * Keypress commands are a component
 * Snake can't go through the walls!
 */
