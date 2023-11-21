import React from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Frontend = () => {
  return (
    <div className="skills__content">
      {/* <h3 className="skills__title">Frontend developer</h3> */}
      <div className="skills__box">
        <div className="skills__data">
          <FaHtml5 size={42} />
          <h3 className="skills__name">HTML</h3>
          <span className="skills__level">Basic</span>
        </div>
        <div className="skills__data">
          <FaCss3Alt size={42} />
          <h3 className="skills__name">CSS</h3>
          <span className="skills__level">Basic</span>
        </div>
        <div className="skills__data">
          <IoLogoJavascript size={42} />
          <h3 className="skills__name">Javascript</h3>
          <span className="skills__level">Basic</span>
        </div>
        <div className="skills__data">
          <img
            width={42}
            height={42}
            style={{ objectFit: "contain" }}
            src="scss.svg"
          />
          <h3 className="skills__name">Sass</h3>
          <span className="skills__level">Basic</span>
        </div>
        <div className="skills__data">
          <FaGithub size={42} />
          <h3 className="skills__name">Git</h3>
          <span className="skills__level">Basic</span>
        </div>
        <div className="skills__data">
          <FaReact size={42} />
          <h3 className="skills__name">React</h3>
          <span className="skills__level">Basic</span>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
