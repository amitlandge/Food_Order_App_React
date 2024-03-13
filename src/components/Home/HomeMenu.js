import { Link } from "react-router-dom";
import "./HomeMenu.css";
const HomeMenu = () => {
  return (
    <section class="menu_content">
      <h1>Our Menu</h1>
      <div class="cards">
        <Link class="card" to="/breakfast">
          <h2>Breakfast</h2>
          <ul class="list_items">
            <li>
              Vadapav<span>15 Rs</span>
            </li>
            <li>
              Poha <span>50 Rs</span>
            </li>
            <li>
              Egg Bhuraji<span>70 Rs</span>
            </li>
            <li>
              Idali Dosa<span>50 Rs</span>
            </li>
            <li>
              Paratha<span>100 Rs</span>
            </li>
          </ul>
        </Link>
        <Link class="card" to="/lunch">
          <h2>Lunches</h2>
          <ul class="list_items">
            <li>
              Veg Thali<span>150 Rs</span>
            </li>
            <li>
              Biryani<span>300 Rs</span>
            </li>
            <li>
              Chinease<span>200 Rs</span>
            </li>
            <li>
              Dal Makhani<span>250 Rs</span>
            </li>
            <li>
              Aloo Gobi<span>220 Rs</span>
            </li>
          </ul>
        </Link>
        <Link class="card" to="/dinner">
          <h2>Dinner</h2>
          <ul class="list_items">
            <li>
              Mattar Panner<span>250 Rs</span>
            </li>
            <li>
              Dal Makhani<span>220 Rs</span>
            </li>
            <li>
              Chana Masala<span>230 Rs</span>
            </li>
            <li>
              Pulao<span>180 Rs</span>
            </li>
            <li>
              Veg Kurma<span>250 Rs</span>
            </li>
          </ul>
        </Link>
      </div>
    </section>
  );
};
export default HomeMenu;
