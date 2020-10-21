import React, { Component } from "react";
import "./linkedin.css";

export class Linkedin extends Component {
  render() {
    let link; 
    if (this.props.path === "resume") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/";
    } else if (this.props.path === "linkedin") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/";
    } else if (this.props.path === "publications") {
      link = "https://scholarship.claremont.edu/cmc_theses/1032/";
    }

     let message;
     if (this.props.path === "resume") {
       message = "See it on my LinkedIn!";
     } else if (this.props.path === "linkedin") {
       message = "Go to my LinkedIn!";
     } else if (this.props.path === "publications") {
       message = "Check it out!";
     }
    
    return (
      <div className="linkedin-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="linkedin-button"
        >
          {message}
        </a>
      </div>
    );
  }
}

export default Linkedin;
