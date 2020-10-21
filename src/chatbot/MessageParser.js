class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    let input = message.toLowerCase();

    //debug only
    if (input.includes("state")) console.log(this.state);
    //debug only

    if (input.includes("help")) {
      this.actionProvider.handleInstructions();
      return;
    }
    if (input.includes("clear")) {
      this.actionProvider.handleClearScreen();
      return;
    }

    if (input.includes("resume")) {
      this.actionProvider.handleResume();
      return;
    }
    if (input.includes("projects")) {
      this.actionProvider.handleProjects();
      return;
    }

    if (input.includes("skills")) {
      this.actionProvider.handleSkills();
      return;
    }

    if (input.includes("publication")) {
      this.actionProvider.handlePublications();
      return;
    }

    if (input.includes("linkedin")) { 
      this.actionProvider.handleLinkedin()
      return;
    }

    if (input.includes("tutube")) {
       this.actionProvider.handleTuTube();
       return;
    }

    if (
      input.includes("bubbleball") ||
      input.includes("bubble ball") ||
      input.includes("bubble")
    ) {
      this.actionProvider.handleBubbleBall();
      return;
    }

    if (input.includes("roulette") || input.includes("rr")) {
      this.actionProvider.handleRestaurantRoulette();
      return;
    }

    if (input.includes("github")) {
      this.actionProvider.handleGithub();
      return;
    } 
    
    if (input.includes("go")) {
      if (this.state.path === "linkedin") {
        this.actionProvider.directLinkedin();
        return;
      } else if (this.state.path=== "github") {
        this.actionProvider.directGithub();
        return;
      } else if (this.state.path === "resume") {
        this.actionProvider.directResume();
        return;
      } else if (this.state.path === "publications") {
        this.actionProvider.directPublications();
        return;
      } else if (this.state.path === "tutube") {
        this.actionProvider.directTuTube();
        return;
      } else if (this.state.path === "bubbleball") {
        this.actionProvider.directBubbleBall();
        return;
      } else if (this.state.path === "restaurantroulette") {
        this.actionProvider.directRestaurantRoulette();
        return;
      } else {
        this.actionProvider.directDefault();
        return;
      }
    }

    let contactPoints = ["contact", "reach out", "reach you"];
    let phonePoints = ["phone", "cell"];
    let emailPoints = ["email"];

    if (contactPoints.some((c) => input.includes(c))) {
      this.actionProvider.contactPlug();
      return;
    }

    if (phonePoints.some((p) => input.includes(p))) {
      this.actionProvider.addPhone();
      return;
    }

    if (emailPoints.some((e) => input.includes(e))) { 
      this.actionProvider.addEmail();
      return;
    }

    if (input.includes("portfolio")) {
      this.actionProvider.handlePortfolio();
      return;
    }

    //default case / catch

    this.actionProvider.handleError();
  }
}

export default MessageParser;
