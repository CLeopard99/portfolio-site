import React, { Component } from "react";
import SkillTab from "./SkillTab";
import SkillsImage from "../assets/skillsImage.png";

// Skill section to render summary of hard skills as a responsive list of tabs by category
class Skills extends Component {
  render() {
    return (
        <div id="skillSection">
        <img src={SkillsImage} id="skillImage" alt="Skills Icon" />
        <h2>Skills Overview</h2>
        <p className="sectionBlurb">
          <b>Jack of all trades, proficient in a growing list…</b>
          <br /> A good developer can design and program in any language and
          I am eager to learn new technologies and adapt to challenges when
          given the opportunity.
        </p>

        <div className="skillsList">
          <div className="skillCategory">
            <h3>Frontend</h3>
          </div>
          <div>
            <SkillTab skill="React" />
            <SkillTab skill="React Native" />
            <SkillTab skill="HTML" />
            <SkillTab skill="CSS" />
            <SkillTab skill="JavaScript" />
            <SkillTab skill="NodeJS" />
          </div>
        </div>

        <div className="skillsList">
          <div className="skillCategory">
            <h3>Backend</h3>
          </div>
          <div>
            <SkillTab skill="Java" />
            <SkillTab skill="SQL" />
            <SkillTab skill="C" />
            <SkillTab skill="Firebase" />
            <SkillTab skill="LAMP Stack" />
          </div>
        </div>

        <div className="skillsList">
          <div className="skillCategory">
            <h3>Other</h3>
          </div>
          <div>
            <SkillTab skill="UX" />
            <SkillTab skill="UML" />
            <SkillTab skill="JUnit" />
            <SkillTab skill="Git" />
            <SkillTab skill="Requirements" />
            <SkillTab skill="Wireframes/Prototypes" />
            <SkillTab skill="VDM-SL" />
            <SkillTab skill="Wordpress" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;