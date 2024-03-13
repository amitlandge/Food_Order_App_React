export const addToCartAction = (item) => async (dispatch, getState) => {
  dispatch({ type: "ADDTOCART", item: item });
  const data = getState().addToCart.addToCart;

  localStorage.setItem("cartItems", JSON.stringify(data));
};

export const removeToCartAction = (item) => async (dispatch, getState) => {
  dispatch({ type: "REMOVETOCART", item: item });
  const data = getState().addToCart.addToCart;

  localStorage.setItem("cartItems", JSON.stringify(data));
};
export const removeItemAction = (id) => async (dispatch, getState) => {
  dispatch({ type: "DELETETOCART", id: id });
  const data = getState().addToCart.addToCart;
  localStorage.setItem("cartItems", JSON.stringify(data));
};
