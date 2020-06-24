import React, { Component } from "react";
import Accordion from "./Accordion";
import SkillTab from "./SkillTab";
import EduImage from "../assets/educationImage.png";
import SkillsImage from "../assets/skillsImage.png";

class About extends Component {
  render() {
    return (
      <div>
        <div id="sectionTitle">
          <h2>About me</h2>
        </div>

        <div id="aboutSection">
          <div id="educationSection">
            <img src={EduImage} id="eduImage" alt="Education Icon" />
            <h2>Education</h2>
            <p>
              <b>A 1st class Computer Science graduate... </b>
              <br /> With experience in all elements of software development
              including user studies, project planning, design, frontend and
              backend implementation, testing, and data analysis.
            </p>
            <Accordion />
            <div className="clear"></div>
          </div>

          <div id="skillSection">
            <img src={SkillsImage} id="skillImage" alt="Skills Icon" />
            <h2>Skills Overview</h2>
            <p>
              <b>Jack of all trades, proficient in a growing list…</b>
              <br /> A good developer can design and program in any language and
              I am <br />
              eager to learn new technologies and adapt to challenges when given
              the opportunity.
            </p>

            <div className="skillsList">
              <div className="skillCategory">
                <h3>Frontend</h3>
              </div>
              <SkillTab skill="React" />
              <SkillTab skill="React Native" />
              <SkillTab skill="HTML" />
              <SkillTab skill="CSS" />
              <SkillTab skill="JavaScript" />
              <SkillTab skill="NodeJS" />
            </div>

            <div className="skillsList">
              <div className="skillCategory">
                <h3>Backend</h3>
              </div>
              <SkillTab skill="Java" />
              <SkillTab skill="SQL" />
              <SkillTab skill="Firebase" />
              <SkillTab skill="LAMP Stack" />
            </div>

            <div className="skillsList">
              <div className="skillCategory">
                <h3>Other</h3>
              </div>
              <SkillTab skill="UX/HCI " />
              <SkillTab skill="Requirements" />
              <SkillTab skill="UML" />
              <SkillTab skill="JUnit" />
              <SkillTab skill="Git" />
              <SkillTab skill="Wireframes/Prototypes" />
              <SkillTab skill="VDM-SL" />
              <SkillTab skill="Wordpress" />
            </div>
          </div>
          <div className="clear"></div>
        </div>
       
      </div>
    );
  }
}

export default About;
