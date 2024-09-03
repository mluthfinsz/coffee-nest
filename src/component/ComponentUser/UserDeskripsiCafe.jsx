import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Deskripsi = () => {
  const rectangleStyle = {
    backgroundColor: "#4A2F1D",
    color: "white",
    padding: "20px",
    marginBottom: "50px",
    height: "350px",
    borderRadius: "10px",
  };

  const headingStyle = {
    marginTop: "50px",
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    color: "#FFD700",
    fontSize: "32px",
    marginBottom: "20px",
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="text-center">
          <h1 style={headingStyle}>SEJARAH</h1>
          <div style={rectangleStyle}>
            <p
              style={{
                textAlign: "justify",
                fontFamily: "Josefin Sans",
                fontWeight: "normal",
                fontSize: "14px",
              }}
            >
              Caffeine Coffee Nest didirikan pada tahun 2024. Inspirasi untuk
              membuka coffee shop ini muncul dari hasrat pendirinya terhadap
              kopi berkualitas tinggi dan keinginan untuk menciptakan ruang yang
              nyaman bagi orang-orang untuk berkumpul, bersantai, dan menemukan
              inspirasi. <br></br>
              <br></br>Dalam upaya untuk memberikan pengalaman terbaik kepada
              pelanggan, Caffeine Coffee Nest bermitra dengan petani kopi lokal
              dan global untuk mendapatkan biji kopi terbaik. Tim barista yang
              terampil juga dilatih untuk menyajikan minuman dengan teknik
              terkini, memastikan setiap cangkir kopi memenuhi standar kualitas
              tinggi.
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <h1 style={headingStyle}>FILOSOFI</h1>
          <div style={rectangleStyle}>
            <p
              style={{
                textAlign: "justify",
                fontFamily: "Josefin Sans",
                fontWeight: "normal",
                fontSize: "14px",
              }}
            >
              Di Caffeine Coffee Nest, kami memandang kopi sebagai sebuah seni
              dan cara untuk menghubungkan manusia. Filosofi kami didasarkan
              pada beberapa prinsip utama: kualitas terbaik, inovasi,
              keberlanjutan, pelayanan yang hangat, dan koneksi sosial. Kami
              hanya menggunakan biji kopi pilihan terbaik dari seluruh dunia,
              diproses dengan cermat dan dipanggang dengan hati-hati untuk
              menghasilkan rasa yang kompleks dan memuaskan. Selalu mencari cara
              baru untuk menghadirkan pengalaman kopi yang unik, kami berusaha
              melampaui ekspektasi pelanggan melalui kreasi minuman dan teknik
              penyajian inovatif. <br></br>
              <br></br>Kami berkomitmen pada keberlanjutan dengan penggunaan
              bahan-bahan ramah lingkungan dan dukungan terhadap petani kopi
              lokal. Pelayanan yang ramah dan hangat dari tim barista kami
              adalah bagian penting dari pengalaman di coffee shop kami, yang
              juga dirancang sebagai tempat untuk bersantai, berdiskusi, dan
              menjalin hubungan sosial.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Deskripsi;
