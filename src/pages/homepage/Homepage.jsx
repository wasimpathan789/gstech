import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Contactpage from "../contact/Contactpage";
import Home from "../../components/home/Home";

const Homepage = () => {
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <Navbar />
      <div className="homePagecontent">
        <Home />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
