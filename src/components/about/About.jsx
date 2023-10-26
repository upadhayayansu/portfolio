import React from "react";
import "./about.css";
import AboutImg from "../../assets/pp.png";
import Info from "./Info";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
        </div>

        <p className="about__description">
          Frontend developer,I create webpages with UI/UX user interface.
        </p>
        <a href="" className="button button--flex"></a>
      </div>
    </section>
  );
};

export default About;
