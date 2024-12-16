import React from "react";
import "./NavBar.css";
import navLogo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navsec">
      <nav className="navbody">
        <img src={navLogo} alt="" width={200} />

        <div className="navlinks">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
          <a href="">Blog</a>
          <a href="">Contact Us</a>
          <a href="">Co-Working Space</a>
          <a href="">Academy</a>
        </div>

        <div className="buttondiv">
          <button className="navbutton">Start a Project</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
