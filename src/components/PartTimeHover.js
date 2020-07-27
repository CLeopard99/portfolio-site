import React, { Component } from "react";
import uniformIcon from "../assets/uniformIcon.png";

class PartTimeHover extends Component {
  render() {
    return (
      <div className="subSection pastelOrange">
      <div className="hoverContainer">
        <img
          src={uniformIcon}  
          className="subSectionIcon"
          alt="Icon for part-time work"
        />
        <h3>Part-Time</h3>
        <div className="overlay">
          <div className="overlayText">
            <h3>Part-Time</h3>
            <p>
            1 year experience as a bartender at Beeronomy Newcastle (including
            customer service, cellar operation, training new staff, and working
            under pressure)
          </p>
          <div className="divider" />
          <p>Work experience at Enfield Dig-IT solutions (hardware repairs)</p>
          <div className="divider" /> 
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default PartTimeHover;