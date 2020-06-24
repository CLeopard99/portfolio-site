import React, { Component } from "react";
import MyMemoryShots from "../assets/mymemoryScreenshots.png";
import MySite from "../assets/mySite.jpg";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div id="projectsHeader">
          <h2>Projects</h2>
          <p>
            In addition to the many technologies and projects I have worked on
            during my time at university, I have also been working on the
            following projects independently.
          </p>
        </div>
        <hr />
        <div id="projectContainer">
          <h2>MyMemory</h2>
          <p>
            MyMemory is an Android app built with <b>React-Native</b>, designed
            through a user-centred approach with caregivers. The app acts as a
            digital photobook designed for people with Dementia by using their
            personal photos and input and formatting them for readability to
            help with reminiscence. The data can be changed and removed, with
            personal quizzes that use the photos and data added to help users
            recall information. The input is stored using{" "}
            <b>Firebase's real-time database.</b>
          </p>

          <img
            src={MyMemoryShots}
            id="myMemoryImage"
            alt="Screenshots from the MyMemory App"
          />
        </div>
        <hr />
        <div id="projectContainer">
          <h2>Portfolio Site</h2>
          <p>
            To showcase my skills and projects, I have built this website with{" "}
            <b>React JS and CSS</b>. This an ongoing project that will
            evolve as my career and skills develop.
          </p>

          <img
            src={MySite}
            id="myMemoryImage"
            alt="PC and Mobile screenshots of this website"
          />
        </div>
       
      </div>
    );
  }
}

export default Projects;
