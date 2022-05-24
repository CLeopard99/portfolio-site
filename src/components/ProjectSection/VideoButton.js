import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ScrollAnimation from "react-animate-on-scroll";

class VideoButton extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    console.log("Hi");
    console.log("Hi");
    return (
      <div id="projectButton">
        <div></div>

        <ModalVideo
          channel={this.props.channel}
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          autoplay="false"
          onClose={() => this.setState({ isOpen: false })}
        />
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
          <button className="projectLink" onClick={this.openModal}>
            Watch Demo
          </button>
        </ScrollAnimation>
      </div>
    );
  }
}

export default VideoButton;
