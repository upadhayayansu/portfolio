import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <box-icon className="award about__icon"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__title">1 years working</span>
      </div>
      <div className="about__box">
        <box-icon name="briefcase-alt about__icon"></box-icon>
        <h3 className="about__title">Completed</h3>
        <span className="about__title">12+projects</span>
      </div>
      <div className="about__box">
        <box-icon name="support about__icon"></box-icon>
        <h3 className="about__title">Support</h3>

        <span className="about__title">online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
