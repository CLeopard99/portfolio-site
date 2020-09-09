import React, { Component } from "react";
import Collage from "./Collage";
import MoreIntro from "./MoreIntro";
import HoverBoxes from "./HoverBoxes";
import InterestsList from "./InterestsList";
import InterestCollage from "./InterestCollage";

// Index for MoreSection
class MoreIndex extends Component {
  render() {
    return (
      <div>
        <Collage />
        <MoreIntro />
        <HoverBoxes />

        <div id="interests">
          <InterestsList />
          <InterestCollage />
        </div>
      </div>
    );
  }
}

export default MoreIndex;
