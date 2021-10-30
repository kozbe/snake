export default function getNextCoords(snakeCoords, direction) {
  return snakeCoords.map(([row, col], i) => {
    if (i === 0) {
      switch (direction) {
        case 'right':
          return [row, col + 1];
        case 'left':
          return [row, col - 1];
        case 'up':
          return [row - 1, col];
        case 'down':
          return [row + 1, col];
        default:
          return snakeCoords;
      }
    } else {
      return snakeCoords[i - 1];
    }
  });
}
