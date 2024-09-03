import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const PaymentSuccess = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card
        style={{
          width: "50%",
          height: "50%",
          padding: "20px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            color: "white",
            fontSize: "34px",
          }}
        >
          Pembayaran Berhasil !!!
        </h1>
        <p
          className="text-center"
          style={{
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
            color: "black",
            fontSize: "20px",
          }}
        >
          Terima kasih atas pembayaran Anda. Transaksi Anda telah berhasil
          diselesaikan.
        </p>
        <Button
          variant="primary"
          className="w-100 mt-3"
          href="/home"
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            backgroundColor: "#191919",
            borderColor: "#191919",
            color: "#FFFFFF",
          }}
        >
          Halaman Awal
        </Button>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
