import * as action from "./action.js";
const defaultState = {
  counter: 0,
};

function counterReducer(state = defaultState, action) {
  let counterUpdate;
  console.log("actionreducer", action);
  switch (action.type) {
    case "UP":
      console.log(1111111111);
      counterUpdate = state.counter + 1;
      return { ...state, counter: counterUpdate };

    case "DOWN":
      counterUpdate = state.counter - 1;
      return { ...state, counter: counterUpdate };

    case "RESET":
      return { ...state, counter: 0 };

    default:
      return state;
  }
}
export default counterReducer;
