import React, { Component } from "react";
import volunteerIcon from "../../assets/volunteerIcon.png";

class VolunteerHover extends Component {
  render() {
    return (
      <div className="subSection pastelPink">
        <div className="hoverContainer">
          <img
            src={volunteerIcon}
            className="subSectionIcon"
            alt="Icon for volunteering"
          />
          <h3>Volunteering</h3>
          <div className="overlay">
            <div className="overlayText">
              <h3>Volunteering</h3>
              <p>
                National Citizen Service (NCS) – three weeks of workshops,
                volunteering, and presenting for charities
              </p>
              <div className="divider" />
              <p>
                HeadStart – The Challenge – employability workshops and further
                volunteering
              </p>
              <div className="divider" />
              <p>Enfield Food Bank volunteer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VolunteerHover;
