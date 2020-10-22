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
      "I'll attach a resume preview below (once integrated into actual portfolio site), or click the button below to view on LinkedIn",
      {
        widget: "linkedin",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      path: "resume",
      directLink: true,
    }));
    this.addMessageToState(message);
  };

  // deleteTest = () => {
  //   for (let i = 0; i < this.state.messages.length; i++ ) {
  //     let m = this.state.messages[i]

  //     if (m.directLink) {
  //       this.setState((prevState) => ({
  //         ...prevState,
  //         messages: [...prevState.messages.slice(0, i).concat(...prevState.mesage.slice(i + 1))],
  //       }));
  //     }
  //   }
  // }

  handleSkills = () => {
    let message = this.createChatBotMessage("Let's dive into it!", {
      withAvatar: true,
    });
    let path = this.createChatBotMessage(
      "Where should we start? Select any of these options below, or enter the name in chat",
      {
        withAvatar: true,
        widget: "skills",
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    this.addMessageToState(path);
  };

  handleLanguages = () => {
    // this.setState((prevState) => ({
    //   ...prevState,
    //   path: "languages",
    // }));
    let message = this.createChatBotMessage(
      "I'll pull up the languages (including SQL) Alex has worked with now",
      {
        withAvatar: true,
      }
    );
    let message2 = this.createChatBotMessage(
      "Languages: JavaScript, Ruby, Python, PostgreSQL, NoSQL (MongoDB)",
      {
        withAvatar: false,
        delay: 1500,
      }
    );
    let message3 = this.createChatBotMessage(
      "Would you like to see some of the projects leveraging the above langauges? Try entering the any of the above options to check!",
      {
        withAvatar: true,
        delay: 2500,
      }
    );
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };

  handleFrameworks = () => {
    // this.setState((prevState) => ({
    //   ...prevState,
    //   path: "languages",
    // }));
    let message = this.createChatBotMessage(
      "Here are some frameworks Alex has developed in",
      {
        withAvatar: true,
      }
    );
    let message2 = this.createChatBotMessage(
      "Frameworks: Ruby on Rails, React, React & Redux, MERN (not really a framework, but fits here!)",
      {
        withAvatar: false,
        delay: 1500,
      }
    );
    let message3 = this.createChatBotMessage(
      "Would you like to see some of the projects leveraging the above frameworks? Try entering the any of the above options to check!",
      {
        withAvatar: true,
        delay: 3500,
      }
    );
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };

  handleOtherTechnology = () => {
    // this.setState((prevState) => ({
    //   ...prevState,
    //   path: "languages",
    // }));
    let message = this.createChatBotMessage(
      "I'll run through some other technologies and protocols Alex has experience with. Buckle up!",
      {
        withAvatar: true,
      }
    );
    let message2 = this.createChatBotMessage(
      "Other Technology: JQuery, AJAX, HTML 5, Canvas, JBuilder, Git, Rspec, Express.js, Axios, SQLite3, Looker, DNS, Node.js, Mongoose, Heroku, AWS S3, CSS/SCSS, JSON",
      {
        withAvatar: false,
        delay: 1500,
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  handleEverything = () => {
    let intro = this.createChatBotMessage(
      "You asked for it! Here is the full list. Try asking for a specific 'langauge' or 'framework' to see which projects use which",
      {
        withAvatar: true,
      }
    );
    let languages = this.createChatBotMessage(
      "Languages: JavaScript, Ruby, Python, PostgreSQL, NoSQL (MongoDB)",
      {
        withAvatar: false,
        delay: 1500,
      }
    );
    let frameworks = this.createChatBotMessage(
      "Frameworks: Ruby on Rails, React, React & Redux, MERN (not really a framework, but fits here!)",
      {
        withAvatar: false,
        delay: 3500,
      }
    );

    let other = this.createChatBotMessage(
      "Other Technology: JQuery, AJAX, HTML 5, Canvas, JBuilder, Git, Rspec, Express.js, Axios, SQLite3, Looker, DNS, Node.js, Mongoose, Heroku, AWS S3, CSS/SCSS, JSON",
      {
        withAvatar: false,
        delay: 5000,
      }
    );

    this.addMessageToState(intro);
    this.addMessageToState(languages);
    this.addMessageToState(frameworks);
    this.addMessageToState(other);
  };

  handleNonTechnical = () => {
    let intro = this.createChatBotMessage(
      "When Alex is not on Stack Overflow, he is also well versed in the following:",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    let music = this.createChatBotMessage(
      "Music: Alex played Saxophone through highschool, but then quickly picked up guitar because his sax was stolen and they are not cheap to replace",
      {
        withAvatar: false,
        delay: 2500,
      }
    );
    let sports = this.createChatBotMessage(
      "Sports: Alex started swimming at age 6, and swam competeively through college at Claremont McKenna College. A distance freestyle specialist, Alex excelled at staving off not passing out. Alex is not bitter about having his 1650 freestyle school record beaten after his senior year at all",
      {
        withAvatar: false,
        delay: 4500,
      }
    );
    let powerlifting = this.createChatBotMessage(
      "Powerlifting: As a direct response to ridiculous cardio training his whole life, Alex now spends his time training to excert energy for the shortest amount of time possible. His squat numbers are very laughable currently.",
      {
        withAvatar: false,
        delay: 7500,
      }
    );
    let basketball = this.createChatBotMessage(
      "NBA: Alex thinks about the basketball too much, evident in several projects themed around the sport. Alex considers himself LeBron's number 1 fan, which has been difficult as he lives in Warriors territory. He loves discussing the GOAT conversation",
      {
        withAvatar: false,
        delay: 10500,
      }
    );
    

    this.addMessageToState(intro);
    this.addMessageToState(music);
    this.addMessageToState(sports);
    this.addMessageToState(powerlifting);
    this.addMessageToState(basketball);
  };

  handleJavascript = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "javascript",
    }));
    let message = this.createChatBotMessage(
      "Alex's first and favorite language! Here are some examples of JS in action, click or enter the names of the projects to see more",
      {
        withAvatar: true,
        delay: 1000,
        widget: "projects",
      }
    );
    this.addMessageToState(message);
  };

  handleRuby = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "ruby",
    }));
    let message = this.createChatBotMessage(
      "Alex first true back end dev experiences used Ruby. Click or enter the names of the projects to see more!",
      {
        withAvatar: true,
        delay: 1000,
        widget: "projects",
      }
    );
    this.addMessageToState(message);
  };

  handlePython = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "python",
    }));
    let message = this.createChatBotMessage(
      "Alex's first intro to data structures & algorithm were tackled using Python! No projects feature it yet unfortunately"
    );
    this.addMessageToState(message);
  };

  handlePostgres = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "postgres",
    }));
    let message = this.createChatBotMessage(
      "Alex spent over a year as the primary data analyst at Fort Point Beer Company, where he wrote Postgres queries on a daily basis, in addition to using postgres to incorporate Looker into Fort Point's tech stack",
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "Additionally, Alex has had the chance to build some full stack applications with postgres behind the scenes. Click or enter the names of the projects to see more",
      {
        withAvatar: true,
        delay: 3000,
        widget: "projects",
      }
    );
    this.addMessageToState(message2);
  };

  handleNosql = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "nosql",
    }));
    let message = this.createChatBotMessage(
      "Outside of more traditial SQL languages, Alex has also used NoSQL languages like MongoDB with the following, click or enter the names of the projects to see more",
      {
        withAvatar: true,
        delay: 1000,
        widget: "projects",
      }
    );
    this.addMessageToState(message);
  };

  handleRails = () => {
    let message = this.createChatBotMessage(
      "Rails it is! Alex's go-to for back end configuration. Projects include:",
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage("TuTube", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Enter any of the projects above to learn more!",
      {
        withAvatar: true,
        delay: 4000,
      }
    );
    this.addMessageToState(message3);
  };

  handleReact = () => {
    let message = this.createChatBotMessage(
      "React! I'll list Alex's React work below:",
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage("TuTube", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage("Restaurant Roulette", {
      withAvatar: false,
      delay: 3000,
    });
    this.addMessageToState(message3);
    let message4 = this.createChatBotMessage("This portfolio and chatbot!", {
      withAvatar: false,
      delay: 4000,
    });
    this.addMessageToState(message4);
    let message5 = this.createChatBotMessage(
      "Enter any of the projects above to learn more! Except the chatbot/portfolio piece, you're here already!",
      {
        withAvatar: true,
        delay: 6000,
      }
    );
    this.addMessageToState(message5);
  };

  handleRedux = () => {
    let message = this.createChatBotMessage(
      "Redux, in all of it's confusing and powerful glory. Here's some projects!",
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage("TuTube", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Ask me about any projects to learn more!",
      {
        withAvatar: true,
        delay: 6000,
      }
    );
    this.addMessageToState(message3);
  };

  handleMern = () => {
    let message = this.createChatBotMessage(
      "Best way to learn MERN is to learn almost all of it's components at once...at least that's what Alex did! Here's some work:",
      {
        withAvatar: true,
        delay: 1000,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage("Restaurant Roulette", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Ask me about any projects to learn more!",
      {
        withAvatar: true,
        delay: 6000,
      }
    );
    this.addMessageToState(message3);
  };

  handleProjects = () => {
    this.setState((prevState) => ({
      ...prevState,
      path: "projects",
    }));
    let message = this.createChatBotMessage(
      "Sure! Here are some of the projects Alex has been working on recently.",
      {
        widget: "projects",
      }
    );
    let message2 = this.createChatBotMessage(
      "Which would you like to learn more about? Select any options above or enter the name in the chat",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  handleTuTube = () => {
    let message = this.createChatBotMessage(
      "Sure! TuTube is a pixel perfect clone of YouTube Alex created completely from scratch using Ruby on Rails and React/Redux",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "Some other technologies used in TuTube include Heroku and S3, postgreSQL, webpack and live server",
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
      "Hit the button below to check out the live site! Or enter 'go' to open up a new tab all the same. OR enter 'tech' to get the full list of technologies used",
      {
        delay: 7000,
        withAvatar: true,
        widget: "project",
        directLink: true,
      }
    );
    this.addMessageToState(message4);
    this.setState((prevState) => ({
      ...prevState,
      path: "tutube",
    }));
  };

  handleRestaurantRoulette = () => {
    let message = this.createChatBotMessage(
      "Good choice! Restaurant Roulette is a totally custom application built in the MERN stack that encourages new dining destinations and experiences",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "3 other App Academy students and myself worked to get this project done in about a week! I worked mostly as a full stack engineer, since there was a lot to do, and not a lot of time!",
      {
        delay: 3000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "Users select a mile radius, a food/drink preference, and spin the wheel! Our Yelp API fetches a random suggestion that hasn't previously been visited",
      {
        delay: 5000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message3);
    let message4 = this.createChatBotMessage(
      "If you like the suggestion, users can store the restaurant in list availble in the users profile for later reference, and can sort by a variety of metrics",
      {
        delay: 7000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message4);
    let message5 = this.createChatBotMessage(
      "Give it a try! Or enter 'go' to visit, or 'tech' to learn more about the tech stack",
      {
        delay: 9000,
        withAvatar: true,
        widget: "project",
        directLink: true,
      }
    );
    this.addMessageToState(message5);
    this.setState((prevState) => ({
      ...prevState,
      path: "restaurantroulette",
    }));
  };

  handleBubbleBall = () => {
    let message = this.createChatBotMessage(
      "Alex's favorite! Bubble Ball is a completely browser run game made only with vanilla JS, HTML, and Howler.js to play audio samples regardless of browser",
      {
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
    let message2 = this.createChatBotMessage(
      "NO other libraries or outside resources were used. Which made this a...challening...game to make. But worth it!",
      {
        delay: 3000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message2);
    let message3 = this.createChatBotMessage(
      "BB was inspired by the NBA's season restart taking place in the Orlando 'bubble', and styled the game play off of an arcade classic 'Bust-a-Move'. Players can choose from LeBron James or Steph Curry that provide different abilities.",
      {
        delay: 5000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message3);
    let message4 = this.createChatBotMessage(
      "...even though steph shouldn't be in the same sentence as LeBron...",
      {
        delay: 6000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message4);
    let message5 = this.createChatBotMessage(
      "Next on the list for features? A global leaderboard. Coming soon!",
      {
        delay: 8000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message5);
    let message6 = this.createChatBotMessage(
      "Hit the button below enter 'go' to play! Or enter 'tech' to get the full list of technologies used",
      {
        delay: 10000,
        withAvatar: true,
        widget: "project",
        directLink: true,
      }
    );
    this.addMessageToState(message6);
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
        directLink: true,
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
        directLink: true,
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

  techTuTube = () => {
    let intro = this.createChatBotMessage("Let's take a look!", {
      withAvatar: true,
      delay: 500,
    });
    this.addMessageToState(intro);
    let hosting = this.createChatBotMessage(
      "Hosting: Heroku (live site), AWS S3 (picture and video storage)",
      { withAvatar: false, delay: 2000 }
    );
    this.addMessageToState(hosting);
    let frontend = this.createChatBotMessage(
      "Frontend: JavaScript & ES6, React & Redux, CSS / SCSS, JQuery, JBuilder",
      { withAvatar: false, delay: 3000 }
    );
    this.addMessageToState(frontend);
    let backend = this.createChatBotMessage(
      "Backend: Ruby on Rails, PostgreSQL, Active Record",
      { withAvatar: false, delay: 4000 }
    );
    this.addMessageToState(backend);
  };

  techBubbleBall = () => {
    let intro = this.createChatBotMessage("Sure! Here's a rundown", {
      withAvatar: true,
      delay: 500,
    });
    this.addMessageToState(intro);
    let hosting = this.createChatBotMessage("Hosting: GitHub pages", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(hosting);
    let frontend = this.createChatBotMessage(
      "Frontend: JavaScript, HTML 5 Canvas, CSS / SCSS",
      { withAvatar: false, delay: 3000 }
    );
    this.addMessageToState(frontend);
    let backend = this.createChatBotMessage("MISC: Howler.js", {
      withAvatar: false,
      delay: 4000,
    });
    this.addMessageToState(backend);
    let end = this.createChatBotMessage("...and that's it!", {
      withAvatar: true,
      delay: 6000,
    });
    this.addMessageToState(end);
  };

  techRestaurantRoulette = () => {
    let intro = this.createChatBotMessage("Got it! Let's look", {
      withAvatar: true,
      delay: 500,
    });
    this.addMessageToState(intro);
    let hosting = this.createChatBotMessage("Hosting: Heroku", {
      withAvatar: false,
      delay: 2000,
    });
    this.addMessageToState(hosting);
    let frontend = this.createChatBotMessage(
      "Frontend: Node.js, Express.js, SCSS, React",
      { withAvatar: false, delay: 3000 }
    );
    this.addMessageToState(frontend);
    let backend = this.createChatBotMessage("Backend: MongoDB, Mongoose", {
      withAvatar: false,
      delay: 4000,
    });
    this.addMessageToState(backend);
    let api = this.createChatBotMessage(
      "API Integrations: Yelp API, Google Map API",
      {
        withAvatar: false,
        delay: 5000,
      }
    );
    this.addMessageToState(api);
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
        directLink: true,
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