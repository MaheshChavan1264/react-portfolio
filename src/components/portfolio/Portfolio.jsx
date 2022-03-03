import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/p2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.png";
import IMG5 from "../../assets/p5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio",
    github: "https://github.com/MaheshChavan1264/portfolio",
    demo: "https://portfolio-gold-seven.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio in React",
    github: "https://github.com/MaheshChavan1264/react-portfolio",
    demo: "https://react-portfolio-delta-ruby.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ToDo App in React using redux",
    github: "https://github.com/MaheshChavan1264/todo-app-reactjs-redux",
    demo: "https://todo-app-reactjs-redux.vercel.app/",
  },

  {
    id: 5,
    image: IMG4,
    title: "Birthday Reminder using React",
    github:
      "https://github.com/MaheshChavan1264/birthday-reminder-reactjs-project",
    demo: "https://birthday-reminder-reactjs-project.vercel.app/",
  },
  {
    id: 6,
    image: IMG5,
    title: "Color Pallate Generator using React",
    github: "https://github.com/MaheshChavan1264/color-generator-reactjs",
    demo: "https://color-generator-reactjs.vercel.app/",
  },
];

const MyPortfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MyPortfolio;
