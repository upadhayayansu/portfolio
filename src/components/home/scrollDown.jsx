import React from "react";

function scrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button  button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="https://WWW.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.77510,72.843"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokewidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokewidth: "20px",
            }}
          ></path>
        </svg>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
}

export default scrollDown;
