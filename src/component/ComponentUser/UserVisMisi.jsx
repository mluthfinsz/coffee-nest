import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import papImage from "../../assets/image/cafe.jpg";

const VisiMisi = () => {
  const rectangleStyle = {
    backgroundColor: "#4A2F1D",
    color: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    marginBottom: "50px",
  };

  const headingStyle = {
    marginTop: "20px",
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    color: "#FFD700",
    fontSize: "32px",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginRight: "20px",
  };

  const textStyle = {
    textAlign: "justify",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
    fontSize: "14px",
    marginTop: "10px",
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div style={rectangleStyle} className="d-flex align-items-center">
            <div className="text-center">
              <Image src={papImage} alt="Owner" style={imageStyle} />
              <p
                style={{
                  color: "white",
                  marginTop: "10px",
                  fontFamily: "Merriweather, serif",
                }}
              >
                Owner
              </p>
            </div>
            <div className="text-center">
              <Image src={papImage} alt="CEO" style={imageStyle} />
              <p
                style={{
                  color: "white",
                  marginTop: "10px",
                  fontFamily: "Merriweather, serif",
                }}
              >
                CEO
              </p>
            </div>
            <div className="flex-grow-1">
              <h2 style={{ ...headingStyle, textAlign: "center" }}>
                VISI & MISI
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  paddingLeft: "10px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "normal",
                  fontSize: "24px",
                }}
              >
                Visi: <br></br>
              </p>
              <p
                style={{
                  textAlign: "justify",
                  paddingLeft: "10px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              >
                Visi kami adalah menjadi tempat favorit bagi pecinta kopi di
                mana mereka dapat menikmati pengalaman kopi yang tak tertandingi
                dalam suasana yang nyaman dan inspiratif. Kami berkomitmen untuk
                menjadi pelopor dalam industri kopi dengan terus mengembangkan
                produk berkualitas tinggi yang diproduksi secara berkelanjutan.{" "}
                <br></br>
                <br></br>
              </p>
              <p
                style={{
                  textAlign: "justify",
                  paddingLeft: "10px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "normal",
                  fontSize: "24px",
                }}
              >
                Misi: <br></br>
              </p>
              <p
                style={{
                  textAlign: "justify",
                  paddingLeft: "10px",
                  fontFamily: "Josefin Sans",
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              >
                1. Menyajikan Kopi Terbaik: Kami berkomitmen untuk menyajikan
                kopi berkualitas tinggi yang dipilih dengan cermat dari
                perkebunan kopi terbaik di seluruh dunia. Setiap cangkir kopi
                yang kami sajikan adalah hasil dari dedikasi dan keahlian
                barista kami. <br></br>
                2. Menciptakan Suasana Nyaman: Kami menyediakan lingkungan yang
                ramah dan nyaman bagi pelanggan kami, di mana mereka dapat
                bersantai, bekerja, atau bersosialisasi. Kami percaya bahwa
                suasana yang hangat dan menyenangkan adalah bagian penting dari
                pengalaman menikmati kopi.<br></br>
                3. Memberikan Pelayanan Terbaik: Tim kami berdedikasi untuk
                memberikan pelayanan yang ramah dan profesional kepada setiap
                pelanggan. Kami berusaha untuk menciptakan pengalaman yang
                memuaskan dan tak terlupakan bagi setiap tamu yang datang ke
                coffee house kami. <br></br>
                4. Inovasi dalam Produk: Kami terus mencari cara baru untuk
                menghadirkan pengalaman kopi yang unik dan inovatif. Dari teknik
                penyeduhan yang mutakhir hingga kreasi minuman yang kreatif,
                kami selalu berusaha untuk melampaui ekspektasi pelanggan kami.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisiMisi;
