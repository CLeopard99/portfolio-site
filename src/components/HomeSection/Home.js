import React, { Component } from "react";
import { Link } from "react-scroll";
import CV from "../../documents/Charlie-Leopard-Resume.pdf";
import Particles from "./Particles";

class Home extends Component {
  render() {
    return (
      <div id="homeSection">
        <div id="particlesContainer">
          <Particles />
        </div>

        <div id="welcomeMessage">
          <div id="welcomeText">
            <h2>Hi, I'm Charlie...</h2>
            <p>
              Welcome to my website, here you can learn more about me and
              projects I am working on. I'm a CS graduate and a versatile
              designer/developer with a particular interest in UX/UI, front-end
              development, and ubiquitous technology.
            </p>
          </div>
        </div>

        <div id="welcomeButtons">
          <a href={CV} id="cvButton">
            View Resume
          </a>
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
        </div>

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
      </div>
    );
  }
}

export default Home;
