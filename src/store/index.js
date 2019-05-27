import { createStore, combineReducers } from "redux";
import userReducer from "./user";

const store = createStore(combineReducers({ userReducer }));
store.subscribe(() => {});

export default store;
