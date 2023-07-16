import React from "react";
import Navigation from "./components/Resume/Navigation";
import Terminal from "./components/Resume/Terminal.jsx";
import Project from "./components/Resume/Project.jsx";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Terminal />
      <Project
        src="https://tenzi-bendiz.netlify.app/"
        alt="A picture of a tenzi game project"
        github="https://github.com/bendiz/tenzi-game"
        description="Tenzi game made after a challenge on Scrimba.com. Implemented several functionalities to make it more enjoyable by my 3-year old daughter. Added scoreboard with best time and best amount of rolls and toggling between dice and numbers."
      />
      <Project
        src="https://notes-app-bendiz.netlify.app/"
        alt="A picture of a note app project"
        github="https://github.com/bendiz/weather-react"
        description="Notes app made after a challenge on Scrimba.com. Implemented functionalities in addition to the suggested ones. Ex: Toggling dark mode and registering if user has dark mode enabled in their browser."
      />
      <Project
        src="https://bendiz.no/"
        alt="A picture of a weather app project"
        github="https://github.com/bendiz/weather-react"
        description="Weather application built from scratch by me. Challenge by shecodes. Started by creating an UI wireframe in Figma, and experimented with using both openweather API and SheCodes weather API to fetch weather data. Functionalities include location services, fahrenheit/celsius converter, current weather/humidity/temperature and 5-day forecast. Set up custom domain in the progress and hosted on Netlify."
      />
    </>
  );
}
