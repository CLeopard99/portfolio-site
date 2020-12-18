import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ScrollAnimation from "react-animate-on-scroll";

// Button for linking projects to a demo video
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
    return (
      <div id="projectButton">
        <ModalVideo
          channel={this.props.channel}
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          autoplay="false"
          onClose={() => this.setState({ isOpen: false })}
        />
        <ScrollAnimation animateIn="slideInUp" animateOnce={true} >
          <a onClick={this.openModal}>Watch Demo</a>
        </ScrollAnimation>
      </div>
    );
  }
}

export default VideoButton;
