import React, { Component } from "react";
import Accordion from "./Accordion";
import EduImage from "../../assets/educationImage.png";

// Education section which renders accordion of education history
class Education extends Component {
  render() {
    return (
      <div id="educationSection">
        <img src={EduImage} id="eduImage" alt="Education Icon" />
        <h2>Education</h2>
        <p className="sectionBlurb">
          <b>A 1st class Computer Science graduate... </b>
          <br /> With experience in all elements of software development
          including user studies, project planning, design, frontend and backend
          implementation, testing, and data analysis.
        </p>
        <Accordion />
        <div className="clear"></div>
      </div>
    );
  }
}

export default Education;