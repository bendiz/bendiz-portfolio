import React from "react";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal.jsx";
import Projects from "./components/Projects";
import Project from "./components/Project.jsx";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Terminal />
      <Projects />
    </>
  );
}
