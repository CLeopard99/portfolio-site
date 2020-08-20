import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Education section which renders accordion of education history
class ContactHeader extends Component {
  render() {
    return (
      <>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>Contact Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <p id="contactLine">Have a question or want to hire me?</p>
        </ScrollAnimation>
      </>
    );
  }
}

export default ContactHeader;
