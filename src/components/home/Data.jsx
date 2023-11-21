import React from "react";
import { PiHandWavingFill } from "react-icons/pi";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Ansu Upadhayay</h1>
      <h3 className="home__subtitle">Visual Designer</h3>
      <p className="home__description">
        A React developer driven by unwavering passion and dedication.
      </p>
      <a href="#contact" className="button button__flex">
        Say Helllo
        <PiHandWavingFill size={20} />
      </a>
    </div>
  );
};

export default Data;
