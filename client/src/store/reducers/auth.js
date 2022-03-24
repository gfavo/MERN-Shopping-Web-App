/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from "../../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case actionTypes.LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: action?.data };

    case actionTypes.BUY:
      state.authData.result.itemsBought = action?.payload;
      localStorage.setItem("profile", JSON.stringify(state.authData));
      return state;

    case actionTypes.SET_AUTH_STARTUP:
      return {
        ...state,
        authData: JSON.parse(localStorage.getItem("profile")),
      };
    default:
      return state;
  }
};
