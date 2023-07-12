import { React } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import { TypeAnimation } from 'react-type-animation';

export default function Resume() {
  const cursorClassName = 'custom-cursor';
  const addUnderlineClass = 'add-underline';
  return (
    <article className="Resume">
      <h1>Benedicte W. Roksvåg</h1>
      <TypeAnimation
        aria-hidden="true"
        sequence={[
          // Same substring at the start will only be typed once, initially
          'Information Technology student',
          200,
          'Information Technology student and aspiring front-end developer',
          200,
          `Information Technology student and aspiring front-end developer based in Kristiansund, Norway.`,
          4000,
          (el) => el.classList.remove(cursorClassName),
          (el) => el.classList.add(addUnderlineClass),
          200,
        ]}
        wrapper="p"
        speed={70}
        repeat={0}
        cursor={false}
        className={cursorClassName}
      />
      <div className="terminal">
        <div className="terminal-tab">
          <div className="tab-options">
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <h3>About</h3>
          </div>
        </div>
        <div className="terminal-window"></div>
      </div>
    </article>
  );
}
