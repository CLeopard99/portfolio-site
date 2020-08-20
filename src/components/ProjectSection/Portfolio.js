import React, { Component } from "react";
import Project from "./Project";
import VideoButton from "./VideoButton";
import ProjectButton from "./ProjectButton";
import MyMemoryShots from "../../assets/mymemoryScreenshots.png";
import MyPortfolio from "../../assets/portfolioExample.png";

// Portfolio renders projects by setting the necessary details needed
class Portfolio extends Component {
  render() {
    return (
      <div id="projects">
        <Project
          title="MyMemory"
          tech="React-Native / Firebase / Node"
          summary="MyMemory is an Android app built with React-Native, designed
            through a user-centred approach with caregivers. The app acts as a
            digital photobook designed for people with Dementia by using their
            personal photos and input and formatting them for readability to
            help with reminiscence. The data can be changed and removed, with
            personal quizzes that use the photos and data added to help users
            recall information. The input is stored using Firebase's real-time database."
          image={MyMemoryShots}
          alt="Screenshots from MyMemory app"
          button="Video demo"
          link="/"
        />
        <VideoButton channel="vimeo" videoId="441864899" />

        <hr />

        <Project
          title="Portfolio Site"
          tech="React / SCSS / Node"
          summary=" To showcase my skills and projects, I have built this responsive website, hosted on Firebase and built with
          React and SCSS. This an ongoing project that will evolve as my career and skills develop."
          image={MyPortfolio}
          alt="Screenshots of this site, desktop and mobile"
        />
        <ProjectButton link="https://github.com/CLeopard99/my-site" />
      </div>
    );
  }
}

export default Portfolio;
