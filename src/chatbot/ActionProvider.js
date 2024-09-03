import axios from "axios";
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleMessage(message) {
    const response = await axios.post(
      "http://localhost:5005/webhooks/rest/webhook",
      {
        sender: "user",
        message: message,
      }
    );

    response.data.forEach((res) => {
      const botMessage = this.createChatBotMessage(res.text);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  }
}

export default ActionProvider;
