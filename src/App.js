import React from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/HomeSection/Index";
import About from "./components/AboutSection/Index";
import Projects from "./components/ProjectSection/Index";
import More from "./components/MoreSection/Index";
import Contact from "./components/ContactSection/Index";

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
