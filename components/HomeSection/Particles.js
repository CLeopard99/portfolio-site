import React, { Component } from "react";
import Particles from "react-particles-js";

// Particles.js parameters for HomeSection
class ParticlesRender extends Component {
  render() {
    return (
      <div id="particlesContainer">
        <Particles
          id="particles"
          width={"100%"}
          height="700px"
          params={{
            particles: {
              color: {
                value: "#20DF0A",
              },
              opacity: {
                value: 0.8,
              },
              number: {
                value: 100,
              },
              size: {
                value: 4,
              },
              shape: {
                type: "circle",
              },
              line_linked: {
                distance: 130,
                color: "#0ABBDF",
                opacity: 0.6,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              collisions: {
                enable: true,
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onhover: {
                  enable: true,
                  mode: "grab",
                  distance: 100,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ParticlesRender;
