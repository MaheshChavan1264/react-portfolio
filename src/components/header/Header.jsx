import React from "react";
import "./header.css";
import Buttons from "./buttons";
import Me from "../../assets/me-3.png";
import HeaderSocials from "./HeadeSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5>Hello I'm</h5>
        <h1>Mahesh Chavan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Buttons />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Me" className="image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
