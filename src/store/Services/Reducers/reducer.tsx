import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
}

export interface CartState {
  cartData: CartItem[];
}

const initialState: CartState = {
  cartData: [],
};

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  data: CartItem;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  data: CartItem;
}

type CartAction = AddToCartAction | RemoveFromCartAction;

export default function cartItemReducer(
  state: CartState = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
      cartData: [...state.cartData, action.data],
    };

  case REMOVE_FROM_CART:
    return {
      ...state,
      cartData: state.cartData.filter((item) => item.id !== action.data.id),
    };

  default:
    return state;
  }
}
