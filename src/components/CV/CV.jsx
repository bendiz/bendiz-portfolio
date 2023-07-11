import React from 'react';
import Experience from './Experience';

export default function CV() {
  const workExperience = {
    company: 'SheCodes',
  };
  return (
    <>
      <div className="CV">
        <h2>Resume</h2>
        <div className="title"></div>
        <div className="skills">
          <h4>Technical</h4>
          <ul>
            <li>HTML, CSS, JavaScript, React, Python</li>
            <li>Git, Github, Netlify, VSCode</li>
            <li>SAP, Microsoft Office, Windows</li>
          </ul>
          <h4>General</h4>
          <ul>
            <li>Academically strong, dedicated</li>
            <li>Self-motivated, trustworthy, willing to learn</li>
            <li>Customer oriented, team-player</li>
          </ul>
        </div>
        <Experience></Experience>
        <div className="volunteering"></div>
        <div className="education"></div>
        <div className="courses"></div>
      </div>
    </>
  );
}
