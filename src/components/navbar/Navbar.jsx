import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineClose,MdOutlineMenu } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

import logo from '../../assets/images/logo/logo2.jpg'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <nav className="navbar">
    
      <div className="logo">
        <img src={logo} className="logo" alt="" />
        
      </div>
      <div className="navbarContent">
        <div className="navList">
        <Link className="navLinks" to={"/"} style={{textDecoration:"none"}}>
        <p>Home</p>
        </Link>
        <Link  className="navLinks" to={"/"} style={{textDecoration:"none"}}>
        <p>About Us</p>
        </Link>
        <Link className="navLinks"  to={"/"} style={{textDecoration:"none"}}>
        <p>Our Services
        </p>
        </Link>
        <Link  className="navLinks" to={"/"} style={{textDecoration:"none"}}>
        <p>Contact Us</p>
        </Link>

      </div>
      <div className="callContainer">
        <div className="call" >
        <h2>Call us :</h2>
        <p>+966 595007999</p>

        </div>
        
      </div>

        </div>

        <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <MdOutlineClose style={{ fontSize: "35px", color: "white" }} />
        ) : (
          <RiMenu4Fill style={{ fontSize: "35px", color: "white" }} />
        )}
      </div>
    
        
      

      
    

{/* 
      <ul className={click ? "navbar-lists" : "navbar-lists active"}>
        <li>
          <Link
            data-aos="fade-up"
            data-aos-duration="1500"
            to={"/"}
            className="navbar-links"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            data-aos="fade-up"
            data-aos-duration="1500"
            to={"/aboutpage"}
            className="navbar-links"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            data-aos="fade-up"
            data-aos-duration="1500"
            to={"/services"}
            className="navbar-links"
          >
            Services
          </Link>
        </li>
      
       
        <li>
          <Link
            data-aos="fade-up"
            data-aos-duration="1500"
            to={"/contactpage"}
            className="navbar-links"
          >
            Contact Us
          </Link>
        </li>
      </ul> */}

      

   
    </nav>
  );
};

export default Navbar;