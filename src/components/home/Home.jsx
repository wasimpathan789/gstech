import "./Home.css";
import { TbTargetArrow, TbWorld } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeCard from "./components/HomeCard";
import Landingpage from "./Landingpage";
import ParagraphContainer2 from "../service/ParagraphContainer2";
import ServiceImageContainer from "../service/ServiceImageContainer";

import iTImage from "../../assets/images/it1.jpg";
import chooseUs from "../../assets/images/artificial.jpg";
import student from "../../assets/images/student.jpg";
// icons
import vision from "../../assets/images/icon/vision.png";
import mission from "../../assets/images/icon/mission.png";

import existance from "../../assets/images/existance.png";

// import chooseUs from "../../assets/images/choose.png";

import ParagraphContainer from "../service/ParagraphContainer";
import SolutionCard from "./components/SolutionCard";
import { Link } from "react-router-dom";
import Testomonial from "./components/Testomonial";
import OurCustomer from "./components/OurCustomer";
import {
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
  customer7,
} from "../../utils/images";

const Home = () => {
  return (
    <div className="homeContainer">
      <Landingpage />
      <div className="homeContaierWrapper">
        {/* first contetn  */}
        <div className="itConsulting">
          <div className="itCotainerLeft">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Golden Solutions
            </h1>
            <ParagraphContainer
              animation={"fade-right"}
              text={
                " KSA based, GS Technology is a technology and consulting firm offering future-ready solutions to its clients across the globe. Our experience is designing smart and scalable business solutions. Working with global enterprises across industries, customer-centric approach, astute insights, strategic partnerships, creativity and passion for excellence drive our client’s transformation to empower them to turn into truly dynamic, agile, and adaptable enterprises. "
              }
            />
          </div>
          <ServiceImageContainer animation={"fade-right"} image={iTImage} />
        </div>
        <div className="ourTargetContainer">
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className="ourTarget"
          >
            <TbTargetArrow className="targetIcon" />
            <h4 data-aos="fade-down-right" data-aos-duration="1000">
              OUR TARGET
            </h4>
            <p data-aos="fade-down-right" data-aos-duration="1000">
              Our Target to satisfy customer requirements and give them the best
              service in industry
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            className="ourTarget"
          >
            <TbTargetArrow className="targetIcon" />
            <h4 data-aos="fade-up-left" data-aos-duration="1000">
              OUR IDEAS
            </h4>
            <p data-aos="fade-up-left" data-aos-duration="1000">
              We serve unique service for every customer by our trained and
              creative staffs
            </p>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-duration="1000"
            className="ourTarget"
          >
            <TbTargetArrow className="targetIcon" />
            <h4 data-aos="fade-down-left" data-aos-duration="1000">
              OUR GROWTH
            </h4>
            <p data-aos="fade-down-left" data-aos-duration="1000">
              By fulfilling clients heart due to our quality output, we are top
              growing company in the industry.
            </p>
          </div>
        </div>

        {/* second conent  */}
        <div className="itConsulting itConsulting2">
          <ServiceImageContainer animation={"fade-right"} image={chooseUs} />
          <div className="itCotainerLeft itCotainerLeft2">
            <h1 data-aos="fade-left" data-aos-duration="1000">
              Exclusive benefits
            </h1>
            <h3 style={{ color: "white", fontSize: "20px" }}>
              You should choose us
            </h3>

            <ParagraphContainer2
              animation={"fade-right"}
              text={
                " We are the number one choice for our esteemed clients. Enriched with a team of technological and experienced experts, we are confident to locater to your business needs and execute them successfully. We combine consulting and technology to create outstanding experiences for your customers - from backend integration solutions, through process digitalization to innovative business models. "
              }
            />
          </div>
        </div>

        <div className="ourCurrent">
          <h1>OUR CURRENT EXISTENCE ACROSS THE GLOBE</h1>
          <div className="ourCurrentImage">
            <img src={existance} alt="" />
          </div>
        </div>
        <div className="ourCompanyProjectCotainer">
          <div className="ourCompanyCards">
            <div className="ourCard">
              <TbWorld
                className="ourCardIcon"
                style={{ fontSize: "50px", color: "#00FF84" }}
              />
              <h1>Countries</h1>
              <p>4 +</p>
            </div>
            <div className="ourCard">
              <TbWorld
                className="ourCardIcon"
                style={{ fontSize: "50px", color: "#00FF84" }}
              />
              <h1>Clients</h1>
              <p>30+</p>
            </div>
            <div className="ourCard">
              <TbWorld
                className="ourCardIcon"
                style={{ fontSize: "50px", color: "#00FF84" }}
              />
              <h1>Projects</h1>
              <p>40 +</p>
            </div>
            <div className="ourCard">
              <TbWorld
                className="ourCardIcon"
                style={{ fontSize: "50px", color: "#00FF84" }}
              />
              <h1>Team Members</h1>
              <p>25 +</p>
            </div>
            <div className="ourCard">
              <TbWorld
                className="ourCardIcon"
                style={{ fontSize: "50px", color: "#00FF84" }}
              />
              <h1>Team Experience</h1>
              <p>20 +</p>
            </div>
          </div>
        </div>

        <div className="ourCustomer">
          <OurCustomer
            image1={customer1}
            image2={customer2}
            image3={customer3}
            image4={customer4}
            image5={customer5}
            image6={customer6}
            image7={customer7}
            width={"150px"}
            height={"150px"}
            swiperHeight={"200px"}
          />
        </div>

        <div className="greetings">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Greetings
          </h1>

          <div className="greetingWrapper">
            <div className="greetingLeft">
              <h5 data-aos="fade-left" data-aos-duration="1000">
                We proudly introduced GS Technology from our vast business
                experience over a period of a decades in different industries in
                the Kingdom of Saudi Arabia, which includes Consulting,
                Technology, Constructions, Operations, and supply chain business
                activities all over the Kingdom. Bin Hadi Investment Group
                design concept was formed by a group of expertise intellectuals
                who has tremendous knowledge of Consulting, Technology,
                Constructions, Logistics, Retail, and other related industries
                and its value chain. Such a vast experie​​nce in the business
                confers us the power to dream. Whatever goal we have in our
                life, the beginning is knowledge and experience. We enjoy a
                strong reputation, vast experience, and through knowledge
              </h5>
            </div>
            <div className="greetingRight">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                src={student}
                alt=""
              />
            </div>
          </div>

          <div className="ourVisionContainer">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="ourVision"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={vision}
                alt=""
              />
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Our Vision
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000">
                To be a world class information technology solutions provider
                focused on creating value for business.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="ourVision"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={mission}
                alt=""
              />
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Our Mission
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000">
                Deliver effective IT solutions and quality services to enhance
                the competitive advantages of our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="newServices">
          <h3
            style={{
              textAlign: "start",
              paddingLeft: "18px",
              fontSize: "20px",
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Our services
          </h3>
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Golden Solutions Services
          </h1>
          <div className="newServicesCards">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  IT Consulting
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  " IT consulting services are advisory services that help
                  clients assess different technology strategies and, in doing
                  so, align their technology strategies with their business or
                  process strategies. These services support customers’ IT
                  initiatives..."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/it"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Digital Technology Solution
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  " Digital is changing how we all do business, disrupting every
                  element including business processes, models, and customer
                  interactions. Our digital solutions offer you both a roadmap
                  for transformation as well as the technology to truly go
                  digital. "
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/digital"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Business Application Solution
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  " GS Technology expertly guide you to build enterprise-grade
                  applications that place your customers at the center of your
                  business. Make your business smarter and more agile with
                  game-changing enterprise software."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/business"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Project Management
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  " Keep your organization's most strategic projects on time and
                  on budget to keep your employees learning and focused, and to
                  keep accelerating your project management success no matter
                  what the environment."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/project"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  IT Infrastructure Solution
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  " GS Technology delivers complete IT infrastructure solutions
                  for a range of data and workload requirements, enabling you to
                  accelerate innovation, adapt to evolving requirements and stay
                  in control of IT operations."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/infra"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  Governance, Ristk and Appliances
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  " Governance, Risk, and Compliance (GRC) is a structured way
                  to align IT with business goals while managing risks and
                  meeting all industry and government regulations. It includes
                  tools and processes to unify an organization's governance and
                  risk management ..."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/governance"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="newServicesCard"
            >
              <div className="newServicesCardTop">
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  MIS Solution
                </h3>
              </div>

              <div className="newServicesCardDescription">
                <h5 data-aos="fade-right" data-aos-duration="1000">
                  " Management Information Systems (MIS) is the study of
                  people,technology, organizations, and the relationships among
                  them. MIS professionals help firms realize maximum benefit
                  from investment in personnel, equipment, and business
                  processes."
                </h5>
              </div>
              <div className="newServiceCardBottom">
                <Link
                  style={{ textDecoration: "none" }}
                  className="newServiceCardBottomLink"
                  to={"/service/msi"}
                >
                  <h5 data-aos="fade-right" data-aos-duration="1000">
                    Read More
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="testomonialCotainer">
          <h3>Testimonials feedback</h3>

          <h1>What our clients think</h1>
          <Testomonial />
        </div>
      </div>

      {/* <div className="hServices">
        <h3>OUR SERVICES</h3>
        <h1>Golden Solutions Services</h1>
        <div className="hServiceCards1">
          <SolutionCard
            title={"IT Consulting"}
            description={
              "IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies. These services support customers’ IT initiatives by providing strategic, architectural, operational and implementation planning... "
            }
          />
          <SolutionCard
            title={"Business Application Solution"}
            description={
              " GS Technology expertly guide you to build enterprise-grade applications that place your customers at the center of your business. Make your business smarter and more agile with game-changing enterprise software. "
            }
          />
          <SolutionCard
            title={"Project Management"}
            description={
              "Keep your organization's most strategic projects on time and on budget to keep your employees learning and focused, and to keep accelerating your project management success no matter what the environment. "
            }
          />
          <SolutionCard
            title={"IT Infrastructure Solution"}
            description={
              "GS Technology delivers complete IT infrastructure solutions for a range of data and workload requirements, enabling you to accelerate innovation, adapt to evolving requirements and stay in control of IT operations. "
            }
          />
          <SolutionCard
            title={"Governance, Ristk and Appliances"}
            description={
              "Governance, Risk, and Compliance (GRC) is a structured way to align IT with business goals while managing risks and meeting all industry and government regulations. It includes tools and processes to unify an organization's governance and risk management with its technological innovation and adoption. Companies use GRC to achieve organizational goals reliably, remove uncertainty, and meet compliance requirements. "
            }
          />
          <SolutionCard
            title={"Digital Technology Solution"}
            description={
              "Digital is changing how we all do business, disrupting every element including business processes, models, and customer interactions. Our digital solutions offer you both a roadmap for transformation as well as the technology to truly go digital. "
            }
          />
          <SolutionCard
            title={"MIS Solution"}
            description={
              "Management Information Systems (MIS) is the study of people,technology, organizations, and the relationships among them. MIS professionals help firms realize maximum benefit from investment in personnel, equipment, and business processes."
            }
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
