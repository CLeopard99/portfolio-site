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
        <div>
        <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='441864899' autoplay='false' onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
    );
  }
}

export default VideoButton;