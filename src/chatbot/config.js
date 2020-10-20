import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from '../components/overview/Overview'
import Linkedin from "../components/linkedin/linkedin";
import Github from "../components/github/github";
import BotAvatar from "../components/botAvatar/BotAvatar";

const config = {
  botName: "AlexBot",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to this demo chat bot program`),
    createChatBotMessage(
      `Enter 'Porfolio' and I can help you navigate around this site and see what Alex has been up to, or enter 'Options' to see some ways I can help answer some of your questions!`,
      {
        withAvatar: true,
        delay: 1500,
      }
    ),
    createChatBotMessage(
      `...or enter 'help' at anytime to bring up these options again! `,
      {
        withAvatar: true,
        delay: 2000,
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
  state: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "linkedin",
      widgetFunc: (props) => <Linkedin {...props} />,
    },
    {
      widgetName: "github",
      widgetFunc: (props) => <Github {...props} />,
    },
  ],
};

export default config;
