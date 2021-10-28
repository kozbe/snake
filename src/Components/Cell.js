const Cell = ({ i, j, active }) => {
  return (
    <div className={`grid__cell ${active ? 'active' : null}`}>
      {`${i}, ${j}`}
    </div>
  )
}

export default Cell;