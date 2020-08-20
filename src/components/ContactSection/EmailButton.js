import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class EmailButton extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <div id="emailButton">
          <a href="mailto:Charles.leopard@outlook.com">Get in touch</a>
        </div>
        <p>Charles.Leopard@outlook.com</p>
      </ScrollAnimation>
    );
  }
}

export default EmailButton;
