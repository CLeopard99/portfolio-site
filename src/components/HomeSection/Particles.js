import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesRender extends Component {
  render() {
    return (
        <Particles
          id="particles"
          width={'100%'}
          height= '700px'
          params={{
            particles: {
              color: {
                value: "#20DF0A",
              },
              opacity: {
                value: 0.7,
              },
              number: {
                value: 120,
              },
              size: {
                value: 3,
              },
              shape: {
                  type: "circle"
              },
              line_linked: {
                distance: 130,
                color: "#0ABBDF",
                opacity: 0.4,
                width: 1,
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
                  mode: "repulse",
                  distance: 50
                },
              },
            },
          }}
        />
    );
  }
}

export default ParticlesRender;
