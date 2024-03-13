import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
const Cart = () => {
  const { addToCart } = useSelector((state) => state.addToCart);
  console.log(addToCart);
  const content = addToCart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id}
        url={item.url}
      />
    );
  });
  return (
    <div>
      <Navbar classChange="change" />
      <h1 className="headline">Your Cart</h1>
      <div className="cartbox">{content}</div>;
      {addToCart.length > 0 ? (
        <div>
          <h1 className="total-amount">
            Total Amount :
            {` ₹${addToCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}`}
          </h1>
          <Link to="/order">
            <button className="orderBtn">Order Now</button>
          </Link>
        </div>
      ) : (
        <h1 className="noFood">No Food Item </h1>
      )}
    </div>
  );
};
export default Cart;
