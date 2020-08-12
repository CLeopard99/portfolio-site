import React, { Component } from "react";
import EmailButton from "./EmailButton";
import ScrollAnimation from "react-animate-on-scroll";

class Contact extends Component {
  render() {
    return (
      <div id="contactHeader">
        <div id="contactMe">
          <ScrollAnimation
            animateIn="fadeInLeft"
            offset="900"
            animateOnce={true}
          >
            <h2>Contact Me</h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            offset="900"
            animateOnce={true}
          >
            <p id="contactLine">Have a question or want to hire me?</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn" offset="900" animateOnce={true}>
            <EmailButton />
            <p>Charles.Leopard@outlook.com</p>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Contact;
