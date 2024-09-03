import React, { useState } from "react";
import chatIcon from "../assets/image/chatbot.png";

import Chatbot from "react-chatbot-kit";
// import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

import Navbar from "../component/ComponentUser/UserNavbar";
import CardHome from "../component/ComponentUser/UserCardHome";
import Service from "../component/ComponentUser/UserService";
import AboutProduct from "../component/ComponentUser/UserTentangProduk";
import Carousels from "../component/ComponentUser/UserFavorit";
import Footer from "../component/ComponentUser/UserFooter";
import ReviewCarousel from "../component/ComponentUser/UserReviewCarousel";
import ReviewForm from "../component/ComponentUser/UserReviewForm";
import Mobile from "../component/ComponentUser/UserMobile";

import "./style.css";

const Beranda = () => {
  const backgroundStyle = {
    background: `
      radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(50,50,50,0.6) 70%, rgba(0,0,0,0) 100%),
      radial-gradient(circle, rgba(50,50,50,0.5) 20%, rgba(0,0,0,0) 30%),
      linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.9))
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    color: "#ffffff",
  };

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <CardHome />
      <Service />
      <AboutProduct />
      <Mobile />
      <Carousels />
      <ReviewForm />
      <ReviewCarousel />
      <Footer />
      <div className="chatbot-button">
        {showChatbot && (
          <div className="chatbot-widget-container">
            <div className="chatbot-widget-header">
              CoffeeBot
              <button onClick={toggleChatbot} className="chatbot-close-button">
                X
              </button>
            </div>
            <div className="chatbot-widget-body">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        )}
        {!showChatbot && (
          <button onClick={toggleChatbot} className="chatbot-button">
            <img src={chatIcon} alt="Chatbot Icon" className="chatbot-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Beranda;
