import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addToCartAction,
  removeItemAction,
  removeToCartAction,
} from "../../Actions/addOrRemove";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CartItem = (item) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = (item1) => {
    console.log(item1);
    // const newQuantity = quantity + 1;
    console.log(quantity + 1);
    dispatch(
      addToCartAction({
        ...item1,
        quantity: 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(removeToCartAction(item));
  };

  const totalPrice = (quantity, price) => {
    let total = 0;
    total = total + quantity * price;
    return total;
  };
  const removeCartItem = (id) => {
    console.log(id);
    dispatch(removeItemAction(id));
  };
  return (
    <div className="cart">
      <img src={item.url} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <h3>{item.price} Rs</h3>
        <button
          className="removeBtn"
          onClick={() => {
            removeCartItem(item.id);
          }}
        >
          <IconButton aria-label="delete" size="large">
            <Delete />
          </IconButton>
        </button>
      </div>
      <div className="buttons cartButtons">
        <button
          onClick={() => {
            increaseQuantity(item);
          }}
        >
          +
        </button>
        <input
          type="number"
          min={1}
          defaultValue={item.quantity}
          readOnly
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          value={item.quantity}
        />
        <button
          onClick={() => {
            decreaseQuantity(item);
          }}
        >
          -
        </button>
      </div>
      <span>Total Price :{totalPrice(item.quantity, item.price)} Rs</span>
    </div>
  );
};
export default CartItem;
