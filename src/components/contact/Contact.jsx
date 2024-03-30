import { FaLocationDot, FaMobileScreen, FaPhoneVolume } from "react-icons/fa6";
import "./Contact.css";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactHeadline">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Contact Us
        </h1>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.1606452051446!2d46.84169687302337!3d24.618147506505316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee347fe7de3bf%3A0xad4d75b19cb5505f!2zR29sZGVuIFNvbHV0aW9ucyBDb21wYW55INi02LHZg9ipINin2YTYrdmE2YjZhCDYp9mE2LDZh9io2YrYqQ!5e0!3m2!1sen!2sin!4v1711692719039!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ borderWidth: "0px" }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address">
        <div className="rightContainer">
          <h1 data-aos="fade-right" data-aos-duration="1200">
            Keep In Touch With Us.
          </h1>
          <h3></h3>

          <div className="addressCards">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="addressCard"
            >
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="cardRight"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="iconDiv"
                >
                  <FaLocationDot
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="icon"
                  />
                </div>
              </div>
              <div className="cardLeft">
                <p data-aos="fade-right" data-aos-duration="1200">
                  Abu Bakr Siddique, Narjis Building, <br /> Post Box - 12301,
                  Riyadh - 11473, <br /> Saudi Arabia.
                </p>
              </div>
            </div>
            <div className="addressCard">
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="cardRight"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="iconDiv"
                >
                  <MdEmail
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="icon"
                  />
                </div>
              </div>
              <div className="cardLeft">
                <p data-aos="fade-right" data-aos-duration="1200">
                  hello@gstech.com.sa
                </p>
              </div>
            </div>
            <div className="addressCard">
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="cardRight"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="iconDiv"
                >
                  <FaPhoneVolume
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="icon"
                  />
                </div>
              </div>
              <div className="cardLeft">
                <p data-aos="fade-right" data-aos-duration="1200">
                  920012913
                </p>
              </div>
            </div>
            <div className="addressCard">
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="cardRight"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="iconDiv"
                >
                  <FaMobileScreen
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="icon"
                  />
                </div>
              </div>
              <div className="cardLeft">
                <p data-aos="fade-right" data-aos-duration="1200">
                  +966 595007999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="leftContainer">
          <h1 data-aos="fade-left" data-aos-duration="1200">
            Send a Message.
          </h1>
          <h3></h3>
          <form action="">
            <div className="formTop">
              <div className="nameContainer">
                <h5 data-aos="fade-left" data-aos-duration="1200">
                  Name
                </h5>
                <input
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  placeholder="Your Name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="nameContainer">
                <h5 data-aos="fade-left" data-aos-duration="1200">
                  Email address
                </h5>
                <input
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  placeholder="Your Email Adress"
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="formTop">
              <div className="nameContainer">
                <h5 data-aos="fade-left" data-aos-duration="1200">
                  Mobile Number
                </h5>
                <input
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  placeholder="Your Mobile Number"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="nameContainer">
                <h5 data-aos="fade-left" data-aos-duration="1200">
                  Phone Number
                </h5>
                <input
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  placeholder="Your Phone Number"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="formBottom">
              <div className="nameContainer">
                <h5 data-aos="fade-left" data-aos-duration="1200">
                  Message...
                </h5>
                <textarea
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  placeholder="Type your message here ..."
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
            <button
              data-aos="fade-right"
              data-aos-duration="1200"
              className="submitBtn"
            >
              <p data-aos="fade-left" data-aos-duration="1200">
                Submit
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
