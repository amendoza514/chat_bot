import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from '../components/overview/Overview'
import Linkedin from "../components/linkedin/linkedin";
import Github from "../components/github/github";
import Projects from '../components/projects/projects';
import Project from  '../components/projects/project'
import BotAvatar from "../components/botAvatar/BotAvatar";
import Skills from '../components/skills/skills'

const config = {
  botName: "AlexBot",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to this demo chat bot program`),
    createChatBotMessage(
      `Enter 'porfolio' and I can help you navigate around this site (will be my portfolio) and see what Alex has been up to`,
      {
        withAvatar: true,
        delay: 2000,
      }
    ),
    createChatBotMessage(
      `Enter 'options' to see a list of questions I can answer!`,
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
