import { useEffect, useState } from "react";
import { foodData } from "../../utility/foodData";
import Navbar from "../Home/Navbar";
import "./FoodItem.css";
import Footer from "../Home/Footer";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
const FoodItem = () => {
  const param = useParams();
  const [food, setFood] = useState([]);
  const getData = async () => {
    console.log(foodData);
    setFood(foodData);
    console.log(param.category);
    if (param.category === "fooditem") {
      setFood(foodData);
    } else {
      const filter = foodData.filter((item) => {
        return item.category === param.category;
      });
      setFood(filter);
    }
  };
  useEffect(() => {
    getData();
  }, [param.category]);

  const content = food.map((item) => {
    return (
      <FoodCard
        name={item.name}
        id={item.id}
        description={item.description}
        key={item.id}
        price={item.price}
        url={item.url}
      />
    );
  });
  return (
    <div>
      <Navbar classChange="change" />
      <h1 className="headline">{param.category.toUpperCase()}</h1>
      <div className="foods">{content}</div>
    </div>
  );
};
export default FoodItem;
