import user1 from "../../img/User-1.jpeg";
import user2 from "../../img/User-2.jpeg";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section class="testimonial">
      <h1>Testimonial</h1>
      <div className="testi-cards">
        <div className="testi-card">
          <img src={user1} alt="just" />
          <p>
            The food is always delicious and the service you provide is
            outstanding
          </p>
          <h3>Vedant</h3>
        </div>
        <div className="testi-card">
          <img src={user2} alt="just" />
          <p>Good to see so many different variety of food to order</p>
          <h3>Amit</h3>
        </div>
        <div className="testi-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="just"
          />
          <p>
            Everytime I order this food it is consistently delicious as well as
            fresh
          </p>
          <h3>Mahesh</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
