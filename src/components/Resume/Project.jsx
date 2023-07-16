import React from "react";
export default function Project({ src, alt, github, description }) {
  return (
    <div className="project">
      <img src={src} alt={alt} className="project--img" />
      <div className="project--description">
        <ul className="links">
          <a href={github}>Github</a>
          <a href={src}>Live</a>
        </ul>
        <p>{description}</p>
      </div>
    </div>
  );
}
