import { GET_CART, UPDATE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, ADD_CART_ITEM } from "../types";

const CartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
      ...state,
    };
    case DELETE_CART_ITEM:
      return {
      ...state,
    };
    case ADD_CART_ITEM:
      return {
      ...state,
    };
    default:
      return state;
  }
};

export default CartReducer;