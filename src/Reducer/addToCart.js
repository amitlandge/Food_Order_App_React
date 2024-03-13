export const addToCart = (state = { addToCart: [] }, action) => {
  if (action.type === "ADDTOCART") {
    const findItem = state.addToCart.find((item) => item.id === action.item.id);

    if (findItem !== undefined) {
      const findItemIdex = state.addToCart.findIndex(
        (item) => item.id === action.item.id
      );
      const getItem = state.addToCart[findItemIdex];
      const replaceItem = {
        ...getItem,
        quantity: getItem.quantity + action.item.quantity,
      };

      return {
        ...state,
        addToCart: state.addToCart.map((item) => {
          return item.id === findItem.id ? replaceItem : item;
        }),
      };
    } else {
      return {
        ...state,
        addToCart: [...state.addToCart, action.item],
      };
    }
  }
  if (action.type === "REMOVETOCART") {
    const findItem = state.addToCart.find((item) => item.id === action.item.id);

    if (findItem !== undefined) {
      const findItemIdex = state.addToCart.findIndex(
        (item) => item.id === action.item.id
      );
      const getItem = state.addToCart[findItemIdex];
      if (getItem.quantity === 1) {
        return {
          ...state,
          addToCart: state.addToCart.filter((item) => {
            return item.id !== findItem.id;
          }),
        };
      }
      const replaceItem = {
        ...getItem,
        quantity: getItem.quantity - 1,
      };
      return {
        ...state,
        addToCart: state.addToCart.map((item) => {
          return item.id === findItem.id ? replaceItem : item;
        }),
      };
    }
  }
  if (action.type === "DELETETOCART") {
    const deleteCartItem = state.addToCart.filter((item) => {
      return item.id !== action.id;
    });
    return {
      ...state,
      addToCart: deleteCartItem,
    };
  }
  return state;
};
