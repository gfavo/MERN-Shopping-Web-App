import { ActionTypes } from "@mui/base";
import * as api from "../api";
import * as actionTypes from '../constants/actionTypes';
export const getItems = (department) => async (dispatch) => {
  try {
    console.log("Entrou!");
    const { data } = await api.fetchItems(department);

    dispatch({ type: actionTypes.GET_ITEMS, payload: data });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const postItem = (item) => async (dispatch) => {
  try {
    console.log("Entrou!");
    const { data } = await api.postItem(item);
    dispatch({ type: actionTypes.POST_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addItemToCart = (item) => async (dispatch) => {
  try {
    console.log("Entrou!");
    dispatch({ type: actionTypes.ADD_CART_ITEM, payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);

    dispatch({ type: actionTypes.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: actionTypes.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const buyItems = (items) => async (dispatch) => {
  const date = new Date().toLocaleDateString("pr-BR");
  try {
    const dateItems = [];
    items.map((item) => {
      dateItems.push({ id: item._id, boughtAt: date });
    });

    const { data } = await api.buyItem(dateItems);
    console.log(data.updatedUser.itemsBought);
    dispatch({ type: actionTypes.BUY, payload: data.updatedUser.itemsBought });
  } catch (error) {
    console.log(error);
  }
};
