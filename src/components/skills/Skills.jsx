import React from "react";
import "./Skills.css";
import Frontend from "./frontend";

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="skills__subtitle">My Technical Skills</span>

      <div className="skills__container container ">
        <Frontend />
        {/* <Backend /> */}
      </div>
    </section>
  );
};

export default Skills;
