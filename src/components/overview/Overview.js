import React, { Component } from 'react';
import "./Overview.css";

export class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    // this.state = { count: 0, helper: false };
    // this.timer = this.timer.bind(this);
    // this.helperHandler = this.helperHandler.bind(this);
    // this.intervalId = 0;
  }

//   componentDidMount() {
//     console.log("start");
//     this.timer();
//   }

//   timer() {
//     this.intervalId = setInterval(() => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     }, 1000);
//   }

//   helperHandler() {
//     this.setState({ helper: true });
//   }

//   componentDidUpdate(prevProps) {
//     //   if (this.state.count === 3 && !this.state.helper) this.helperHandler()
//       if (this.state.count === 3 && !this.state.helper) {
//           clearInterval(this.intervalId);
//           this.props.actionProvider.handleDemo();
//       }
//   }



  render() {
    // let test;
    // if (this.state.helper) {
    //     test = (
    //         <div>Did this work?</div>
    //     )
    // }

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
        {/* {test} */}
      </div>
    );
  }
}

export default Overview
