function Reorder({ onReorder }) {
  return (
    <button className="reorder__button" onClick={() => onReorder()}>
      Reorder
    </button>
  );
}

export default Reorder;
