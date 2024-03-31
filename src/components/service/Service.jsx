import { Link, NavLink, Outlet } from "react-router-dom";
import "./Service.css";
import { servicesLink } from "../../data";
import { useState } from "react";

const Service = ({ Children }) => {
  const [active, setActive] = useState(null);
  return (
    <div className="serviceContainer">
      <div className="serviceContainerWrapper">
        <h1 data-aos="fade-left" data-aos-duration="1000">
          Our Golden Servies
        </h1>
        <h5 data-aos="fade-right" data-aos-duration="1000">
          We deal with following services.
        </h5>

        <div className="serviceWrapper">
          {servicesLink.map((link) => (
            <NavLink
              data-aos="fade-left"
              data-aos-duration="1000"
              // className="serviceNavLinks "
              // className={({ isActive }) =>
              //   isActive ? "active" : "serviceNavLinks"
              // }
              className={`serviceNavLinks ${active == link && "active"}`}
              to={link.route}
              style={{ textDecoration: "none" }}
            >
              <p>{link.title}</p>
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Service;
