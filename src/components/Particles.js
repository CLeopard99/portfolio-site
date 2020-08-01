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
                value: 0.6,
              },
              number: {
                value: 120,
              },
              size: {
                value: 3,
              },
              line_linked: {
                distance: 115,
                color: "#0ABBDF",
                opacity: 0.6,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
    );
  }
}

export default ParticlesRender;
