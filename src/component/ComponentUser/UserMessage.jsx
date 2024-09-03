import React, { useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import Bg from "../../assets/image/CafeHouse.jpg";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", {
      name,
      email,
      message,
    });
    alert("Pesan berhasil dikirim");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Image
        src={Bg}
        alt="Cafe House"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
        fluid
      />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div
          className="p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            fontSize: "14px",
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            marginRight: "20px",
            flex: 1,
            maxWidth: "400px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4
            className="mb-4"
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#FFD700",
            }}
          >
            Pesan
          </h4>
          <Form style={{ color: "white" }} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="mt-3"
              style={{ width: "100%", padding: "10px" }}
            >
              Submit
            </Button>
          </Form>
        </div>

        <div
          className="p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            fontSize: "14px",
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            marginLeft: "20px",
            flex: 1,
            maxWidth: "400px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              color: "#FFFFFF",
              textAlign: "justify",
            }}
          >
            Kami senang mendengar dari Anda! Baik Anda memiliki pertanyaan
            tentang menu kami, membutuhkan bantuan dengan reservasi, atau hanya
            ingin memberikan masukan, tim kami siap membantu. Silakan isi
            formulir di bawah ini dengan nama, email, dan pesan Anda. Kami
            berusaha untuk merespons semua pertanyaan dalam waktu 24 jam. Terima
            kasih telah menghubungi kami, dan kami berharap dapat segera
            melayani Anda!
          </p>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
