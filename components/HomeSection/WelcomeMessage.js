import React, { Component } from "react";
import { Animated } from "react-animated-css";

// Welcome message for HomeSection
class WelcomeMessage extends Component {
  render() {
    return (
      <Animated animationIn="slideInDown" animationInDelay="100">
        <div id="welcomeMessage">
          <div id="welcomeText">
            <h2>Hi, I'm Charlie...</h2>
            <p>
              Welcome to my website, here you can learn more about me and
              what I'm working on. 
               I'm a CS graduate currently undertaking a 
              Masters in Advanced CS and a versatile full-stack developer with a passion 
              for technology and learning new things.
            </p>
          </div>
        </div>
      </Animated>
    );
  }
}

export default WelcomeMessage;
