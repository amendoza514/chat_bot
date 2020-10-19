import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from '../components/overview/Overview'
import BotAvatar from "../components/botAvatar/BotAvatar";

const config = {
  botName: "AlexBot",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to this demo chat bot program`),
    createChatBotMessage(`What would you like to see?`, {
      widget: "overview",
      withAvatar: true,
    }),
  ],
  customComponents: {
    botAvatar: (props) => < BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    // {
    //   widgetName: "options",
    //   widgetFunc: (props) => <Options {...props} />,
    // },
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
  ],
};

export default config;
