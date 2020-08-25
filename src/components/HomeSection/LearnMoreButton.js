import React, { Component } from "react";
import { Link } from "react-scroll";
import { Animated } from "react-animated-css";

// Button for bottom of home section - scrolls to AboutSection
class LearnMoreButton extends Component {
  render() {
    return (
      <Animated animationIn="fadeInUp" animationInDelay="800">
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
    );
  }
}

export default LearnMoreButton;
