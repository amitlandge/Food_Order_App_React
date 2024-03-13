import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  AddShoppingCart,
  AddShoppingCartOutlined,
  Badge,
  Mail,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Navbar = ({ classChange }) => {
  const { orderItem } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const onChangeSelect = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };
  return (
    <ul className={!classChange ? "navlinks" : "navlinks-bgchange"}>
      <li className="navItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navItem ">
        <select
          name="menu"
          className="menu navItemBtn"
          onChange={onChangeSelect}
        >
          <option value="/" className="menuItem">
            Choose Menu
          </option>
          <option value="/fooditem" className="menuItem">
            All Menu
          </option>
          <option value="/breakfast" className="menuItem">
            Breakfast
          </option>
          <option value="/lunch" className="menuItem">
            Lunches
          </option>
          <option value="/dinner" className="menuItem">
            Dinner
          </option>
        </select>
      </li>
      <li className="navItem">
        <Link to="/aboutus">About Us</Link>
      </li>
      <li className="navItem lastItem">
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li className="navItem navItemBtn">
        <Link to="/cart">Your Cart</Link>
        <AddShoppingCart />
      </li>
      <li className="navItem navItemBtn">
        <Link to="/yourorder">Your Order</Link>({`${orderItem.length}`})
      </li>
    </ul>
  );
};
export default Navbar;
