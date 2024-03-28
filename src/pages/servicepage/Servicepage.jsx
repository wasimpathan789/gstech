import "./Servicepage.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Service from "../../components/service/Service";

const Servicepage = () => {
  return (
    <div className="servicepage">
      <Navbar />
      <Service />
      <Footer />
    </div>
  );
};

export default Servicepage;
