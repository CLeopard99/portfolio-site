import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Header and introduction for projects section
class ProjectsIntro extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <div id="projectsHeader">
          <h2>Projects</h2>
          <p className="sectionBlurb">
            In addition to the many technologies and projects I have worked on
            during my time at university, I have also been working on the
            following projects independently as the sole designer and developer.
          </p>
        </div>
      </ScrollAnimation>
    );
  }
}

export default ProjectsIntro;
