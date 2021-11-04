const Cell = ({ row, column, active, isAppleOn }) => {
  const style = `grid__cell ${active ? 'active' : null} ${isAppleOn ? 'apple' : null}`;
  return <div className={style}>{`${row}, ${column}`}</div>;
};

export default Cell;
