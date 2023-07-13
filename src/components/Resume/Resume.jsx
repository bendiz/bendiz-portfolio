import { React, useState } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import classNames from 'classnames';

export default function Resume() {
  const [consoleMessage, setConsoleMessage] = useState('');
  const [cursorMarker, setCursorMarker] = useState('cursor-marker');
  const [visibility, setVisibility] = useState('show');
  const fieldCursor = classNames(cursorMarker, visibility);
  const cursorClassName = 'custom-cursor';
  const textClass = 'text';
  const typewriterText = classNames(cursorClassName, textClass);
  const handleHelp = (e) => {
    e.preventDefault();
    if (consoleMessage === 'help') {
      console.log('Help');
    } else {
      console.log('Please type valid command');
    }
  };

  const updateConsole = (e) => {
    if (consoleMessage) {
      setVisibility('hidden');
    }
    setConsoleMessage(e.target.value.toLowerCase().trim());
  };

  return (
    <article className="Resume">
      <h1 className="animate__animated animate__bounceIn">
        BENEDICTE W. ROKSVÅG
      </h1>
      <TypeAnimation
        aria-hidden="true"
        sequence={[
          'Information Technology Student // ',
          200,
          `Information Technology Student // Front-End Developer`,
          4000,
          (el) => el.classList.remove(cursorClassName),
          200,
          (el) => el.classList.add(cursorClassName),
        ]}
        wrapper="p"
        speed={70}
        repeat={Infinity}
        cursor={false}
        className={typewriterText}
      />
      <div className="terminal">
        <div className="terminal--tab">
          <div className="tab--options">
            <div className="terminal--dots">
              <span className="terminal--dot"></span>
              <span className="terminal--dot"></span>
              <span className="terminal--dot"></span>
            </div>
          </div>
        </div>
        <div className="terminal--window">
          <p>
            <span className="terminal--arrow">&gt;</span> Welcome!
          </p>
          <p>
            <span className="terminal--arrow">&gt;</span> This terminal is
            interactive...
          </p>
          <br />
          <div className="terminal--section">
            <div className="command-section">
              <p>
                <h2 className="terminal--heading">
                  <span className="terminal--arrow">&gt;</span>{' '}
                  Benedicte.education
                </h2>

                <span className="yellow">
                  "Information Technology @ Molde University College"
                </span>
              </p>
            </div>
            <div className="command-section">
              <p>
                <h2 className="terminal--heading">
                  <span className="terminal--arrow">&gt;</span>{' '}
                  Benedicte.contactMe
                </h2>
                [<span className="yellow"></span>
                <a
                  href="mailto:benedicte.roksvag@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "benedicte.roksvag@gmail.com"
                </a>
                ,&nbsp;
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  "LinkedIn"
                </a>
                ]
              </p>
            </div>
            <div className="command-section">
              <p>
                <h2 className="terminal--heading">
                  <span className="terminal-arrow">&gt;</span> Benedicte.resume
                </h2>
                [
                <a
                  href="https://www.google.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  "Resume.pdf"
                </a>
                ]
              </p>
            </div>
            <div className="command-section">
              <p>
                <h2 className="terminal--heading">
                  <span className="terminal-arrow">&gt;</span>{' '}
                  Benedicte.projects
                </h2>
                [
                <a
                  href="https://www.google.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  "Project1"
                </a>
                ,{' '}
                <a
                  href="https://www.google.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  "Project2"
                </a>
                ]
              </p>
            </div>
          </div>
          <div className="help-function">
            <form id="help-form" onSubmit={handleHelp}>
              <div className="input-group">
                <label htmlFor="help">
                  <input
                    type="help"
                    name="help"
                    id="help"
                    // autoFocus
                    maxLength="10"
                    minLength="4"
                    onChange={updateConsole}
                    onFocus={() => setVisibility('hidden')}
                    onBlur={() =>
                      setVisibility('').then(
                        setConsoleMessage('').then(
                          setCursorMarker('cursor-marker')
                        )
                      )
                    }
                  />
                  <span
                    className={classNames('placeholder', 'yellow', visibility)}
                  >
                    &gt; Type /help for more commands
                    <span
                      className={classNames(visibility, 'yellow', cursorMarker)}
                    >
                      |
                    </span>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
