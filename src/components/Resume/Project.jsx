import React from "react";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Project({ title, src, alt, github, children, live }) {
  return (
    <div className="project--container">
      <img src={src} alt={alt} className="project--img" />
      <h3 className="project--text project--title">{title}</h3>
      <div className="project--description project--text">
        <p>{children}</p>
        <ul className="project--links">
          <Button theme="secondary" href={github} className="project--link">
            View Github <AiOutlineArrowRight />
          </Button>
          <Button theme="secondary" href={live} className="project--link">
            View Live <AiOutlineArrowRight />
          </Button>
        </ul>
      </div>
    </div>
  );
}
