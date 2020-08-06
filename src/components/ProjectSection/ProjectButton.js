import React, { Component } from "react";

//
class ProjectButton extends Component {

  render() {
    return (
      <div id="projectButton">
        <a href={this.props.link}>
          View Code
        </a>
      </div>
    );
  }
}

export default ProjectButton;
