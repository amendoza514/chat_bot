# Alex Chat-Bot

*Alex Chat-Bot* (https://chat-bot-demo.netlify.app/#/) is JavaScript and React project, bootstrapped using create-react-app and React-chatbot-kit created by Fredrik Oseberg.

# About

Alex Chat-Bot was created for and inspired by MintBeans 'hack-the-chatbot' edition of their reoccuring Hackathon events. Using React-chatbot-kit as a starting point, Alex Chat-Bot was built to leverage details regarding Alex Mendoza's (amendoza514 on GitHub) portfolio site under construction, as well as details about personal life that visiting users may be curious about.

Users are prompted by a few short messages that offer a few starting paths to get going with Alex Chat-Bot, as well as reminders to ask for 'help' at anypoint if they are unsure of next moves.

Users can navigate to larger directories like 'Portfolio' or 'Options' that will lead them down very different narrative paths for the chat bot, and allows users to dive into specific details only when prompted to avoid information dumps.

Additionally, Alex's projects and work experience are linked to language and framework components under the larger 'skills and technology' umbrella found in the 'portfolio' section, meaning users can explore various technologies and then explore projects that leveraged them during development. Users can then 'go' straight to projects opened up in a new tab to avoid interuppting the chat history, as well as have direct links to LinkedIn, resume details, and GitHub.


## Basic App Structure 
React-chatbot-kit sets up a very general class component hierarchy that allows users to build custom message parsing from scratch, as well as building custom components called 'widgets' that allow selected elements within state to travel to accompanying React elements. 

### Config 
The initial journey begins at the config.js file passed into the <Chabot /> component in the main App.js directory. Custom widgets are created here, as well as initial messages dsiplayed to users, custom css formatting, and state variables to be used later. Custom components flow through this config layer.

Below is a mock config.js file created from elements in production.

```sh
const config = {
  botName: "AlexBot",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to this demo chat bot program`),
    createChatBotMessage(
      `Enter 'Porfolio' and I can help you navigate around this site (will be my portfolio) and see what Alex has been up to`,
      {
        withAvatar: true,
        delay: 2000,
      }
    ),
    createChatBotMessage(
      `...or enter 'help' at anytime to bring up these options again, and 'clear' to clean up the chat!`,
      {
        withAvatar: true,
        delay: 5000,
      }
    ),
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    path: null,
    directLink: false,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "projects",
      widgetFunc: (props) => <Projects {...props} />,
      mapStateToProps: ["path"],
    },
``` 
### MessageParser
Once a user inputs a message, the 'messageParser' kicks in and directs the message to the appropriate path using the 'parse' method.

```sh
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    let input = message.toLowerCase();

    if (input.includes("help")) {
      this.actionProvider.handleInstructions();
      return;
    }
    if (input.includes("clear")) {
      this.actionProvider.handleClearScreen();
      return;
    }

    if (input.includes("go")) {
      if (this.state.path === "linkedin") {
        this.actionProvider.directLinkedin();
        return;
      } else if (this.state.path === "github") {
        this.actionProvider.directGithub();
        return;
      } else if (this.state.path === "resume") {
        this.actionProvider.directResume();
        return;
      } else {
        this.actionProvider.directDefault();
        return;
      }
    }

    if (input.includes("tech")) {
      if (this.state.path === "tutube") {
        this.actionProvider.techTuTube();
        return;
      } else if (this.state.path === "bubbleball") {
        this.actionProvider.techBubbleBall();
        return;
      } else if (this.state.path === "restaurantroulette") {
        this.actionProvider.techRestaurantRoulette();
        return;
      }
    }
    
    this.actionProvider.handleError();
  }
}

export default MessageParser;

``` 
### ActionProvider
After parsed in the messageParser, the actionProvider class takes over to define message content and send to the appropriate widget if necessary. The actionProvider also became a state / props staging area to help define paths in the background so that users could simply enter 'go' during certain portions of the chatbot experience and be sent to correct external resources depending on context.

```sh
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
  
    addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

``` 
### Custom Components / Widgets
Finally, appropriate messages are packaged with 'widget' props that can link other components defined by user to display additional content and potentially different actionProvider paths as well.

Below is an example of the LinkedIn widget created to handle various link regarding resume, projects and overall profile resources.

```sh
export class Linkedin extends Component {
  render() {
    let link; 
    if (this.props.path === "resume") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABh5UNwBWqBoK86ES8mS-lQTXWNmQJtTq-M,1602639015861)/";
    } else if (this.props.path === "linkedin") {
      link = "https://www.linkedin.com/in/alex-mendoza-aa4615b5/";
    } else if (this.props.path === "publications") {
      link = "https://scholarship.claremont.edu/cmc_theses/1032/";
    }

     let message;
     if (this.props.path === "resume") {
       message = "See it on my LinkedIn!";
     } else if (this.props.path === "linkedin") {
       message = "Go to my LinkedIn!";
     } else if (this.props.path === "publications") {
       message = "Check it out!";
     }
    
    return (
      <div className="linkedin-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="linkedin-button"
        >
          {message}
        </a>
      </div>
    );
  }
}

export default Linkedin;

``` 
    

## Technologies Used

 - JavaScript
 - React
 - create-react-app
 - create-chatbot-kit
 - netlify (simple hosting)
 - SCSS / CSS

## Future Implementations

 - Collapsable functionality to reduce footprint in an actual web application.
 - Improved conversational / contextual abilites that can be supplemented with more hard-coded options or by using various packages available on through npm.
 - Gmail integration to have direct email capabilites from inside the chatbot.

