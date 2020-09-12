import React, { Component } from "react";
import SkillTab from "./SkillTab";

// List of skills by category, using SkillTab to easily add new skills
class SkillLists extends Component {
  render() {
    return (
      <>
        <div className="skillsList">
          <div className="skillCategory">
            <h3>Languages</h3>
          </div>
          <div>
            <SkillTab skill="JavaScript" />
            <SkillTab skill="Java" />
            <SkillTab skill="HTML" />
            <SkillTab skill="CSS" />
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
            <SkillTab skill="Heroku" />
            <SkillTab skill="VDM-SL" />
            <SkillTab skill="LAMP Stack" />
            <SkillTab skill="UX/UI Design" />
          </div>
        </div>
      </>
    );
  }
}

export default SkillLists;
