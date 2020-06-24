import React, { Component } from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import More from "./components/More";

class App extends Component {
  render() {
    return (
      <div id="main">
        <NavBar/>

        <Element id="/">
          <Home/>
        </Element>

        <Element id="/about">
          <About/>
        </Element>
        
        <Element id="/projects">
          <Projects/>
        </Element>

        <Element id="/contact">
          <Contact />
        </Element>

        <Element id="/more">
          <More />
        </Element>
      </div>
    );
  }
}

export default App;
