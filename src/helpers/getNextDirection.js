export default function getNextDirection(prevDirection, nextDirection) {
  if (prevDirection === nextDirection) {
    return prevDirection;
  }
  if (prevDirection === 'up' && nextDirection === 'down') {
    return prevDirection;
  }
  if (prevDirection === 'down' && nextDirection === 'up') {
    return prevDirection;
  }
  if (prevDirection === 'left' && nextDirection === 'right') {
    return prevDirection;
  }
  if (prevDirection === 'right' && nextDirection === 'left') {
    return prevDirection;
  }
  return nextDirection;
}
