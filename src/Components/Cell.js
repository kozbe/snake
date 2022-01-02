const Cell = ({ active, isAppleOn }) => {
  const style = `grid__cell ${active ? 'active' : null} ${isAppleOn ? 'apple' : null}`;
  return <div className={style} />;
};

export default Cell;
