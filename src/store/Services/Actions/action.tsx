import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";
export const addToCart = (data: object) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data: object) => {
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
