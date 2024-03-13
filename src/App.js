import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import FoodItem from "./components/FoodItem/FoodItem";

import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import YourOrders from "./components/Order/YourOrders";
import OrderView from "./components/Order/OrderView";
import Footer from "./components/Home/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactPage from "./components/Home/ContactPage";
import AboutPage from "./components/Home/AboutPage";

function App() {
  return (
    <div className="container">
      <ToastContainer />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<FoodItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/yourorder" element={<YourOrders />} />
          <Route path="/order/view/:id" element={<OrderView />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
