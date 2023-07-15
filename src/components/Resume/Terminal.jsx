import { React, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import classNames from "classnames";

export default function Terminal() {
  const [consoleMessage, setConsoleMessage] = useState("");
  const [cursorMarker, setCursorMarker] = useState("cursor-marker");
  const [visibility, setVisibility] = useState("show");
  const cursorClassName = "custom-cursor";
  const textClass = "text";
  const typewriterText = classNames(cursorClassName, textClass);

  const handleHelp = (e) => {
    e.preventDefault();
    if (consoleMessage === "/help") {
      activateHelpCommand();
    } else {
      console.log("Please type valid command");
    }
  };

  const updateConsole = (e) => {
    if (consoleMessage) {
      setVisibility("hidden");
    }
    setConsoleMessage(e.target.value.toLowerCase().trim());
  };

  return (
    <article className="Terminal">
      <h1 className="animate__animated animate__bounceIn">
        I am <span className="heading pink">Benedicte</span> <br />
        Roksvåg
      </h1>
      <TypeAnimation
        aria-hidden="true"
        sequence={[
          "Information Technology Student // ",
          200,
          `Information Technology Student // Front-End Developer`,
          1000,
          "Information Technology Student // Front-End Developer based in Kristiansund, Norway.",
          2000,
          (el) => el.classList.remove(cursorClassName),
          200,
          (el) => el.classList.add(cursorClassName),
        ]}
        wrapper="p"
        speed={70}
        repeat={0}
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
          <div className="intro--section">
            <p>
              <span className="terminal--arrow">&gt;</span> Welcome!
            </p>
            <p>
              <span className="terminal--arrow">&gt;</span> This terminal is
              interactive...
            </p>
          </div>
          <div className="terminal--section">
            <div className="command-section">
              <h2 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
                Benedicte.education
              </h2>
              <span className="yellow">"Information Technology"</span>
            </div>
            <div className="command-section">
              <h2 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
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
              <a
                href="http://www.linkedin.com/in/benedicte-w-roksvaag"
                target="_blank"
                rel="noopener noreferrer"
              >
                "LinkedIn"
              </a>
              ]
            </div>
            <div className="command-section">
              <h2 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
                Benedicte.techSkills
              </h2>
              [
              <span className="yellow">
                "HTML, CSS, JavaScript, React, Git, Github"
              </span>
              ]
            </div>
            <div className="command-section">
              <h2 className="terminal--heading">
                <span className="terminal-arrow">&gt;</span> Benedicte.resume
              </h2>
              [
              <a
                href="benedicte-cv-english.pdf"
                target="blank"
                rel="noopener noreferrer"
              >
                "Resume.pdf"
              </a>
              ]
            </div>
            <div className="command-section">
              <h2 className="terminal--heading">
                <span className="terminal-arrow">&gt;</span> Benedicte.projects
              </h2>
              [
              <a href="" target="blank" rel="noopener noreferrer">
                "Tenzi Game"
              </a>
              ,{" "}
              <a
                href="https://www.google.com"
                target="blank"
                rel="noopener noreferrer"
              >
                "Weather App"
              </a>
              ]
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
                    autoComplete="off"
                    maxLength="10"
                    minLength="4"
                    onChange={updateConsole}
                    onFocus={() => setVisibility("hidden")}
                    onBlur={() =>
                      setVisibility("").then(
                        setConsoleMessage("").then(
                          setCursorMarker("cursor-marker")
                        )
                      )
                    }
                  />
                  <span className={classNames("placeholder", "yellow")}>
                    {visibility === "hidden"
                      ? "$"
                      : "> " + "Type /help for more commands.."}
                    <span
                      className={classNames(visibility, "yellow", cursorMarker)}
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
