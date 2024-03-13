export const orderItem = (
  state = { orderItem: [], success: false },
  action
) => {
  if (action.type === "ORDER") {
    return {
      ...state,
      success: true,
      orderItem: state.orderItem.concat(action.item),
    };
  }
  if (action.type === "REMOVE") {
    const deleteOrder = state.orderItem.filter((item) => {
      return item.id !== action.id;
    });
    return {
      ...state,
      orderItem: deleteOrder,
    };
  }
  if (action.type === "CLEARORDER") {
    return {
      ...state,
      success: false,
    };
  }
  return state;
};
