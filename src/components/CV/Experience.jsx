import Experiences from './Experiences.json';
import { React, useState, useEffect } from 'react';

export default function Experience() {
  let experienceList = (exp) => {
    return (
      <dl className="">
        <dt>{exp[1].name}</dt>
        <dd>{exp[1].company}</dd>
        <dd>{exp[1].when}</dd>
      </dl>
    );
  };

  const work = Object.entries(Experiences.workExperience).map(experienceList);
  const volunteering = Object.entries(Experiences.volunteering).map(
    experienceList
  );
  const education = Object.entries(Experiences.education).map(experienceList);
  const courses = Object.entries(Experiences.courses).map(experienceList);

  return (
    <div className="experience">
      <div>{work}</div>
      <div>{volunteering}</div>
      <div>{education}</div>
      <div>{courses}</div>
    </div>
  );
}
