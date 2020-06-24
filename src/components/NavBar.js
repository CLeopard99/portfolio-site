import React from "react";
import { Link } from "react-scroll";

const NavBar = () => (
    
  <div className="header">
    <h2>Charlie Leopard</h2>

    <ul className="navBar">
      <li>
        <Link
          exact
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/projects"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/contact"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          exact
          to="/more"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          More
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
