import React, { Component } from "react";
import EmailButton from "./EmailButton";

class Contact extends Component {
  render() {
    return (
      <div id="contactMe">
        <div id="contactHeader">
          <h2>Contact Me</h2>
          <p id="contactLine">Have a question or want to hire me?</p>
          <EmailButton />
          <p>Charles.Leopard@outlook.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;
