import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Ansu Upadhayay</h1>
      <h3 className="home__subtitle">Visual Designer</h3>
      <p className="home__description">
        A React developer driven by unwavering passion and dedication.
      </p>
      <a href="#contact" className="button button--flex">
        Say Helllo
        <svg
          className="button-icon"
          xmlns="http://WWW.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352c13.0399 21.9352 11.3699 21.1052"
            fill="var(--container-color)"
          ></path>
          <path
            d="M10.11 14.7052c9.92005 14.7052 9.73005 14.6352"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
