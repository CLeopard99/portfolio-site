import React, { Component } from "react";
import EducationSection from "./Education";
import SkillSection from "./Skills";
import AboutTitle from "./AboutTitle";

class AboutIndex extends Component {
  render() {
    return (
      <div>
        <AboutTitle />

        <div id="aboutSection">
          <EducationSection />
          <SkillSection />
        </div>
      </div>
    );
  }
}

export default AboutIndex;
