import React, { Component } from "react";
import societiesIcon from "../assets/groupIcon.png";

class SocietiesHover extends Component {
  render() {
    return (
      <div className="subSection pastelGreen">
        <div className="hoverContainer">
          <img
            src={societiesIcon}
            className="subSectionIcon"
            alt="Icon for socieites"
          />
          <h3>Societies</h3>
          <div className="overlay">
            <div className="overlayText">
              <h3>Societies</h3>
              <p>
                Committee member of craft beer & cider society (includes organising
                weekly social events and trips, promoting activities,
                recruitment, and safety)
              </p>
              <div className="divider" />
              <p>
                Member of Stu-Brew (student-run brewery) and computing societies
              </p>
              <div className="divider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocietiesHover;
