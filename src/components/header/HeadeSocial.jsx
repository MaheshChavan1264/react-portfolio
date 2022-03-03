import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const HeadeSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/MaheshChavan1264">
        <BsLinkedin />
      </a>
      <a href="https://www.linkedin.com/in/mahesh-chavan-939738135/">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/silentcoder_/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeadeSocial;
