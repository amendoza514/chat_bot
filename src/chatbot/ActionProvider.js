class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleClearScreen = () => {
    let message = this.createChatBotMessage("You got it! Let me clean up the chat");
    let message2 = this.createChatBotMessage("remember, you can ask for 'help' if you ever need it!");
    this.addMessageToState(message);

    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [],
      }));
    }, 2000);

    setTimeout(() => {
      this.addMessageToState(message2)
    }, 2000);
  }
  

  handleResume = () => {
    let message = this.createChatBotMessage(
      "I'll attach a resume preview below, or click the button below to view on LinkedIn",
      {
        widget: "linkedin",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      path: 'resume',
    }));
    this.addMessageToState(message);
    return true
  };

  handleSkills = () => {
    let message = this.createChatBotMessage("this is my skillz");
    this.addMessageToState(message);
  };

  handleProjects = () => {
    let message = this.createChatBotMessage("this is my projects");
    this.addMessageToState(message);
  };

  // handleDemo = () => {
  //   let message = this.createChatBotMessage("No problem!");
  //   this.addMessageToState(message);
  //   let message2 = this.createChatBotMessage("Need help? Enter 'help'!");
  //   this.addMessageToState(message2);
  // }

  handlePublications = () => {
    let message = this.createChatBotMessage(
       "As part of my psychology and legal studies dual major at Claremont McKenna College, I wrote a thesis on the legal implications of 3D printing technology that discussed maufacturing and intellectual property concerns that comes with the technology to create anything at home"
     );
    let message2 = this.createChatBotMessage(
      "As of today, it has several thousand downloads in over 100 countries around the world!",
      { delay: 1000, withAvatar: true }
    );
    let message3 = this.createChatBotMessage("Enter 'go' to check it out or press the button below", {
      widget: 'linkedin',
      withAvatar: true,
      delay: 2000
    });
     this.setState((prevState) => ({
       ...prevState,
       path: "publications",
     }));
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };

  handleLinkedin = () => {
    let message = this.createChatBotMessage(
      "Travel over to LinkedIn? Press the button below or enter 'go' to open in a new tab",
      {
        widget: "linkedin",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      path: "linkedin",
    }));
    this.addMessageToState(message);
  };

  directLinkedin = () => {
    window.open("https://www.linkedin.com/in/alex-mendoza-aa4615b5/");
  };

  directResume = () => {
    window.open("https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/");
  };

  directDefault = () => {
    let message = this.createChatBotMessage(
      `go where? If you want to visit somewhere like Alex's LinkedIn, try asking about LinkedIn in general`
    );

    this.addMessageToState(message);
  }

  directGithub = () => {
    window.open("https://github.com/amendoza514");
  };

  handleGithub = () => {
    let message = this.createChatBotMessage(
      "Travel over to GitHub? Press the button below or enter 'go' to open in a new tab",
      {
        widget: "github",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      path: "github",
    }));
    this.addMessageToState(message);
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
    let message1 = this.createChatBotMessage(
      `Enter 'Porfolio' and I can help you navigate around this site (will be my portfolio) and see what Alex has been up to`, {
        withAvatar: true
      }
    );
    let message2 = this.createChatBotMessage(
      `or enter 'Options' to see some ways I can help answer some of your questions!`,
      {
        withAvatar: true,
      }
    );
    
    this.addMessageToState(message1);
    this.addMessageToState(message2);
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

  handleError() {
    let errorBank = {
      0: "Hmmm, not sure how to respond, Try asking again differently, or asking 'help' to see how we can get started",
      1: "Not sure how to help. Try asking again or asking 'help' to see more options",
      2: "Didn't catch that, maybe try again? Or ask 'help' for options",
      3: "Not sure how to interpret that, try asking again! Or ask help for options",
      4: "That went over my head, try again? Or try asking 'help' to see how we can get started",
    };
    let error = Math.floor(Math.random() * Math.floor(5));
    let message = this.createChatBotMessage(errorBank[error])
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

// deprecated linkedin example
  // handleLinkedin = () => {
  //   let message = this.createChatBotMessage(
  //     "Travel over to LinkedIn? Press the button below or enter 'go' to open in a new tab",
  //     {
  //       widget: "linkedin",
  //     }
  //   );
  //   this.addMessageToState(message);
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     linkedin: true,
  //     github: false,
  //   }));
  // };