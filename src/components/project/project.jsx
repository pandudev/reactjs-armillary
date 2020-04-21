import React from "react";
import "./project.css";
import { Link } from "react-router-dom";

const Project = (props) => {
  const linkToDetail = `/${props.username}/repository/${props.project.name}`;
  return (
    <div className="project">
      <Link to={linkToDetail}>
        <h4>{props.project.name}</h4>
      </Link>

      <p>{props.project.language}</p>
    </div>
  );
};

export default Project;
