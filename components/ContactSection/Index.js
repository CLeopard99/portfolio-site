import React, { Component } from "react";
import EmailButton from "./EmailButton";
import ContactHeader from "./ContactHeader";

// Index for ContactSection
class ContactIndex extends Component {
  render() {
    return (
      <div id="contactMe">
        <ContactHeader />
        <EmailButton />
      </div>
    );
  }
}

export default ContactIndex;
