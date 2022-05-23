import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Button for linking projects to github
class ProjectButton extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="slideInUp" animateOnce={true} >
        <div id="projectButton">
          <button href={this.props.link}>View Code</button>
        </div>
      </ScrollAnimation>
    );
  }
}

export default ProjectButton;
