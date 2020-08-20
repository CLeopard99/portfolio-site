import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Header and introducion for MoreSection
class MoreIntro extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <h2>In my spare time...</h2>
        <p className="sectionBlurb pastelBlue">
          Soft skills are just as important as programming ability and my
          activities in and outside of university have allowed me to strengthen
          my interpersonal skills by communicating with people from diverse
          backgrounds from around the world and gain valuable experience within
          teams and leadership positions.
        </p>
      </ScrollAnimation>
    );
  }
}

export default MoreIntro;
