import { createStore, combineReducers } from "redux";
import userReducer from "./user";
import routerReducer from "./router";

const store = createStore(
  combineReducers({ userReducer, routerReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {});

export default store;
