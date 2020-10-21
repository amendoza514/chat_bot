import React, { Component } from "react";
import "./projects.css"

export class Projects extends Component {
  render() {

    return (
      <div className="projects-container">
        <div
          className="projects-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          TuTube
        </div>
        <div
          className="projects-items"
          onClick={() => {
            this.props.actionProvider.handleBubbleBall();
          }}
        >
          Bubble Ball!
        </div>
        <div
          className="projects-items"
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
