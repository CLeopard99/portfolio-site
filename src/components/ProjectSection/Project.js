import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Project class is used to style/format and easily add new projects to the site
class Project extends Component {
  render() {
    return (
      <div id="projectContainer">
        <div>
          <ScrollAnimation animateIn="zoomIn"  animateOnce={true}>
            <h2>{this.props.title}</h2>

            <p className="projectTech">
              <b>{this.props.tech}</b>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
            <p>{this.props.summary}</p>

            <img
              src={this.props.image}
              id="projectImage"
              alt={this.props.alt}
            />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Project;
