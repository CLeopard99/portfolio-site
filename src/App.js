import React from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Portfolio";
import More from "./components/More";
import Contact from "./components/Contact";

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
