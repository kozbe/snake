const Cell = ({ i, j, active, isAppleOn }) => {
  const style = `grid__cell ${active ? 'active' : null} ${
    isAppleOn ? 'apple' : null
  }`;
  if (isAppleOn) {
    console.log(style)
  }
  return <div className={style}>{`${i}, ${j}`}</div>;
};

export default Cell;
