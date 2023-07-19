import React from "react";
import Button from "./Button";
export default function Project({ title, src, alt, github, children, live }) {
  return (
    <div className="project--container">
      <img src={src} alt={alt} className="project--img" />
      <h3 className="project--text project--title">{title}</h3>
      <div className="project--description project--text">
        <p>{children}</p>
        <ul className="project--links">
          <Button theme="primary" href={github} className="project--link">
            View Github
          </Button>
          <Button theme="secondary" href={live} className="project--link">
            View Live
          </Button>
        </ul>
      </div>
    </div>
  );
}
