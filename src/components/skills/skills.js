import React, { Component } from "react";
import "./skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          Languages
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          Frameworks
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          Front End Technologies
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          Back End Technologies
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          All of the above!
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleTuTube();
          }}
        >
          Non-Technical 
        </div>
      </div>
    );
  }
}

export default Skills;
