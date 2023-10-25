import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import scrollDown from "./scrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid"></div>
        <Home />
        <Social />

        <div className="home__img"></div>
        <Data />
      </div>
      <div>
        <scrollDown />
      </div>
    </section>
  );
};

export default Home;
