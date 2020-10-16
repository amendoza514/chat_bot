class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    let message = this.createChatBotMessage("YOOOOOO");
    this.addMessageToState(message);
  };

  contactPlug = () => {
    let message = this.createChatBotMessage(
      "Sure! Let me bring you to my contact page, or feel free to reach me at:",
      { withAvatar: true }
    );
    this.addMessageToState(message);
    this.addPhone();
    this.addEmail();
  };

  addPhone() {
    let phoneNumber = this.createChatBotMessage(
      "cell: (707)-580-2245",
      { withAvatar: false , delay: 1000 }
    );
    this.addMessageToState(phoneNumber);
  }

  addEmail() {
    let message = this.createChatBotMessage("or send an email to: ", 
      {  withAvatar: true, delay: 1500 }
    );
    this.addMessageToState(message);
    let phoneNumber = this.createChatBotMessage(
      "alexjmendoza514@gmail.com",
      { withAvatar: false, delay: 1500 }
    );
    this.addMessageToState(phoneNumber);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
