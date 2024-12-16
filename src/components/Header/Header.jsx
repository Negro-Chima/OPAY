import React from "react";
import "./Header.css";
import woman from "../../assets/woman.png";

const Header = () => {
  return (
    <div>
      <div>
        <img src={woman} alt="" />
      </div>

      {/* ==================================== */}
      <div>
        <h1>
          We Provide Cutting-Edge <span>Software</span> Solutions{" "}
        </h1>

        <p>
          At the heart of our mission is transforming your vision into reality.{" "}
          We provide tailored software solutions to meet your business needs.
          From conceptualization to launch, we turn your ideas into functional
          applications.
        </p>

        <button>Start a Project</button>
      </div>
    </div>
  );
};

export default Header;
