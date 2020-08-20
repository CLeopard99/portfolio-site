import React, { Component } from "react";
import { Link } from "react-scroll";
import CV from "../../documents/Charlie-Leopard-Resume.pdf";
import { Animated } from "react-animated-css";

// Buttons for home sections to view resume and scroll to contact section
class HomeButtons extends Component {
  render() {
    return (
      <div id="homeButtons">
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
    );
  }
}

export default HomeButtons;
