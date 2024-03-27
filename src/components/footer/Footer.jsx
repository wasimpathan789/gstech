import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">
                  KSA-based, GS Tech is a technology and technology firm
                  offering future-ready solutions to its clients across the
                  globe. Our experience is designing smart and scalable business
                  solutions.
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="#">
                  Abu Bakr Siddique, Narjis Building, Post Box - 12301, Riyadh -
                  11473, Saudi Arabia.
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Email Address</h4>
            <ul>
              <li>
                <a href="#">hello@gstech.com.sa</a>
              </li>
              <li>
                <a href="#">hello@gstech.com.sa</a>
              </li>
            </ul>
          </div>
		  <div className="footer-col">
            <h4>Email Address</h4>
            <ul>
              <li>
                <a href="#">hello@gstech.com.sa</a>
              </li>
              <li>
                <a href="#">hello@gstech.com.sa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="#">
            <FaLinkedin style={{ fontSize: "40px" }} />
          </a>
          <a href="#">
            <FaInstagram style={{ fontSize: "40px" }} />
          </a>

          <a href="#">
            <FaLinkedin style={{ fontSize: "40px" }} />
          </a>
          <a href="#">
            <FaInstagram style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
