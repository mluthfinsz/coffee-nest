import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import fontImage from "../../assets/image/kopi3.jpg";
import espresso from "../../assets/image/espresso.jpg";
import dimsum from "../../assets/image/dimsum.jpg";
import nasigoreng from "../../assets/image/nasi goreng.jpg";
import milktea from "../../assets/image/milk tea.jpg";

function ControlledCarousel() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  };

  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };

  const handleSelect3 = (selectedIndex) => {
    setIndex3(selectedIndex);
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          fontFamily: "Merriweather, serif",
          fontSize: "32px",
          color: "#FFD700",
          fontWeight: "bold",
          marginBottom: "30px",
          marginTop: "-30px",
          animation: "fadeIn 2s ease-out",
        }}
      >
        Menu Favorit
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "30%", marginBottom: "30px" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "24px",
              color: "#ffff",
              fontWeight: "bold",
              marginBottom: "20px",
              animation: "fadeIn 2s ease-out",
            }}
          >
            Coffee
          </h2>
          <div
            style={{
              border: "2px solid #ccc",
              borderRadius: "20px",
              overflow: "hidden",
              height: "300px",
              animation: "scaleUp 1s ease-out",
            }}
          >
            <Carousel activeIndex={index1} onSelect={handleSelect1}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={fontImage}
                  alt="First slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontFamily: "Merriweather, serif",
                      animation: "fadeIn 1.5s ease-out",
                    }}
                  >
                    Mocha
                  </h3>
                  <p
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: "12px",
                      textAlign: "justify",
                      animation: "fadeIn 2s ease-out",
                    }}
                  >
                    Kopi yang memadukan kopi dengan coklat panas. goreng
                    memiliki rasa gurih, dan nikmat.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={espresso}
                  alt="Second slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      fontFamily: "Merriweather, serif",
                      animation: "fadeIn 1.5s ease-out",
                    }}
                  >
                    Espresso
                  </h3>
                  <p
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: "12px",
                      textAlign: "justify",
                      animation: "fadeIn 2s ease-out",
                    }}
                  >
                    Espresso adalah kopi pekat yang diseduh dengan cepat
                    menggunakan air bertekanan tinggi.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "24px",
              color: "#ffff",
              fontWeight: "bold",
              marginBottom: "20px",
              animation: "fadeIn 2s ease-out",
            }}
          >
            Makanan
          </h2>
          <div
            style={{
              border: "2px solid #ccc",
              borderRadius: "20px",
              overflow: "hidden",
              height: "300px",
              animation: "scaleUp 1s ease-out",
            }}
          >
            <Carousel activeIndex={index2} onSelect={handleSelect2}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dimsum}
                  alt="Second slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      animation: "fadeIn 1.5s ease-out",
                    }}
                  >
                    Dimsum
                  </h3>
                  <p
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: "12px",
                      textAlign: "justify",
                      animation: "fadeIn 2s ease-out",
                    }}
                  >
                    Dimsum adalah hidangan kecil Tiongkok yang dikukus atau
                    digoreng, disajikan dalam keranjang bambu.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={nasigoreng}
                  alt="Second slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      animation: "fadeIn 1.5s ease-out",
                    }}
                  >
                    Nasi Goreng
                  </h3>
                  <p
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: "12px",
                      textAlign: "justify",
                      animation: "fadeIn 2s ease-out",
                    }}
                  >
                    Nasi goreng disajikan dengan potongan daging ayam yang
                    dimasak bersama nasi goreng.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "24px",
              color: "#ffff",
              fontWeight: "bold",
              marginBottom: "20px",
              animation: "fadeIn 2s ease-out",
            }}
          >
            Non Coffee
          </h2>
          <div
            style={{
              border: "2px solid #ccc",
              borderRadius: "20px",
              overflow: "hidden",
              height: "300px",
              animation: "scaleUp 1s ease-out",
            }}
          >
            <Carousel activeIndex={index3} onSelect={handleSelect3}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={milktea}
                  alt="Third slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      animation: "fadeIn 1.5s ease-out",
                    }}
                  >
                    Milk Tea
                  </h3>
                  <p
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: "12px",
                      textAlign: "justify",
                      animation: "fadeIn 2s ease-out",
                    }}
                  >
                    Milk tea adalah minuman teh yang dicampur dengan susu,
                    sering kali disajikan dingin dengan es atau panas tanpa es.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlledCarousel;
