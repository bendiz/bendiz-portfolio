import { React, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import classNames from "classnames";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Terminal() {
  const [consoleMessage, setConsoleMessage] = useState("");
  const [invalidCommand, setInvalidCommand] = useState("");
  const [commandMessage, setCommandMessage] = useState("");
  const [cursorMarker, setCursorMarker] = useState("cursor-marker");
  const [visibility, setVisibility] = useState("show");

  const cursorClassName = "custom-cursor";
  const textClass = "text";
  const typewriterText = classNames(cursorClassName, textClass);
  const randomNumber = (n) => Math.floor(Math.random() * n);
  // Console command messages
  const helpMessage = (
    <>
      List of available commands: <br />
      /funfact - a random funfact about me
      <br />
      /hobbies - a list of my hobbies
      <br />
      /clear - clears the terminal
    </>
  );

  const hobbiesMessage = (
    <>When I'm not programming, I enjoy CrossFit, hiking and video games.</>
  );

  const listOfFunfacts = [
    "I am terrified of bees",
    "My father taught me how to build my own computer when I was in primary school",
    "I love to do research and to really dive deep into learning a subject",
    "I have a cat named Fuse",
    "I love tacos",
    "I love going to in-person tech conferences",
  ];
  const invalidMessage = (
    <>Please input a valid command or /help for a list of commands</>
  );

  const handleHelp = (e) => {
    e.preventDefault();
    setInvalidCommand(false);
    switch (consoleMessage) {
      case "/help":
      case "help":
        setCommandMessage(helpMessage);
        break;
      case "/clear":
      case "clear":
        setCommandMessage("");
        break;
      case "/funfact":
      case "funfact":
        setCommandMessage(
          <>{listOfFunfacts[randomNumber(listOfFunfacts.length)]}</>
        );
        break;
      case "/hobbies":
      case "hobbies":
        setCommandMessage(hobbiesMessage);
        break;
      default:
        setInvalidCommand(true);
        setCommandMessage(invalidMessage);
        break;
    }
  };

  const updateConsole = (e) => {
    consoleMessage && setVisibility("hidden");
    setConsoleMessage(e.target.value.toLowerCase().trim());
  };

  return (
    <section className="Terminal">
      <h1 className="animate__animated animate__bounceIn">
        I am <span className="heading pink">Benedicte</span> <br />
        Roksvåg
      </h1>
      <TypeAnimation
        aria-hidden="true"
        sequence={[
          `Front-end developer`,
          1000,
          "Front-end developer based in Kristiansund, Norway.",
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
      <div className="technologies-known">
        <Tippy content="HTML">
          <img src="./html-icon.svg" alt="" srcSet="" id="html-icon" />
        </Tippy>
        <Tippy content="CSS">
          <img src="./css-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="JavaScript">
          <img src="./js-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="React">
          <img src="./react-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="Bootstrap">
          <img src="./bootstrap-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="Git">
          <img src="./git-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="Github">
          <img src="./github-icon.svg" alt="" srcSet="" />
        </Tippy>
        <Tippy content="Netlify">
          <img src="./netlify-icon.svg" alt="" srcSet="" />
        </Tippy>
      </div>
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
              <h3 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
                Benedicte.education
              </h3>
              <span className="yellow">
                "Information Technology @ Molde University College"
              </span>
            </div>
            <div className="command-section">
              <h3 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
                Benedicte.contactMe
              </h3>
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
              <h3 className="terminal--heading">
                <span className="terminal--arrow">&gt;</span>{" "}
                Benedicte.techSkills
              </h3>
              [
              <span className="yellow">
                "HTML, CSS, JavaScript, React, Git, Github"
              </span>
              ]
            </div>
            <div className="command-section">
              <h3 className="terminal--heading">
                <span className="terminal-arrow">&gt;</span> Benedicte.resume
              </h3>
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
              <h3 className="terminal--heading">
                <span className="terminal-arrow">&gt;</span> Benedicte.projects
              </h3>
              [
              <a href="" target="blank" rel="noopener noreferrer">
                "Tenzi Game"
              </a>
              ,{" "}
              <a href="" target="blank" rel="noopener noreferrer">
                "Weather App"
              </a>
              ,{" "}
              <a href="" target="blank" rel="noopener noreferrer">
                "Notes App"
              </a>
              ]
            </div>
            {commandMessage && (
              <div className="command-section">
                <p className={invalidCommand ? "invalid" : "yellow"}>
                  <span className="terminal--arrow">&gt;</span> {commandMessage}
                </p>
              </div>
            )}
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
                    maxLength="11"
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
    </section>
  );
}
