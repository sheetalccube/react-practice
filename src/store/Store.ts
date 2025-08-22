import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Services/Reducers";
import loggerMiddleware from "./MiddleWare/loggerMiddleware";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
console.warn(store, "storèee");

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
