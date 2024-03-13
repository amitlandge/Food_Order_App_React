import React from "react";
import "./AboutPage.css"; 
import Navbar from "./Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <div className="about-container">
        <h1 className="headline">About Us</h1>
        <p>
          Welcome to our food delivery app! We are dedicated to providing you
          with delicious meals delivered straight to your doorstep.
        </p>
        <p>
          Our mission is to make ordering food convenient and enjoyable for you.
          With a wide range of restaurants to choose from and seamless ordering
          process, we strive to bring you the best dining experience at your
          fingertips.
        </p>
        <p>
          Whether you're craving pizza, sushi, burgers, or anything in between,
          we've got you covered. Sit back, relax, and let us take care of your
          hunger.
        </p>
        <p>
          Thank you for choosing our food delivery app. We look forward to
          serving you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
