import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import MyPortfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <MyPortfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
