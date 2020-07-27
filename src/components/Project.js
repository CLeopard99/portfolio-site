import React, { Component } from "react";

// Project class is used to style/format and easily add new projects to the site
class Project extends Component {
  render() {
    return (
      <div id="projectContainer">
        <div>
          <h2>{this.props.title}</h2>
          <p className="projectTech">
            <b>{this.props.tech}</b>
          </p>

          <p>{this.props.summary}</p>

          <img src={this.props.image} id="projectImage" alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Project;