import { useState } from "react";
function CounterState() {
  const [count, setCount] = useState(0);

  function handleClick(type) {
    console.log(type);
    if (type === "UP") {
      setCount((prev) => prev + 1);
    }
    if (type === "DOWN") {
      setCount((prev) => prev - 1);
    }
    if (type === "RESET") {
      setCount(0);
    }
  }
  return (
    <div className=" counter-state border">
      <h3>Counter State</h3>
      <h2>{count}</h2>
      <div className="flex-cont">
        <button onClick={() => handleClick("UP")}>Increase</button>
        <button onClick={() => handleClick("DOWN")}>Decrease</button>
        <button
          onClick={() => handleClick("RESET")}
          disabled={count === 0 ? true : false}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterState;
