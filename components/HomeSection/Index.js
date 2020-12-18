import React, { Component } from "react";
import Particles from "./Particles";
import WelcomeMessage from "./WelcomeMessage";
import HomeButtons from "./HomeButtons";
import LearnMoreButton from "./LearnMoreButton";

// Index for HomeSection
class HomeIndex extends Component {
  render() {
    return (
      <div id="homeSection">
        <Particles />
        <WelcomeMessage />
        <HomeButtons />
        <LearnMoreButton />
      </div>
    );
  }
}

export default HomeIndex;
