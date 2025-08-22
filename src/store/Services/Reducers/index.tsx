import { combineReducers } from "redux";
import cartItemReducer from "./reducer";

const rootReducer = combineReducers({
  cartItemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
