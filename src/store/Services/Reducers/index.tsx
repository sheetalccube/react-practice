import { combineReducers } from "redux";
import cartItemReducer from "./reducer";
import counterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  cartItemReducer,
  counterReducer,
});

export default rootReducer;
