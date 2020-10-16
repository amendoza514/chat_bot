class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    let input = message.toLowerCase();

    if (input.includes("yoo")) {
      this.actionProvider.greet();
    }

    let contactPoints = ["contact", "reach out", "reach you"];
    let phonePoints = ["phone", "cell"];
    let emailPoints = ["email"];

    if (contactPoints.some(c => input.includes(c))) {
      this.actionProvider.contactPlug();
    }

    if (phonePoints.some((p) => input.includes(p))) {
      this.actionProvider.addPhone();
    }

    if (emailPoints.some((e) => input.includes(e))) {
       this.actionProvider.addEmail();
    }
   
    //Need a default condition

  }
}

export default MessageParser;
