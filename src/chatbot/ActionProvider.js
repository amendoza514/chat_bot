class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleResume = () => {
    let message = this.createChatBotMessage(
      "I'll attach a resume preview below, or click the button below to view on LinkedIn"
    );
    this.addMessageToState(message);
    let resumeLink = this.createChatBotMessage("go to LinkedIn", {
      withAvatar: false,
      delay: 1000,
    });
    this.addMessageToState(resumeLink);
  };

  handleSkills = () => {
    let message = this.createChatBotMessage("this is my skillz");
    this.addMessageToState(message);
  };

  handleProjects = () => {
    let message = this.createChatBotMessage("this is my projects");
    this.addMessageToState(message);
  };

  handlePublications = () => {
    let message = this.createChatBotMessage("this is my pubvs");
    this.addMessageToState(message);
  };

  handleLinkedin = () => {
    let message = this.createChatBotMessage(
      "Travel over to LinkedIn? Press the button below or enter 'go' to open in a new tab",
      {
        widget: "linkedin",
      }
    );
    this.addMessageToState(message);
    this.setState((prevState) => ({
      ...prevState,
      linkedin: true,
      github: false,
    }));
  };

  directLinkedin = () => {
    window.open("https://www.linkedin.com/in/alex-mendoza-aa4615b5/");
  };

  directGithub = () => {
    window.open("https://github.com/amendoza514");
  };

  handleGithub = () => {
    let message = this.createChatBotMessage("this is my github");
    this.addMessageToState(message);
    this.setState((prevState) => ({
      ...prevState,
      linkedin: false,
      github: true,
    }));
  };

  handlePortfolio = () => {
    let message = this.createChatBotMessage(
      "Got it! Here is a directory to help you explore",
      {
        widget: "overview",
      }
    );
    this.addMessageToState(message);
  };

  handleInstructions = () => {
    let message = this.createChatBotMessage(
      `Enter 'Porfolio' and I can help you navigate around this site and see what Alex has been up to, or enter 'Options' to see some ways I can help answer some of your questions!`
    );
    this.addMessageToState(message);
  };

  contactPlug = () => {
    let message = this.createChatBotMessage(
      "Sure! Let me bring you to my contact page, or feel free to reach me at:",
      { withAvatar: true }
    );
    this.addMessageToState(message);
    let phoneNumber = this.createChatBotMessage("cell: (707)-580-2245", {
      withAvatar: false,
      delay: 1000,
    });
    this.addMessageToState(phoneNumber);
    let emailPrompt = this.createChatBotMessage("or send an email to: ", {
      withAvatar: true,
      delay: 1500,
    });
    this.addMessageToState(emailPrompt);
    let email = this.createChatBotMessage("alexjmendoza514@gmail.com", {
      withAvatar: false,
      delay: 1500,
    });
    this.addMessageToState(email);
  };

  addPhone() {
    let message = this.createChatBotMessage("Give me a call at: ", {
      withAvatar: true,
    });
    this.addMessageToState(message);

    let phoneNumber = this.createChatBotMessage("cell: (707)-580-2245", {
      withAvatar: false,
      delay: 1000,
    });
    this.addMessageToState(phoneNumber);
  }

  addEmail() {
    let message = this.createChatBotMessage("Reach me at: ", {
      withAvatar: true,
    });
    this.addMessageToState(message);

    let phoneNumber = this.createChatBotMessage("alexjmendoza514@gmail.com", {
      withAvatar: false,
      delay: 1000,
    });
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
