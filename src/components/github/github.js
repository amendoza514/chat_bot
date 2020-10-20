import React, { Component } from "react";
import "./github.css";

export class Github extends Component {
  render() {
    return (
      <div className="github-container">
        <div
          className="github-button"
          onClick={() => {
            console.log("github!");
          }}
        >
          go to GitHub!
        </div>
      </div>
    );
  }
}

export default Github;
