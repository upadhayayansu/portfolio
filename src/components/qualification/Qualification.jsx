import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggletab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="{toggleState=== 1qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__content"></div>
        <div className="qualification__data">
          <div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div>
            <h3 className="qualification__title">Web designer</h3>
            <span className="qualification__subtitle">surkhet-Institute</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i>2023-present
            </div>
          </div>
          <div>
            <h3 className="qualification__title">Ux Designer</h3>
            <span className="qualification__subtitle">Surkhet-Institute</span>
            <i className="uil uil-calendar-alt"></i>2022
          </div>

          <div>
            <div>
              <h3 className="qualification__title">Ux Expert</h3>
              <span className="qualification__subtitle">Surkhet-Institute</span>
              <i className="uil uil-calendar-alt"></i>2022
            </div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
