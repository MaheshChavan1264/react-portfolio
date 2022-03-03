import React from "react";
import "./footer.css";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        SilentCoder
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Mahesh1264">
          <BsFacebook />
        </a>
        <a href="https://twitter.com/mahesh1264">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/silentcoder_/">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
