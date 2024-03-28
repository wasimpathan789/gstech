import "./AboutUs.css";

// images
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

// icons
import { TbWorld } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUs">
        <div className="aboutUsTop">
          <h1>About Us</h1>
          <h5>
            KSA-based, GS Tech is a technology and technology firm offering
            future-ready solutions to its clients across the globe. <br /> Our
            experience is designing smart and scalable business solutions.
          </h5>
        </div>
        <div className="aboutUsBottom">
          <div className="aboutUsBottomLeft">
            <div className="oneImage">
              <div className="firstImage">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="twoImage">
              <div className="secondImage">
                <img src={image2} alt="" />
              </div>
              <div className="thirdImage">
                <img src={image3} alt="" />
              </div>
            </div>
          </div>
          <div className="aboutUsBottomRight">
            <h1> Welcome to Golden Solutions Information Technology Compnay</h1>
            <div>
              <h3>
                Our experienced team is the key driving force that ensures the
                delivery of holistic consulting and business solutions across
                industry verticals. We co-create both immediate and long-term
                business solutions, by leveraging our core consulting services
                and deploying them through a flexible delivery model.
              </h3>
              <h5>
                With our broad portfolio of services and cross-functional
                capabilities, we respond to complex business challenges faced by
                our clients, by offering informed perspectives and delivering
                clear business results. Partnering with our clients, we help
                achieve outstanding business value through the acquisition of
                new capabilities, increased competitive strength, and an
                expanded global footprint
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* our company  */}
      <div className="ourCompany">
        <h1>Our Company</h1>
        <h5>
          KSA-based, GS Tech is a technology and technology firm offering
          future-ready solutions to its clients across the globe. Our experience
          is designing smart and scalable business solutions. Working with
          global enterprises across industries, customer-centric approach,
          astute insights, strategic partnerships, creativity, and passion for
          excellence drive our client’s transformation to empower them to turn
          into truly dynamic, agile, and adaptable enterprises
        </h5>
        <div className="ourCompanyCards">
          <div className="ourCard">
            <TbWorld style={{ fontSize: "64px", color: "#00FF84" }} />
            <h1>Countries</h1>
            <p>4 +</p>
          </div>
          <div className="ourCard">
            <TbWorld style={{ fontSize: "64px", color: "#00FF84" }} />
            <h1>Clients</h1>
            <p>30+</p>
          </div>
          <div className="ourCard">
            <TbWorld style={{ fontSize: "64px", color: "#00FF84" }} />
            <h1>Projects</h1>
            <p>40 +</p>
          </div>
          <div className="ourCard">
            <TbWorld
              style={{ fontSize: "64px", color: "#00FF84", marginTop: "-10px" }}
            />
            <h1>Team Members</h1>
            <p>25 +</p>
          </div>
          <div className="ourCard">
            <TbWorld style={{ fontSize: "64px", color: "#00FF84" }} />
            <h1>Team Experience</h1>
            <p>20 +</p>
          </div>
        </div>
      </div>

      {/* technology we work  */}
      <div className="technology">
        <h1> Technology Platforms We Work With</h1>
        {/* <AboutSlider/> */}

        <h1>Application Platforms We Work With</h1>
      </div>
    </div>
  );
};

export default AboutUs;
