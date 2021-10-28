import { useState, useEffect, useCallback } from 'react';
import './App.css';
import useKeyBoardEvents from './hooks/useKeyboardEvents';

import Grid from './Components/Grid';

const initialSnakeCoords = [
  [5, 4],
  // [5, 3],
  // [5, 2]
];

function App() {
  const direction = useKeyBoardEvents();
  const [snake, setSnake] = useState(initialSnakeCoords);
  const moveSnake = useCallback(
    (direction) => {
      const nextCoords = snake.map((coords) => {
        if (direction === 'right') {
          return [coords[0], coords[1] + 1];
        }
        if (direction === 'left') {
          return [coords[0], coords[1] - 1];
        }
        if (direction === 'down') {
          return [coords[0] + 1, coords[1]];
        }
        if (direction === 'up') {
          return [coords[0] - 1, coords[1]];
        }
      })
      setSnake(nextCoords)
      return;
    },
    [snake]
  )
  useEffect(() => {
    let interval = setInterval(() => {
      // console.log(snake)
      moveSnake(direction);
    }, 1000 * 0.5);
    return () => {
      clearInterval(interval);
    };
  }, [direction, moveSnake]);
  return (
    <div className="App">
      <h1>Snake 🐍</h1>
      <Grid snakeCoords={snake} size={10} />
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
