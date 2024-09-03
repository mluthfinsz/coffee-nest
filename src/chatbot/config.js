import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "CoffeeBot",
  initialMessages: [createChatBotMessage(`Ada yang bisa saya bantu hari ini?`)],
  customComponents: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
