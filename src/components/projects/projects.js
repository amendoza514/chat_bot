import React, { Component } from "react";
import "./projects.css"

export class Projects extends Component {
  render() {
    let TTClass = 'projects-items';
    let BBClass = "projects-items";
    let RRClass = "projects-items";

    if (this.props.path === "javascript") {
    } else if (this.props.path === "ruby") {
      BBClass = 'hide-items'
      RRClass = "hide-items";
    } else if (this.props.path === "python") {
      BBClass = 'hide-items'
      TTClass = 'hide-items'
      RRClass = "hide-items";
    } else if (this.props.path === "postgres") {
      BBClass = 'hide-items'
      RRClass = "hide-items";
    } else if (this.props.path === "nosql") {
      BBClass = 'hide-items'
      TTClass = 'hide-items'
    }

    return (
      <div className="projects-container">
        <div
          className={TTClass}
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          TuTube
        </div>
        <div
          className={BBClass}
          onClick={() => {
            this.props.actionProvider.handleBubbleBall();
          }}
        >
          Bubble Ball!
        </div>
        <div
          className={RRClass}
          onClick={() => {
            this.props.actionProvider.handleRestaurantRoulette();
          }}
        >
          Restaurant Roulette
        </div>
      </div>
    );
  }
}

export default Projects;
