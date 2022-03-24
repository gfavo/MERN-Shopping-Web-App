/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from '../../constants/actionTypes';

export default (items = [], action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return action.payload;

    case actionTypes.POST_ITEMS:
      const department = items[0].department;
      if (action.payload.department == department) {
        return [...items, action.payload];
      }
      return items;
      
    default:
      return items;
  }
};
