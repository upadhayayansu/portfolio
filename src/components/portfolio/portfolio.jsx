import React from "react";
import "./portfolio.css";
import Project from "../card/card";

const Portfolio = () => {
  return (
    <section className="portfolio__section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Technical Portfolio</span>

      <div className="portfolio__container  ">
        <Project
          img="/framermotion.png"
          title="Framer Motion-NFT"
          tags={["TS", "Next", "Framer Motion"]}
          desc="Framer Motion-NFT is a NFT project made using framer. The project showcases my skills and understanding animations."
          link="https://framer-motion-nft.netlify.app/"
        />
        <Project
          img="/filtering.png"
          title="Ecommerce Filtering System"
          tags={["JS", "React"]}
          desc="Part of an Ecommerce project which will filter the data and displays expected results."
          link="https://filtering-sys.netlify.app/"
        />
        <Project
          img="/portfolio.png"
          title="Portfolio"
          tags={["React", "Portfolio"]}
          desc="Portfolio Showcasing my skills and experience in web development."
          link="https://courageous-moonbeam-8a6d47.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
