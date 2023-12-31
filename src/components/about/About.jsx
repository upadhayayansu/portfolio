import React from "react";
import "./about.css";
import AboutImg from "../../assets/pp.png";
import Info from "./Info";

import { HiDocumentDownload } from "react-icons/hi";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            {`I'm Ansu Upadhayay, a React developer with a passion for crafting
              interactive web experiences. Let's collaborate and create something
              exceptional. Explore my portfolio to see my work!`}
          </p>
          <a href="/cv.pdf" target="_blank" className="button button__flex">
            Download CV
            <HiDocumentDownload
              size={24}
              style={{ color: "var(--container-color)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
