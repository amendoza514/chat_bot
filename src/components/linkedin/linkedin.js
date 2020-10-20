import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./linkedin.css";

export class Linkedin extends Component {
  render() {
    return (
      <div className="linkedin-container">
        <a
          href="https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/"
          target="_blank"
          rel="noreferrer noopener"
          className="linkedin-button"
        >
          Go to my LinkedIn!
        </a>
      </div>
    );
  }
}

export default Linkedin;
