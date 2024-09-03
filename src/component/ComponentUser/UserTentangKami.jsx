import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chatImage from "../../assets/image/coffeehouse.jpg";

const Tentang = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center position-relative">
          <div
            style={{ maxWidth: "100%", height: "auto", position: "relative" }}
          >
            <img
              src={chatImage}
              alt="Coffee House"
              style={{
                maxWidth: "100%",
                height: "auto",
                filter: "blur(1px)",
                borderRadius: "20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "42px",
                fontWeight: "bold",
                fontFamily: "Merriweather, serif",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.10)",
                mixBlendMode: "exclusion",
              }}
            >
              CAFFEINE COFFEE NEST
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tentang;
