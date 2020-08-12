import React, { Component } from "react";
import EducationSection from "./Education";
import SkillSection from "./Skills";
import ScrollAnimation from "react-animate-on-scroll";

// About me section to render Education section and Skills section
class About extends Component {
  render() {
    return (
      <div>
        <div id="sectionTitle">
          <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
            <h2>About me</h2>
          </ScrollAnimation>
        </div>
 
        <div id="aboutSection">
          <EducationSection />
          <SkillSection />
        </div>
      </div>
    );
  }
}

export default About;
