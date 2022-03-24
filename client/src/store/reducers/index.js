import { combineReducers } from "redux";
import items from "./items";
import cart from "./cart";
import auth from "./auth";

export default combineReducers({
  items,
  cart,
  auth,
});
