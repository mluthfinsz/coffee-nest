import React, { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

const ChatbotModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="text-center">
        <Button
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "#FFD700",
            border: "none",
            boxShadow: "none",
            padding: "10px 20px",
            marginTop: "30px",
          }}
          onClick={handleButtonClick}
          className="w-50"
        >
          Rekomendasi Menu<br></br>Klik disini
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              textAlign: "center",
              display: "block",
              margin: "0 auto",
            }}
          >
            Rekomendasi Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChatbotConversation />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={handleCloseModal}
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "white",
              fontSize: "12px",
            }}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ChatbotConversation = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  // Contoh data pertanyaan dan jawaban
  const chatData = [
    {
      question: "Minuman apa yang cocok untuk siang hari?",
      answer:
        "Minuman yang cocok untuk diminum di siang hari adalah minuman yang menyegarkan dan bisa membantu mengatasi panasnya cuaca. Anda dapat memilih beberapa rekomendasi minuman tersebut adalah Iced Tea dan Iced Chococlate ",
    },
    {
      question:
        "Apa rekomendasi menu kopi yang paling populer di Caffeine Coffee Nest?",
      answer:
        "Rekomendasi menu kopi yang paling populer di Caffeine Coffee Nest adalah cappucino, Cappuccino ini memiliki rasa yang seimbang antara espresso, susu, dan foam, cocok dinikmati kapan saja.",
    },
    {
      question:
        "Apa menu makanan yang paling direkomendasikan di Caffeine Coffee Nest",
      answer:
        "Menu makanan yang direkomendasikan di Caffeine Coffee Nest adalah dimsum, dimsum ini memiliki tekstur yang lembut dengan isian udang yang segar dan bumbu yang pas, .",
    },
    // Tambahkan pertanyaan dan jawaban sesuai kebutuhan
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  return (
    <div>
      <ListGroup>
        {chatData.map((chat, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => handleQuestionClick(index)}
            active={selectedQuestionIndex === index}
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              textAlign: "justify",
            }}
          >
            {chat.question}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {selectedQuestionIndex !== null && (
        <div
          className="mt-3"
          style={{
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
            textAlign: "justify",
          }}
        >
          <strong>Jawaban:</strong> {chatData[selectedQuestionIndex].answer}
        </div>
      )}
    </div>
  );
};

export default ChatbotModal;
