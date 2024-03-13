import store from "../store/store";

export const orderAction = (item) => async (dispatch, getState) => {
  const getData = store.getState().addToCart.addToCart;
  const totalAmount = getData.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  dispatch({
    type: "ORDER",
    item: {
      ...item,
      totalAmount,
      orderItem: store.getState().addToCart.addToCart,
    },
  });

  const data = getState().order.orderItem;

  localStorage.setItem("order", JSON.stringify(data));
};

export const removeOrder = (id) => async (dispatch, getState) => {
  dispatch({ type: "REMOVE", id: id });
  const data = getState().order.orderItem;
  localStorage.setItem("order", JSON.stringify(data));
};

export const clearOrder = () => async (dispatch) => {
  dispatch({ type: "CLEARORDER" });
};
