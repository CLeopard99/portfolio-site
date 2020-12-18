import React, { Component } from "react";
import SkillLists from "./SkillLists";
import SkillsImage from "../../assets/skillsImage.png";
import ScrollAnimation from "react-animate-on-scroll";
// Skill section to render summary of hard skills as a responsive list of tabs by category
class Skills extends Component {
  render() {
    return (
      <div id="skillSection">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <img src={SkillsImage} id="skillImage" alt="Skills Icon" />
          <h2>Skills Overview</h2>
          <p className="sectionBlurb">
            <b>Jack of all trades, proficient in a growing list…</b>
            <br /> A good developer can design and program in any language and I
            am eager to learn new technologies and adapt to challenges when
            given the opportunity.
          </p>
          <SkillLists/>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Skills;
