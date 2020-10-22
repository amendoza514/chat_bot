import React, { Component } from "react";
import "./skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleLanguages();
          }}
        >
          Languages
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleFrameworks();
          }}
        >
          Frameworks
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleFrontend();
          }}
        >
          Front End Technologies
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleBackend();
          }}
        >
          Back End Technologies
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleAllSkills();
          }}
        >
          All of the above!
        </div>
        <div
          className="skills-items"
          onClick={() => {
            this.props.actionProvider.handleNonTechnical();
          }}
        >
          Non-Technical 
        </div>
      </div>
    );
  }
}

export default Skills;
