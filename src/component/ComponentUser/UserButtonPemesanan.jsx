import React from "react";
import { Button } from "react-bootstrap";

const OrderButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <a
        href="/pemesanan"
        className="w-50 text-decoration-none"
        style={{
          fontFamily: "Merriweather, serif",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "10px",
        }}
      >
        <Button
          variant="primary"
          className="w-100"
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "#FFD700",
            border: "none",
            boxShadow: "none",
            padding: "10px 20px",
          }}
        >
          Pesan Sekarang <br /> Klik disini
        </Button>
      </a>
    </div>
  );
};

export default OrderButton;
