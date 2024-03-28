import { Link, Outlet } from "react-router-dom";
import "./Service.css";

const Service = ({ Children }) => {
  return (
    <div className="serviceContainer">
      <div className="serviceContainerWrapper">
        <h1>Our Golden Servies</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dicta.
        </h5>

        <div className="serviceWrapper">
          <Link
            className="serviceNavLinks active"
            to={"/service/it"}
            style={{ textDecoration: "none" }}
          >
            <p>IT Consulting </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/business"}
            style={{ textDecoration: "none" }}
          >
            <p>
              Business <br /> Application <br /> Solution
            </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/digital"}
            style={{ textDecoration: "none" }}
          >
            <p>
              Digital <br /> Technology <br /> Solution
            </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/it"}
            style={{ textDecoration: "none" }}
          >
            <p>
              Project <br /> Management
            </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/it"}
            style={{ textDecoration: "none" }}
          >
            <p>
              IT <br /> Infrastructure <br /> Solution
            </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/it"}
            style={{ textDecoration: "none" }}
          >
            <p>
              Governance, <br /> Risk and Compliances
            </p>
          </Link>
          <Link
            className="serviceNavLinks"
            to={"/service/msi"}
            style={{ textDecoration: "none" }}
          >
            <p>
              MIS <br /> Solution
            </p>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Service;
