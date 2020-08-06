import React, { Component } from "react";
import ModalVideo from 'react-modal-video';

// 
class VideoButton extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

  render() {
    return (
        <div id="projectButton">
        <ModalVideo channel={this.props.channel} isOpen={this.state.isOpen} videoId={this.props.videoId} autoplay='false' onClose={() => this.setState({isOpen: false})} />
        <a onClick={this.openModal}>Watch Demo</a>
      </div>
    );
  }
}
 
export default VideoButton;