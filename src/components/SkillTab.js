import React, { Component } from "react";

class SkillTab extends Component {
  render() {

    return (
      <div className='skillTab'>
       {this.props.skill}
      </div>
    );
  }
}

export default SkillTab;
