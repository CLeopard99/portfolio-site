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
              projects I am working on. I'm a CS graduate and a versatile
              designer/developer with a particular interest in UX/UI, front-end
              development, and ubiquitous technology.
            </p>
          </div>
        </div>
      </Animated>
    );
  }
}

export default WelcomeMessage;
