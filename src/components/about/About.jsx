import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import Me from "../../assets/me-4.jpg";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { FiFolder } from "react-icons/fi";
const About = () => {
  return (
    <section id="about">
      <h5>Get Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiFolder className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>

            <article className="about__card">
              <TiPointOfInterestOutline className="about__icon" />
              <h5>Hobbies</h5>
              <small>Video Games, Coding, Watching netflix</small>
            </article>
          </div>
          <p>
            Debugging is twice as hard as writing the code in the first
            place.Therfore, if you write the code as cleverly as possible, you
            are, by definition, not smart enough to debug it. - Rajanand
            <br />
            Most good programmers do programming not because they expect to get
            paid or get adulation by the public, but because it is fun to
            program. - Rajanand
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
