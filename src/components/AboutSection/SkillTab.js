import React, { Component } from "react";

// Styled tabs used to easily add new skills to skill list sections
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