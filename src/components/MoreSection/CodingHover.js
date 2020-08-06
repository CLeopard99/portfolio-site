import React, { Component } from "react";
import codingIcon from "../../assets/codingIcon.png";

class CodingHover extends Component {
  render() {
    return (
      <div className="subSection pastelBlue">
      <div className="hoverContainer">
        <img
          src={codingIcon}
          className="subSectionIcon"
          alt="Icon for Coding"
        />
        <h3>Coding</h3>
        <div className="overlay">
          <div className="overlayText">
            <h3>Coding</h3>
            <p>Personal projects designed and developed by me</p>
            <div className="divider" />
            <p>
              Team projects including development of an Android app for the
              UK Department of Education
            </p>
            <div className="divider" />
            <p>Regular practice via resources like LeetCode and HackerRank</p>
            <div className="divider" />
            <p>
              Broad Experience in various languages, technologies, and
              areas
            </p>
            <div className="divider" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CodingHover;
