import "./App.css";
import Reorder from "./Reorder";
import { useState } from "react";

function App() {
  const [inventory, setInventory] = useState(0);
  const reorder = (
    <>
      <Reorder onReorder={() => setInventory(5)} />
    </>
  );

  return (
    <div className="app">
      <button
        className="btn app__button-decrease"
        onClick={() => setInventory(inventory - 1)}
        disabled={!inventory}
      >
        -
      </button>
      <span className="app__number">Current Inventory is {inventory}</span>
      <button
        className="btn app__button-increase"
        onClick={() => setInventory(inventory + 1)}
      >
        +
      </button>
      {inventory === 0 ? reorder : ""}
    </div>
  );
}

export default App;
