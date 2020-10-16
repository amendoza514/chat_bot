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
    let message = this.createChatBotMessage("Let me bring you to my contact page, or feel free to give me a call at: 707-580-2245 or email at alexjmendoza514@gmail.com");
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
