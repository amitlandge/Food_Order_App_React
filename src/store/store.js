import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import { addToCart } from "../Reducer/addToCart";
import { orderItem } from "../Reducer/orderReducer";

const reducerFun = combineReducers({
  addToCart: addToCart,
  order: orderItem,
});
const data = localStorage.getItem("cartItems");
const order = localStorage.getItem("order");
const initialState = {
  addToCart: {
    addToCart: data ? JSON.parse(data) : [],
  },
  order: {
    orderItem: order ? JSON.parse(order) : [],
  },
};
const middleware = [thunk];
const store = legacy_createStore(
  reducerFun,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
