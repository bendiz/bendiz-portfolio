import React from "react";
export default function Project({ src, alt, github, children, live }) {
  return (
    <div className="project">
      <img src={src} alt={alt} className="project--img" />
      <div className="project--description">
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
        <p>{children}</p>
      </div>
    </div>
  );
}
