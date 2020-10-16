import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "AlexBot",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome to this demo chat bot program. What would you like to know?`, { 
      widget: 'options',
    }),
  ],
  // widgets: [
  //   {
  //     widgetName: "options",
  //     widgetFunc: (props) => <Options {...props} />,
  //   },
  // ],
};

export default config;
