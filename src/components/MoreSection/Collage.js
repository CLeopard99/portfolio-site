import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import BackgroundImage from "../../assets/moreBackground.png";

// Photo collage and header for MoreSection
class Collage extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
        <div id="collage">
          <img
            src={BackgroundImage}
            id="headerCollage"
            alt="Collage and header for more about me"
          />
          <div id="collageText">
            <h2>
              More About Me <br />
            </h2>
            <p>Experience, Extracurricular, & Interests</p>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Collage;
