import React, { Component } from "react";
import EducationSection from "./Education";
import SkillSection from "./Skills";

// About me section to render Education section and Skills section 
class About extends Component {
  render() {
    return (
      <div>
        <div id="sectionTitle">
          <h2>About me</h2>
        </div>

        <div id="aboutSection">
          <EducationSection/>
          <SkillSection/>
        </div>
      </div>
    );
  }
}

export default About;