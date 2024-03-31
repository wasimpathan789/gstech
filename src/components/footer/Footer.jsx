import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div data-aos="fade-right" data-aos-duration="1000" className="footerTop">
        <div data-aos="fade-right" data-aos-duration="1000" className="row">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="footer-col"
          >
            <h4 data-aos="fade-right" data-aos-duration="1000">
              company
            </h4>
            <ul data-aos="fade-right" data-aos-duration="1000">
              <li data-aos="fade-right" data-aos-duration="1000">
                <a data-aos="fade-right" data-aos-duration="1000" href="#">
                  KSA-based, GS Tech is a technology and technology firm
                  offering future-ready solutions to its clients across the
                  globe. Our experience is designing smart and scalable business
                  solutions.
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="footer-col"
          >
            <h4 data-aos="fade-right" data-aos-duration="1000">
              Address
            </h4>
            <ul data-aos="fade-right" data-aos-duration="1000">
              <li data-aos="fade-right" data-aos-duration="1000">
                <a data-aos="fade-right" data-aos-duration="1000" href="#">
                  Abu Bakr Siddique, Narjis Building, Post Box - 12301, Riyadh -
                  11473, Saudi Arabia.
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="footer-col"
          >
            <h4 data-aos="fade-left" data-aos-duration="1000">
              Email Address
            </h4>
            <ul data-aos="fade-left" data-aos-duration="1000">
              <li data-aos="fade-left" data-aos-duration="1000">
                <a data-aos="fade-left" data-aos-duration="1000" href="#">
                  hello@gstech.com.sa
                </a>
              </li>
              <li data-aos="fade-left" data-aos-duration="1000">
                <a data-aos="fade-left" data-aos-duration="1000" href="#">
                  hello@gstech.com.sa
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="footer-col"
          >
            <h4 data-aos="fade-left" data-aos-duration="1000">
              Email Address
            </h4>
            <ul data-aos="fade-left" data-aos-duration="1000">
              <li data-aos="fade-left" data-aos-duration="1000">
                <a data-aos="fade-left" data-aos-duration="1000" href="#">
                  hello@gstech.com.sa
                </a>
              </li>
              <li data-aos="fade-left" data-aos-duration="1000">
                <a data-aos="fade-left" data-aos-duration="1000" href="#">
                  hello@gstech.com.sa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="footerBottom">
        <h4 data-aos="fade-up" data-aos-duration="1000">
          follow us
        </h4>
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
