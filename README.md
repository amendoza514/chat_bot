# Alex Chat-Bot

*Alex Chat-Bot* (https://chat-bot-demo.netlify.app/#/) is JavaScript and React project, bootstrapped using create-react-app and React-chatbot-kit created by Fredrik Oseberg.

# About

Alex Chat-Bot was created for and inspired by MintBeans 'hack-the-chatbot' edition of their reoccuring Hackathon events. Using React-chatbot-kit as a starting point, Alex Chat-Bot was built to leverage details regarding Alex Mendoza's (amendoza514 on GitHub) portfolio site under construction, as well as details about personal life that visiting users may be curious about.

Users are prompted by a few short messages that offer a few starting paths to get going with Alex Chat-Bot, as well as reminders to ask for 'help' at anypoint if they are unsure of next moves.

Users can navigate to larger directories like 'Portfolio' or 'Options' that will lead them down very different narrative paths for the chat bot, and allows users to dive into specific details only when prompted to avoid information dumps.

Additionally, Alex's projects and work experience are linked to language and framework components under the larger 'skills and technology' umbrella found in the 'portfolio' section, meaning users can explore various technologies and then explore projects that leveraged them during development. Users can then 'go' straight to projects opened up in a new tab to avoid interuppting the chat history, as well as have direct links to LinkedIn, resume details, and GitHub.


### Basic App Structure 
React-chatbot-kit sets up a very general class component hierarchy that allows users to build custom message parsing from scratch, as well as building custom components called 'widgets' that allow selected elements within state to travel to accompanying React elements. 

The initial journey begins at the config.js file passed into the <Chabot /> component in the main App.js directory. Custom widgets are created here, as well as initial messages dsiplayed to users, custom css formatting, and state variables to be used later. Custom components flow through this config layer.

Below is a snippet from config.js 

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
      `Enter 'Options' to see some ways I can help answer questions about Alex or me!`,
      {
        withAvatar: true,
        delay: 3000,
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
    {
      widgetName: "project",
      widgetFunc: (props) => <Project {...props} />,
      mapStateToProps: ["path"],
    },
    {
      widgetName: "skills",
      widgetFunc: (props) => <Skills {...props} />,
    },
    {
      widgetName: "linkedin",
      widgetFunc: (props) => <Linkedin {...props} />,
      mapStateToProps: ["path"],
    },
    {
      widgetName: "github",
      widgetFunc: (props) => <Github {...props} />,
    },
  ],
};

export default config;

 
    
    ///
    
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

Objects that have collided then get sent to a separate custom algorithm that allows for collisions to 'pop' surrounding targets/projectile based on valid location data and various collision related flags that now live in the targets/projectiles. These collisions and cluster chain-reaction checks are being rendered on every animation frame to allow for fluid gameplay.

### Turret Swivel and Projectile Fire Trajectory 
In order to track turret movement and projectile fire I seeded live mouse position coordinates from the HTML Canvas element to influence subsequent repaints of the turret object [x, y]  endpoints, resulting in a rectangle canvas element that follows the players' mouse in real time. The turret then passes new Projectile objects with these coordinates and slope characteristics to render new projectiles in the correct travel path.

Players that selected the *Steph Curry* ability can also utilize an extended version of the mouse tracking turret, which gives players a visual aim reticle to guide shot placement (represented by the *cheatX* and *cheatY* attributes below).

    
    swivelTurret(mousePosition) {
	    this.dx = mousePosition[0] - 160;
	    this.dy = 540 - mousePosition[1];
	    let  swivel = Math.atan2(this.dy, this.dx) + Math.PI;
	    let  hyp = Math.sqrt(this.dy ** 2 + this.dx ** 2);
	    this.aimX = 160 - Math.cos(swivel) * 50;
	    this.aimY = 540 + Math.sin(swivel) * 50;
	    this.cheatX = 160 - Math.cos(swivel) * 550;
	    this.cheatY = 540 + Math.sin(swivel) * 550;
	    this.speedX = -Math.cos(swivel) * 12;
	    this.speedY = Math.sin(swivel) * 12;
    }
    
    fire() {
        if (this.game.reloaded === true) {
		    let  projectile = new  Projectile({
			    game:  this.game,
			    slope: [this.speedX, this.speedY],
			    aimX:  this.aimX,
			    aimY:  this.aimY,
			    color:  this.shots[0],
		    });
    
	    this.projectiles += 1;
	    this.game.reloaded = false;
	    this.game.addProjectiles(projectile);
	    this.shots.shift();
	    this.shots.push(this.randomColor());
	    }
    }
    

## Technologies Used

 - JavaScript
 - HTML Canvas
 - SCSS / CSS
 - howler.js

## Future Implementations

 - Firebase DB for global leaderboard / highscore element
 - Improved 2D Raycasting element to have aim reticle 'bounce' off of walls and show more fluid projectile trajectory paths.
 - Improved collision detection that results in fewer less dropped shots.

