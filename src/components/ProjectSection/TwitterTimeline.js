import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TwitterBotCollage from "../../assets/twitterBotImages.png";

class TwitterTimeline extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <div id="twitterBot">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="dailyplantbot"
            theme="dark"
            noHeader="true"
            noFooter="true"
            placeholder="Twitter timeline loading..."
            options={{ height: 380, width: 330 }}
          />
          <img
            src={TwitterBotCollage}
            id="twitterBotCollage"
            alt="Twitter bot - logos of Twitter API, Reddit, Node.js, and web-scraping"
          />
        </div>
      </ScrollAnimation>
    );
  }
}

export default TwitterTimeline;
