import type { Product } from "@/components/ProductCart/marketplace";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";
export const addToCart = (data: Product) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data: Product) => {
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
