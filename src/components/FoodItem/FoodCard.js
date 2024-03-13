import { useState } from "react";
import "./FoodItem.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../Actions/addOrRemove";
import { toast } from "react-toastify";
const FoodCard = (item) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity((prevQuantity) => {
        return prevQuantity - 1;
      });
    }
  };
  const submitDataHandler = () => {
    dispatch(
      addToCartAction({
        ...item,
        quantity: quantity,
      })
    );
    toast.success("Food Added SuccesFully");
  };
  return (
    <div className="food">
      <img src={item.url} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span>{item.price} Rs</span>
      <div className="buttons">
        <button onClick={increaseQuantity}>+</button>
        <input
          type="number"
          min={1}
          defaultValue={1}
          readOnly
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          value={quantity}
        />
        <button onClick={decreaseQuantity}>-</button>
      </div>
      <button className="cartBtn" onClick={submitDataHandler}>
        Add To Cart
      </button>
    </div>
  );
};
export default FoodCard;
