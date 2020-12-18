import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// List of interest for MoreSection
class InterestsList extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <div id="interestsList">
          <h3>Some of my interests include</h3>
          <p> HCI & ubiquitous technologies</p>
          <p>Succulents/house plants</p>
          <p>Video games</p>
          <p>Craft beer & cocktails</p>
          <p>Space exploration</p>
          <p>Travelling</p>
        </div>
      </ScrollAnimation>
    );
  }
}

export default InterestsList;
