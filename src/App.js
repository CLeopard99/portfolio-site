import React from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/HomeSection/Home";
import About from "./components/AboutSection/About";
import Projects from "./components/ProjectSection/Portfolio";
import More from "./components/MoreSection/More";
import Contact from "./components/ContactSection/Contact";

// Main class used to render core components
function App() {
  return (
    <div>
      <NavBar />

      <Element id="/">
        <Home />
      </Element>

      <Element id="/about">
        <About />
      </Element>

      <Element id="/projects">
        <Projects />
      </Element>

      <Element id="/more">
        <More />
      </Element>

      <Element id="/contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
