import React, { useReducer } from "react";
import axios from "axios";
import { baseUrl } from '../../shared/baseUrl';

import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

import { GET_CART, UPDATE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, ADD_CART_ITEM } from "../types";

const CartState = (props) => {
  const initialState = {
    cart: {
      items: [],
      total_amount: 0,
    },
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCart = async () => {
    try {
      const res = await axios.get(baseUrl+'carts');
      const data = {
        items: res.data[0].items,
        total_amount: res.data[0].total_amount,
      }; 
      dispatch({ type: GET_CART, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartItemQuantity = async (item, qAction) => {
    const data = state;
    var i;
    for (i=0; i < data.cart.items.length; i++) {
      if (data.cart.items[i].dish === item.dish && data.cart.items[i].size === item.size) {
        if (qAction === 'increment') {
          data.cart.items[i].quantity = data.cart.items[i].quantity + 1;
          data.cart.total_amount = data.cart.total_amount + item.unit_price;
        } 
        if (qAction === 'decrement' && data.cart.items[i].quantity > 1) {
          data.cart.items[i].quantity = data.cart.items[i].quantity - 1;
          data.cart.total_amount = data.cart.total_amount - item.unit_price;
        } 
      }
    }
    try {
      dispatch({ type: UPDATE_CART_ITEM_QUANTITY, payload: data.cart });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCartItem = async (item) => {
    const data = state;
    var i;
    for (i=0; i < data.cart.items.length; i++) {
      if (data.cart.items[i].dish === item.dish && data.cart.items[i].size === item.size) {
        data.cart.items.splice(i, 1); 
        data.cart.total_amount = data.cart.total_amount - (item.unit_price * item.quantity);
        dispatch({ type: DELETE_CART_ITEM, payload: data.cart });
      }
    }
  };

  const addCartItem = async (item) => {
    const data = state;
    var index  = data.cart.items.findIndex(it => it.dish === item.dish && it.size === item.size);
    if (index > -1) 
      data.cart.items[index].quantity = data.cart.items[index].quantity + item.quantity;
    else data.cart.items.push(item);
    data.cart.total_amount = data.cart.total_amount + (item.unit_price * item.quantity);
    dispatch({ type: ADD_CART_ITEM, payload: data.cart });
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        getCart,
        updateCartItemQuantity,
        deleteCartItem,
        addCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;