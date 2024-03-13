import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="left_con">
        <h1>Food House</h1>
        <p>
          Welcome to our food delivery app! We are dedicated to providing you
          with delicious meals delivered straight to your doorstep
        </p>
        <div class="logopng">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
      <div class="right_con">
        <h1>Contact Us</h1>
        <div class="info">
          <p>Address :- XYZ road,Pune,Maharastra,India</p>
          <p>phone :- +91 111-111-111</p>
          <p>Email :- amitlandge333@gmail.com</p>
        </div>
        <div class="payment">
          <h2>Payment Method</h2>
          <div className="paymentlogo">
            <i class="fa-brands fa-google-pay"></i>
            <i class="fa-brands fa-paypal"></i>
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-stripe"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
