import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import "./Order.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder, orderAction } from "../../Actions/orderAction";
import { toast } from "react-toastify";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [valid, setValid] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
  });

  const [submit, isSubmit] = useState(false);
  const isNameValid = name.trim().length !== 0;
  const isEmailValid = email.trim().includes("@");
  const isPhoneValid = phone.toString().length === 10;
  const isAddressValid = address.trim().length > 5;
  const { success } = useSelector((state) => state.order);
  useEffect(() => {
    if (success) {
      navigate("/yourorder");
      dispatch(clearOrder());
    }
  }, [navigate, success, dispatch]);
  const onOrderHandler = () => {
    isSubmit(true);
    setValid({
      name: isNameValid,
      email: isEmailValid,
      phone: isPhoneValid,
      address: isAddressValid,
    });
    console.log(valid.name || submit);
    if (isNameValid && isEmailValid && isPhoneValid && isAddressValid) {
      console.log(valid.name && valid.email && valid.address && valid.phone);

      dispatch(
        orderAction({
          name,
          email,
          phone,
          address,
          status: "Pending",
          id: Math.random().toString(),
        })
      );
      toast.success("Your Order Has Been Placed");
    } else {
      toast.error("Please Fill the Field");
    }
  };
  return (
    <div className="orderPage">
      <div>
        <Navbar classChange="change" />
      </div>
      <h1 className="headline">Order Info</h1>
      <form className="orderForm">
        <input
          className={valid.name || !submit ? "name" : "invalid"}
          placeholder="Enter Your Name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className={valid.email || !submit ? "email" : "invalid"}
          placeholder="Enter Your Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={valid.address || !submit ? "address" : "invalid"}
          type="address"
          placeholder="Enter Your Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          className={valid.phone || !submit ? "phone" : "invalid"}
          type="number"
          placeholder="Enter Your Phone Number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Link to="/order">
          <button
            className="orderBtn"
            onClick={() => {
              onOrderHandler();
            }}
          >
            Order Now
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Order;
