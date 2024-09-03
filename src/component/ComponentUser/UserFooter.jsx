import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import icon1 from "../../assets/image/instagram.png";
import icon2 from "../../assets/image/whatsapp.png";
import icon3 from "../../assets/image/twitter.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2F2F2F  ",
        color: "#FFD700",
        padding: "2rem 2",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row>
          <Col
            md={12}
            className="mb-4"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
                style={{ border: "none" }}
              >
                <img
                  src={icon1}
                  alt="Logo"
                  width="40"
                  height="40"
                  style={{
                    filter:
                      "invert(68%) sepia(96%) saturate(457%) hue-rotate(0deg) brightness(99%) contrast(92%)",
                  }}
                />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
                style={{ border: "none" }}
              >
                <img
                  src={icon2}
                  alt="Logo"
                  width="40"
                  height="40"
                  style={{
                    filter:
                      "invert(68%) sepia(96%) saturate(457%) hue-rotate(0deg) brightness(99%) contrast(92%)",
                  }}
                />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
                style={{ border: "none" }}
              >
                <img
                  src={icon3}
                  alt="Logo"
                  width="40"
                  height="40"
                  style={{
                    filter:
                      "invert(68%) sepia(96%) saturate(457%) hue-rotate(0deg) brightness(99%) contrast(92%)",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              fontFamily: "Merriweather, serif",
            }}
          >
            <h5
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              INFORMASI
            </h5>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                fontSize: "14px",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="/kontak"
                  style={{
                    color: "#FFD700",
                    textDecoration: "none",
                    fontWeight: "lighter",
                  }}
                >
                  Hubungi Kami
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="/tentangkami"
                  style={{ color: "#FFD700", textDecoration: "none" }}
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              fontFamily: "Merriweather, serif",
            }}
          >
            <h5
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              TAUTAN KAMI
            </h5>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                fontSize: "14px",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="/kebijakan"
                  style={{ color: "#FFD700", textDecoration: "none" }}
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              fontFamily: "Merriweather, serif",
            }}
          >
            <h5
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              KONTAK
            </h5>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                fontSize: "14px",
              }}
            >
              <li style={{ marginBottom: "0.5rem", fontWeight: "lighter" }}>
                Telepon: (021) 123-4567
              </li>
              <li style={{ marginBottom: "0.5rem", fontWeight: "lighter" }}>
                Email: info@contoh.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          marginTop: "20px",
          fontFamily: "Merriweather, serif",
          fontSize: "14px",
        }}
      >
        © 2024 Coffee House
        <a className="text-light" href="#">
          {" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
