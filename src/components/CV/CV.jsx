import React from 'react';
import Experience from './Experience';
import Skills from './Skills';

export default function CV() {
  return (
    <>
      <div className="CV">
        <h2>Resume</h2>
        <div className="title"></div>
        <Skills />
        {/* <section className="skills">
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
        </section> */}
        <Experience />
      </div>
    </>
  );
}
