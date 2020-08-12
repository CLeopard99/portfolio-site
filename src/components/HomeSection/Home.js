import React, { Component } from "react";
import { Link } from "react-scroll";
import CV from "../../documents/Charlie-Leopard-Resume.pdf";
import Particles from "./Particles";
import { Animated } from "react-animated-css";

class Home extends Component {
  render() {
    return (
      <div id="homeSection">
        <div id="particlesContainer">
          <Particles />
        </div>

        <Animated animationIn="fadeInDown">
          <div id="welcomeMessage">
            <div id="welcomeText">
              <h2>Hi, I'm Charlie...</h2>
              <p>
                Welcome to my website, here you can learn more about me and
                projects I am working on. I'm a CS graduate and a versatile
                designer/developer with a particular interest in UX/UI,
                front-end development, and ubiquitous technology.
              </p>
            </div>
          </div>
        </Animated>

        <div id="welcomeButtons">
          <Animated animationIn="fadeInLeftBig" animationInDelay="350">
            <a href={CV} id="cvButton">
              View Resume
            </a>
          </Animated>
          <Animated animationIn="fadeInRightBig" animationInDelay="350">
            <Link
              id="contactButton"
              exact
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              Contact Me
            </Link>
          </Animated>
        </div>

        <Animated animationIn="fadeInUp" animationInDelay="700">
          <div id="learnMoreButton">
            <Link
              exact
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              Learn more
            </Link>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Home;
