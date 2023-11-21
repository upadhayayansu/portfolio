import React from "react";
import "./portfolio.css";
import Project from "../card/card";

const Portfolio = () => {
  return (
    <section className="portfolio__section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Technical Portfolio</span>

      <div className="portfolio__container container ">
        <Project
          img="blog"
          title="Bloggy"
          tags="MERN"
          desc="Bloggy is a blog web app developed in MERN stack. It contains user login and register logic where user can write and post blogs."
          link="https://courageous-moonbeam-8a6d47.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
