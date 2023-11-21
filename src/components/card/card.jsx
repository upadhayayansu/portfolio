import React from "react";
import "./card.css";

const Project = (props) => {
  return (
    <div className="Cardcontainer">
      <div className="card">
        <div className="cardHeader">
          <img src={props.img} alt="rover" />
        </div>
        <div className="cardBody">
          <span className="tag tagTeal">{props.tags}</span>
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <a
            className="link"
            href={props.link}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Website Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
