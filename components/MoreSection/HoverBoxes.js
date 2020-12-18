import React, { Component } from "react";
import CodingHover from "./CodingHover";
import SocietiesHover from "./SocietiesHover";
import PartTimeHover from "./PartTimeHover";
import VolunteerHover from "./VolunteerHover";
import ScrollAnimation from "react-animate-on-scroll";

// Render hoverboxes for MoreSection
class HoverBoxes extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }
  render() {
    return (
      <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <div id="hoverBoxes">
          <CodingHover />
          <SocietiesHover />
          <PartTimeHover />
          <VolunteerHover />
        </div>
      </ScrollAnimation>
    );
  }
}

export default HoverBoxes;
