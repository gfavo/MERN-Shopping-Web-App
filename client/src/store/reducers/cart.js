/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from '../../constants/actionTypes';

export default (cart = [], action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      localStorage.setItem("cart", JSON.stringify([...cart, action.payload]));
      return [...cart, action.payload];

    case actionTypes.GET_CART:
      if (JSON.parse(localStorage.getItem("cart"))) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      return cart;
      
    case actionTypes.CLEAR_CART:
      localStorage.removeItem("cart");
      return [];
    default:
      return cart;
  }
};
