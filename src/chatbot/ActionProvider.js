class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleClearScreen = () => {
    let message = this.createChatBotMessage(
      "You got it! Let me clean up the chat"
    );
    let message2 = this.createChatBotMessage(
      "Remember, you can ask for 'help' if you ever need it!"
    );
    this.addMessageToState(message);

    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [],
      }));
    }, 2000);

    setTimeout(() => {
      this.addMessageToState(message2);
    }, 2000);
  };

  handleResume = () => {
    let message = this.createChatBotMessage(
      "I'll attach a resume preview below, or click the button below to view on LinkedIn",
      {
        widget: "linkedin",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      path: "resume",
    }));
    this.addMessageToState(message);
  };

  handleSkills = () => {
    let message = this.createChatBotMessage("this is my skillz");
    this.addMessageToState(message);
  };

  handleProjects = () => {
    let message = this.createChatBotMessage(
      "Sure! Here are some of the projects Alex has been working on recently.",
      {
        widget: "projects",
      }
    );
    let message2 = this.createChatBotMessage(
      "Which would you like to learn more about? Select any options above or enter the name in the chat",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  handleTuTube = () => {
    let message = this.createChatBotMessage(
      "Sure! TuTube is a pixel perfect clone of YouTube Alex created completely from scratch using Ruby on Rails for the back end, and React/Redux on the front end.",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "Some other technologies used in TuTube include Heroku and S3 for hosting, active record and postgreSQL for data management, and tools like Webpack and JQuery/JBuilder to assist in bridging back end to front end",
      {
        delay: 3000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Some newer features include complete user authentication, a 'dark mode' that completely mimics the YouTube experience that persists across load, and a refind sorting option that allows users to sort comments on date posted or like counts",
      {
        delay: 5000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message3);
    let message4 = this.createChatBotMessage(
      "Hit the button below to check out the live site! Or enter 'go' to open up a new tab all the same",
      {
        delay: 6000,
        withAvatar: true,
        widget: "project",
      }
    );
    this.addMessageToState(message4);
    this.setState((prevState) => ({
      ...prevState,
      path: "tutube",
    }));
  };

  handleBubbleBall = () => {
    let message = this.createChatBotMessage(
      "Alex's favorite! Bubble Ball is a completely browser run game made only with vanilla JS, HTML Canvas, and Howler.js to play audio samples regardless of browser",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "NO other libraries or outside resources were used. Which made this a...challening...game to make. But the result was worth it.",
      {
        delay: 3000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Alex was inspired by the NBA's season restart taking place in the orlando 'bubble', and styled the game play off of an arcade classic 'Bust-a-Move'. Players can choose from LeBron James or Steph Curry that provide different abilities.",
      {
        delay: 5000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message3);
    let message4 = this.createChatBotMessage(
      "Next on the list for features? A global leaderboard. Coming soon!",
      {
        delay: 7000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message4);
    let message5 = this.createChatBotMessage(
      "Hit the button below to play the game! Or enter 'go'",
      {
        delay: 8000,
        withAvatar: true,
        widget: "project",
      }
    );
    this.addMessageToState(message5);
    this.setState((prevState) => ({
      ...prevState,
      path: "bubbleball",
    }));
  };

  // handleDemo = () => {
  //   let message = this.createChatBotMessage("No problem!");
  //   this.addMessageToState(message);
  //   let message2 = this.createChatBotMessage("Need help? Enter 'help'!");
  //   this.addMessageToState(message2);
  // }

  handlePublications = () => {
    let message = this.createChatBotMessage(
      "As part of Alex's psychology and legal studies dual major at Claremont McKenna College, he wrote a thesis on the legal implications of 3D printing technology and it's MASSIVE impact on IP law"
    );
    let message2 = this.createChatBotMessage(
      "As of today, it has several thousand downloads in over 100 countries around the world!",
      { delay: 2000, withAvatar: true }
    );
    let message3 = this.createChatBotMessage(
      "Enter 'go' to check it out or press the button below",
      {
        widget: "linkedin",
        withAvatar: true,
        delay: 3000,
      }
    );
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

  directTuTube = () => {
    window.open("https://tutube-fsp.herokuapp.com/#/");
  };

  directBubbleBall = () => {
    window.open("https://amendoza514.github.io/");
  };

  directRestaurantRoulette = () => {
    window.open("https://rrc-app.herokuapp.com/#/");
  };

  directResume = () => {
    window.open(
      "https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/"
    );
  };

  directDefault = () => {
    let message = this.createChatBotMessage(
      `go where? If you want to visit somewhere like Alex's LinkedIn, try asking about LinkedIn in general`
    );

    this.addMessageToState(message);
  };

  directGithub = () => {
    window.open("https://github.com/amendoza514");
  };

  directPublications = () => {
    window.open("https://scholarship.claremont.edu/cmc_theses/1032/");
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
      `Enter 'Porfolio' and I can help you navigate around this site (will be my portfolio) and see what Alex has been up to`,
      {
        withAvatar: true,
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
      3: "Not sure how to interpret that, try asking again! Or ask 'help' for options",
      4: "That went over my head, try again? Or try asking 'help' to see how we can get started",
    };
    let error = Math.floor(Math.random() * Math.floor(5));
    let message = this.createChatBotMessage(errorBank[error]);
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