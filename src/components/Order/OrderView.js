import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useEffect, useState } from "react";
import "./OrderView.css";
import { Button } from "@mui/material";
const OrderView = () => {
  const param = useParams();
  const { orderItem } = useSelector((state) => state.order);
  const [items, setItems] = useState([]);
  const filter = orderItem.filter((item) => {
    return item.id === param.id;
  });
  useEffect(() => {
    setItems(filter);
  }, []);
  console.log(items);
  return (
    <div>
      <Navbar classChange="change" />
      <div className="orderView-container">
        {items.map((item) => {
          return (
            <div>
              <h2 className="ship-heading">Shipping Info</h2>
              <div className="user-info">
                <p>
                  <h3>Name :- </h3> {item.name}
                </p>

                <p>
                  <h3>Email :- </h3> {item.email}
                </p>
                <p>
                  <h3>Phone No :- </h3> {item.phone}
                </p>
                <p>
                  <h3>Address :- </h3> <address>{item.address}</address>
                </p>
              </div>
              <hr></hr>
              <h3>
                Status :-
                <Button variant="contained" color="success">
                  {item.status.toUpperCase()}
                </Button>
              </h3>
              <hr></hr>
              <div>
                <h2 className="order-heading">Order Item</h2>
                <div className="order-container">
                  {item.orderItem.map((ele) => {
                    return (
                      <div className="cart order-item">
                        <img src={ele.url} alt={ele.name} />
                        <div>
                          <h2>{ele.name}</h2>
                          <h3>{ele.price} Rs</h3>
                          <p>Quantity :{ele.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                  <hr style={{ width: "100%", background: "gray" }}></hr>
                  <h2>
                    Total Amount :-{" "}
                    {` ₹${item.orderItem.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}`}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OrderView;
