import React, { Component } from "react";
import "./project.css";

export class Project extends Component {
  render() {
    let link;
    if (this.props.path === "tutube") {
      link = "https://tutube-fsp.herokuapp.com/#/";
    } else if (this.props.path === "bubbleball") {
      link = "https://amendoza514.github.io/";
    } else if (this.props.path === "restaurantroulette") {
      link = "https://rrc-app.herokuapp.com/#/";
    }

    let message;
    if (this.props.path === "tutube") {
      message = "Check out TuTube!";
    } else if (this.props.path === "bubbleball") {
      message = "Play Bubble Ball!";
    } else if (this.props.path === "restaurantroulette") {
      message = "Give Restaurant Roulette a spin!";
    }

    return (
      <div className="project-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="project-button"
        >
          {message}
        </a>
      </div>
    );
  }
}

export default Project;
