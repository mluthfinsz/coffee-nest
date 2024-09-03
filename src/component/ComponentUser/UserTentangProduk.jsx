import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ponImage from "../../assets/image/Aset2.png";

const TentangProduk = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "#FFD700",
              marginTop: "50px",
            }}
          >
            Produk
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "#ECE2C5",
              marginLeft: "70px",
              marginTop: "30px",
            }}
          >
            Nikmati pengalaman kopi terbaik di Coffee House
          </p>
          <p
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              color: "#FFFFFF",
              marginLeft: "5px",
              textAlign: "justify",
              marginTop: "40px",
            }}
          >
            Kami menyajikan berbagai pilihan kopi berkualitas tinggi, mulai dari
            espresso yang pekat hingga cappuccino yang lezat. Rasakan kenikmatan
            kopi yang dipanggang segar dan disajikan dengan penuh cinta oleh
            barista kami yang berpengalaman. <br></br>
            <br></br>Selain kopi, kami juga menawarkan pilihan teh, minuman
            lainnya, dan camilan lezat yang akan melengkapi momen santai Anda.
            Temukan suasana nyaman dan ramah di kedai kami, tempat yang sempurna
            untuk berkumpul dengan teman atau sekadar menikmati waktu sendiri.
          </p>
        </Col>
        <Col xs={6} className="text-center">
          {/* Gambar berada di tengah secara horizontal dengan margin top */}
          <img
            src={ponImage}
            alt="Pon Image"
            style={{ maxWidth: "27%", height: "auto", marginTop: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TentangProduk;
