import Project from "./Project";
import React from "react";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>
        Check out my latest <span className="heading pink">projects</span>
      </h2>
      <div className="projects--cards">
        <Project
          title="Tenzi Game"
          src="./public/tenzi.png"
          alt="A picture of a tenzi game project"
          live="https://tenzi-bendiz.netlify.app/"
          github="https://github.com/bendiz/tenzi-game"
        >
          Tenzi game made after a challenge on Scrimba.com. Implemented several
          functionalities to make it more enjoyable by my 3-year old daughter.{" "}
          <br />
          <br />
          Added scoreboard with best time, best amount of rolls and toggling
          between dice and numbers, and used the "Tippy" library for the
          tooltips.
        </Project>
        <Project
          title="Weather App"
          src="./public/Weather.png"
          alt="A picture of a weather app project"
          live="https://bendiz.no/"
          github="https://github.com/bendiz/weather-react"
        >
          Created an UI wireframe in Figma. Experimented with using both
          openweather API and SheCodes weather API to fetch weather data.
          <br />
          <br />
          Added location services, fahrenheit/celsius converter, current
          weather, humidity, temperature and 5-day forecast. Set up custom
          domain and hosted on Netlify.
        </Project>
        <Project
          title="Notes App"
          src="./public/Notes.png"
          alt="A picture of a note app project"
          live="https://notes-app-bendiz.netlify.app/"
          github="https://github.com/bendiz/weather-react"
        >
          Made after a challenge on Scrimba.com. The user's notes are saved in
          the browser and can be accessed if the user closes their browser or
          restarts their computer. <br />
          <br />
          Implemented dark mode functionality, detecting if user has dark mode
          enabled, but also providing the user freedom to toggle.
        </Project>
      </div>
    </section>
  );
}
