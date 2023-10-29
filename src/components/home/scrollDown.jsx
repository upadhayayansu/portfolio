import React from "react";
import { BsMouse } from "react-icons/bs";

function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button  button--flex">
        <BsMouse size={24} style={{ color: "var(--title-color)" }} />
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow wheel"></i>
      </a>
    </div>
  );
}

export default ScrollDown;
