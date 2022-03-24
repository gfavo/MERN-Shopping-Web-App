import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import { compose } from "redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
