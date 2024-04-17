import { useSelector, useDispatch } from "react-redux";
import * as action from "./action.js";
function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter, action.INCREASE);
  return (
    <div className=" counter-state border">
      <h3>Counter State</h3>
      <h2>{counter}</h2>
      <div className="flex-cont">
        <button onClick={() => dispatch(action.INCREASE)}>Increase</button>
        <button onClick={() => dispatch(action.DECREASE)}>Decrease</button>
        <button
          onClick={() => dispatch(action.RESET)}
          disabled={counter === 0 ? true : false}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
