import "./Contactpage.css";

// icons
import { FaLocationDot, FaPhoneVolume, FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// pages
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

const Contactpage = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;
