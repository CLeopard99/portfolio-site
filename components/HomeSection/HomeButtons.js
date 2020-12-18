import React, { Component } from "react";
import { Link } from "react-scroll";
import CV from "../../documents/Charlie-Leopard-Resume.pdf";
import ContactIcon from "../../assets/contactIcon.png";
import GithubIcon from "../../assets/githubIcon.png";
import LinkedinIcon from "../../assets/linkedinIcon.png";

import { Animated } from "react-animated-css";

// Buttons for home sections to view resume and scroll to contact section
class HomeButtons extends Component {
  render() {
    return (
      <div id="homeButtons">
        <Animated animationIn="fadeInLeftBig" animationInDelay="400">
          <a href={CV} id="cvButton">
            CV
          </a>
        </Animated>

        <Animated animationIn="fadeInLeftBig" animationInDelay="350">
          <Link
            exact
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            >
          <img src={ContactIcon} alt="Email icon" />
          </Link>
        </Animated>

        <Animated animationIn="fadeInLeftBig" animationInDelay="300">
          <a href="https://github.com/CLeopard99/portfolio-site" >
          <img src={GithubIcon} alt="Github icon" />
          </a>
        </Animated>

        <Animated animationIn="fadeInLeftBig" animationInDelay="250">
          <a href="https://www.linkedin.com/in/charlie-leopard/" >
          <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </Animated>
      </div>
    );
  }
}

export default HomeButtons;
