import React, { Component } from 'react';
import "./Overview.css";

export class Overview extends Component {

    render() {
        return (
          <div className="portfolio-container">
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handleResume();
              }}
            >
              Resume
            </div>
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handleProjects();
              }}
            >
              Projects
            </div>
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handleSkills();
              }}
            >
              Skills / Technologies
            </div>
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handlePublications();
              }}
            >
              Publications
            </div>
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handleLinkedin();
              }}
            >
              LinkedIn
            </div>
            <div
              className="portfolio-items"
              onClick={() => {
                this.props.actionProvider.handleGithub();
              }}
            >
              Github
            </div>
          </div>
        );
    }
}

export default Overview
