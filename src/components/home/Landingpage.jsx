import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import home from "../../assets/images/home1.png";
import "./Landingpage.css";

const landingData = [
  {
    id: 1,
    title: "IT Consulting",
  },
  {
    id: 2,
    title: `Business Application, Solution`,
  },
  {
    id: 3,
    title: "Digital Technology Solution",
  },
  {
    id: 4,
    title: "Project Management",
  },
  {
    id: 5,
    title: "IT Infrastructure Solution",
  },
  {
    id: 6,
    title: "Governance Risk and Appliances",
  },
  {
    id: 7,
    title: "MIS Solution",
  },
];

const Landingpage = () => {
  return (
    <div className="landing">
      <div className="landingLeft">
        <h1 data-aos="fade-down-left" data-aos-duration="1000">
          Our Services
        </h1>
        <div className="landingLeftTop">
          <Carousel
            showArrows={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
            autoPlay={true}
          >
            {landingData.map((item) => (
              <div key={item.id} className="landingData">
                <p data-aos="fade-up-left" data-aos-duration="1000">
                  {item.title}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="landingLeftBottom">
          <div className="landingBtnContainer">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="lJoinBtn"
            >
              Requesta quote
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="callUsBtn"
            >
              Call Us
            </div>
          </div>
        </div>
      </div>
      <div className="landingRight">
        <img data-aos="fade-left" data-aos-duration="1200" src={home} alt="" />
      </div>
    </div>
  );
};

export default Landingpage;
