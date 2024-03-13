import Footer from "./Footer";
import HomeMenu from "./HomeMenu";
import NavSection from "./NavSection";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
        <NavSection />
      </div>
      <HomeMenu />
      <Testimonial />
    </div>
  );
};

export default Home;
