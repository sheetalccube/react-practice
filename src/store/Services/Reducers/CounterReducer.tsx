type CounterAction = { type: "ADD" } | { type: "SUBTRACT" };

// State type
interface CounterState {
  counter: number;
}

// Initial state
const initialState: CounterState = {
  counter: 55,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
  case "ADD":
    return { counter: state.counter + 1 };
  case "SUBTRACT":
    return { counter: state.counter - 1 };
  default:
    return state;
  }
};
export default counterReducer;
