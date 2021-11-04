const getCellLocation = (el, { row, column }) => {
  return el.some(([x, y]) => x === row && y === column);
};

export default getCellLocation;
