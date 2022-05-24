import React, { Component } from "react";
import Accordion from "./Accordion";
import EduImage from "../../assets/educationImage.png";
import ScrollAnimation from "react-animate-on-scroll";

class Education extends Component {
  render() {
    return (
      <div id="educationSection">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <img src={EduImage} id="eduImage" alt="Education Icon" />
          <h2>Education</h2>
          <p className="sectionBlurb">
            <b>A 1st class Computer Science graduate... </b>
            <br /> With experience in all elements of software development
            including user studies, project planning, design, frontend and
            backend implementation, testing, and data analysis.
          </p>

          <Accordion />
        </ScrollAnimation>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Education;
