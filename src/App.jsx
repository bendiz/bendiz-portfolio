import React from "react";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal.jsx";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Terminal />
      <Projects />
    </>
  );
}
