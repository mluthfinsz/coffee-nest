import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100vh",
        textAlign: "center",
        fontFamily: "Merriweather, serif",
        color: "white",
        fontSize: "34px",
        fontWeight: "bold",
      }}
    >
      <h1>Selamat Datang di Caffeine Coffee Nest</h1>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Merriweather, serif",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Nikmati kopi terbaik dengan suasana yang nyaman dan hangat.
      </p>
      <Button
        variant="dark"
        onClick={handleButtonClick}
        style={{ fontSize: "14px", padding: "10px 20px" }}
      >
        Masuk ke Halaman Beranda
      </Button>
    </Container>
  );
};

export default WelcomePage;
