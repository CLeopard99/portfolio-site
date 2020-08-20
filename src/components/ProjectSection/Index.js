import React, { Component } from "react";
import ProjectsIntro from "./ProjectsIntro";
import Portfolio from "./Portfolio";

// Index for ProjectsSection
class ProjectsIndex extends Component {
  render() {
    return (
      <>
          <ProjectsIntro/>
          <Portfolio/>
      </>
    );
  }
}

export default ProjectsIndex;
