import React, { Component } from "react";
import SkillTab from "./SkillTab";
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

          <div className="skillsList">
            <div className="skillCategory">
              <h3>Languages</h3>
            </div>
            <div>
              <SkillTab skill="Java" />
              <SkillTab skill="HTML" />
              <SkillTab skill="CSS" />
              <SkillTab skill="JavaScript" />
              <SkillTab skill="SQL" />
              <SkillTab skill="C" />
            </div>
          </div>

          <div className="skillsList">
            <div className="skillCategory">
              <h3>Frameworks</h3>
            </div>
            <div>
              <SkillTab skill="React" />
              <SkillTab skill="React Native" />
              <SkillTab skill="NodeJS" />
              <SkillTab skill="SASS/LESS" />
              <SkillTab skill="Bootstrap" />
              <SkillTab skill="JUnit" />
            </div>
          </div>

          <div className="skillsList">
            <div className="skillCategory">
              <h3>Others</h3>
            </div>
            <div>
              <SkillTab skill="Firebase" />
              <SkillTab skill="Git" />
              <SkillTab skill="VDM-SL" />
              <SkillTab skill="LAMP Stack" />
              <SkillTab skill="UX/UI Design" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Skills;
