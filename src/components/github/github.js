import React, { Component } from "react";
import "./github.css";

export class Github extends Component {
  render() {
    return (
      <div className="github-container">
        <a
          href="https://github.com/amendoza514"
          target="_blank"
          rel="noreferrer noopener"
          className="github-button"
        >
          Go to my GitHub!
        </a>
      </div>
    );
  }
}

export default Github;
