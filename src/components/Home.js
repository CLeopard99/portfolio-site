import React, { Component } from "react";
import { Link } from "react-scroll";
import ProfilePhoto from "../assets/profilePhoto.png";
import CV from "../documents/CharlieLeopard_Resume.pdf";

class Home extends Component {
  render() {
    return (
      <div id="homeSection">
        <div id="profile">
          <div id="welcomeMessage">
            <h2>Hi, I'm Charlie...</h2>
            <p>
              Welcome to my website, here you can learn more about me and
              projects  I am working on. I'm a CS graduate and a versatile
              designer/developer with a particular interest in UX and ubiquitous
              technology.
            </p>
          </div>
          <img src={ProfilePhoto} id="homeImage" alt="Charlie Leopard" />
        </div>

        <div id="welcomeButtons">
          <a href={CV} id="cvButton">
            View Resume
          </a>
          <Link
            id="contactButton"
            exact
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Contact me
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;