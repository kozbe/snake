import Cell from './Cell';

const Grid = ({ size, snake, apple }) => {
  const createCells = () => {
    const cells = [];
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
        const isSnakeOn = snake.some(
          (coord) => coord[0] === i && coord[1] === j
        );
        const isAppleOn = apple.some(
          (coord) => coord[0] === i && coord[1] === j
        );
        cells.push(
          <Cell
            active={isSnakeOn}
            isAppleOn={isAppleOn}
            key={`${i},${j}`}
            i={i}
            j={j}
          />
        );
      }
    }
    return cells;
  };

  return <div className="grid">{createCells()}</div>;
};

export default Grid;
