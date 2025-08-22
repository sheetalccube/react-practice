import type { Middleware } from "redux";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

export default loggerMiddleware;

// yeh method create store s bnai hui method me rhta h and yeh state ki latest value hold krta h
// store.getState()

// this method is used to subscribe to the state changes. When the state changes, the provided callback function will be executed.
// store.subscribe(() => {

// });

// dispatch method is used to dispatch actions to the store.
// its a json object that has a type property.
// store.dispatch({ type: "ADD_ITEM", payload: { id: 1, name: "iPhone 12", price: 1000 } });
