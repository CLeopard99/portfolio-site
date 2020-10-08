import React, { Component } from "react";
import { Animated } from "react-animated-css";

// Welcome message for HomeSection
class WelcomeMessage extends Component {
  render() {
    return (
      <Animated animationIn="fadeInDown">
        <div id="welcomeMessage">
          <div id="welcomeText">
            <h2>Hi, I'm Charlie...</h2>
            <p>
              Welcome to my website, here you can learn more about me and
              projects I'm working on. I'm a CS graduate and a versatile
              designer/developer with a particular interest in front-end
              development, UX/UI, and ubiquitous technology. Currently
              undertaking a masters in Advanced CS.
            </p>
          </div>
        </div>
      </Animated>
    );
  }
}

export default WelcomeMessage;
