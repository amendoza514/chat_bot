import React, { Component } from "react";
import "./linkedin.css";

export class Linkedin extends Component {
  render() {
    let link; 
    if (this.props.path === "resume") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/";
    } else if (this.props.path === "linkedin") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/";
    }
    
    return (
      <div className="linkedin-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="linkedin-button"
        >
          {this.props.path === 'resume' ? "See it on my LinkedIn!" : "Go to my LinkedIn!"}
        </a>
      </div>
    );
  }
}

export default Linkedin;
