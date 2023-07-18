import React from "react";
export default function Project({ title, src, alt, github, children, live }) {
  return (
    <div className="project--container">
      <img src={src} alt={alt} className="project--img" />
      <h3 className="project--text project--title">{title}</h3>
      <div className="project--description project--text">
        <p>{children}</p>
        <ul className="project--links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project--link"
          >
            View Github
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project--link"
          >
            View Live
          </a>
        </ul>
      </div>
    </div>
  );
}
