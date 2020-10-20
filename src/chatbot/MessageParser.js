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

    if (input.includes("help")) this.actionProvider.handleInstructions();

    //overview nav start

    if (input.includes("resume")) this.actionProvider.handleResume();
    if (input.includes("projects")) this.actionProvider.handleProjects();
    if (input.includes("skills")) this.actionProvider.handleSkills();
    if (input.includes("publications")) this.actionProvider.handlePublications();
    if (input.includes("linkedin")) this.actionProvider.handleLinkedin()
    if (input.includes("github")) this.actionProvider.handleGithub();
    
    if (input.includes("go")) {
      if (this.state.path === "linkedin") {
        this.actionProvider.directLinkedin();
      } else if (this.state.path=== "github") {
        this.actionProvider.directGithub();
      } else if (this.state.path === "resume") {
        this.actionProvider.directResume();
      }
    }

    //overview nav end

    let contactPoints = ["contact", "reach out", "reach you"];
    let phonePoints = ["phone", "cell"];
    let emailPoints = ["email"];

    if (contactPoints.some((c) => input.includes(c))) {
      this.actionProvider.contactPlug();
    }

    if (phonePoints.some((p) => input.includes(p))) {
      this.actionProvider.addPhone();
    }

    if (emailPoints.some((e) => input.includes(e))) {
      this.actionProvider.addEmail();
    }

    if (input.includes("portfolio")) {
      this.actionProvider.handlePortfolio();
    }

    //Need a default condition
  }
}

export default MessageParser;
