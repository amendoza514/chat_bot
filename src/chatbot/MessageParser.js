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

    let contactPoints = ["contact", "email", "phone", "reach you"]

    if (contactPoints.some(c => input.includes(c))) {
      this.actionProvider.contactPlug();
    }
   
    //Need a default condition
    
  }
}

export default MessageParser;
