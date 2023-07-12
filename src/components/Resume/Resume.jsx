import React from 'react';
import Experience from './Experience';
import Skills from './Skills';

export default function Resume() {
  return (
    <article className="Resume">
      <h2>Resume</h2>
      <Skills />
      <Experience />
    </article>
  );
}
