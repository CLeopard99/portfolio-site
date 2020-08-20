import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Header for About section
class AboutTitle extends Component {
  render() {
    return (
      <div id="sectionTitle">
        <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
          <h2>About me</h2>
        </ScrollAnimation>
      </div>
    );
  }
}

export default AboutTitle;
