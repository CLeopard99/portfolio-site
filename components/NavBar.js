import React, { Component } from "react";
import { Link } from "react-scroll";

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <h2 id="nav1">Charlie Leopard</h2>
        <h2 id="nav2">CL</h2>

        <ul className="navBar">
          <li>
            <Link exact to="/" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/about" spy={true} smooth={true} duration={500}>
              About 
            </Link>
          </li>
          <li>
            <Link exact to="/projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link exact to="/more" spy={true} smooth={true} duration={500}>
              More
            </Link>
          </li>
          <li>
            <Link exact to="/contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
