import React from "react";
import Navigation from "./components/Resume/Navigation";
import Terminal from "./components/Resume/Terminal.jsx";
import Project from "./components/Resume/Project.jsx";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Terminal />
      <section className="projects" id="projects">
        <h2>
          Check out my latest <span className="heading pink">projects</span>
        </h2>
        <Project
          src="./public/tenzi.png"
          alt="A picture of a tenzi game project"
          live="https://tenzi-bendiz.netlify.app/"
          github="https://github.com/bendiz/tenzi-game"
        >
          Tenzi game made after a challenge on Scrimba.com. Implemented several
          functionalities to make it more enjoyable by my 3-year old daughter.
          Added scoreboard with best time and best amount of rolls and toggling
          between dice and numbers.
        </Project>
        <Project
          src="./public/Weather.png"
          alt="A picture of a weather app project"
          live="https://bendiz.no/"
          github="https://github.com/bendiz/weather-react"
        >
          Weather application. Started by creating a wireframe in Figma.
          Experimented with using both openweather API and SheCodes weather API
          to fetch weather data. Functionalities include location services,
          fahrenheit/celsius converter, current weather/humidity/temperature and
          5-day forecast. Set up custom domain in the progress and hosted on
          Netlify.
        </Project>
        <Project
          src="./public/Notes.png"
          alt="A picture of a note app project"
          live="https://notes-app-bendiz.netlify.app/"
          github="https://github.com/bendiz/weather-react"
        >
          Notes app made after a challenge on Scrimba.com. Implemented
          functionalities in addition to suggested ones. Toggling dark mode and
          registering if user has dark mode enabled in their browser.
        </Project>
      </section>
    </>
  );
}
