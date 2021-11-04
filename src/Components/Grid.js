import Cell from './Cell';
import getCellLocation from '../helpers/getCellLocation';

const Grid = ({ size, snake, apple }) => {
  const createCells = () => {
    const cells = [];
    for (let row = 1; row <= size; row++) {
      for (let column = 1; column <= size; column++) {
        const isSnakeOn = getCellLocation(snake, { row, column });
        const isAppleOn = getCellLocation(apple, { row, column });
        cells.push(
          <Cell
            active={isSnakeOn}
            isAppleOn={isAppleOn}
            key={`${row},${column}`}
            row={row}
            column={column}
          />,
        );
      }
    }
    return cells;
  };

  return <div className="grid">{createCells()}</div>;
};

export default Grid;
