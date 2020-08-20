import React, { Component } from "react";
import InterestCollage from "../../assets/interestCollage.png";
import ScrollAnimation from "react-animate-on-scroll";

// Icon collage for MoreSection
class InterestsCollage extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <img
          src={InterestCollage}
          id="interestCollage"
          alt="Icons representing some of my interests"
        />
      </ScrollAnimation>
    );
  }
}

export default InterestsCollage;
