import React from "react";

import Minuman1 from "../../assets/image/Menu/Ice Tea.jpg";
import Minuman2 from "../../assets/image/Menu/Iced Chocolate.jpg";
import Minuman3 from "../../assets/image/Menu/Lemon Tea.jpg";
import Minuman4 from "../../assets/image/Menu/Lychee Tea.jpg";

const MenuComponent = () => {
  const cards = [
    {
      id: 1,
      image: Minuman1,
      text: "Iced Tea",
      price: "Rp. 15.000",
      description: "Teh dingin yang menyegarkan, sempurna untuk hari panas.",
    },
    {
      id: 2,
      image: Minuman2,
      text: "Iced Chocolate",
      price: "Rp. 20.000",
      description: "Minuman cokelat dingin yang lezat dan menyegarkan.",
    },
    {
      id: 3,
      image: Minuman3,
      text: "Lemon Tea",
      price: "Rp. 20.000",
      description: "Teh dengan rasa lemon yang segar dan nikmat.",
    },
    {
      id: 4,
      image: Minuman4,
      text: "Lychee Tea",
      price: "Rp. 20.000",
      description: "Teh dengan rasa leci yang manis dan menyegarkan.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "#ECE2C5",
              marginTop: "30px",
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#ffff",
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            Non Coffee
          </h1>

          <hr
            style={{ color: "white", borderWidth: "2px", marginBottom: "30px" }}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cards.map((card) => (
          <div key={card.id} className="col">
            <div className="card-container" style={{ position: "relative" }}>
              <div
                className="card-shadow"
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "40px",
                  boxShadow: "-16px -17px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="card rounded-5 p-4 border-0 border-primary"
                style={{
                  width: "100%",
                  height: "350px",
                  boxShadow: "-16px -17px 15px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  borderRadius: "50px",
                  overflow: "hidden",
                  zIndex: 2,
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  style={{
                    height: "150px",
                    width: "auto",
                    maxWidth: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                  alt={`Card ${card.id}`}
                />
                <div className="card-body" style={{ position: "relative" }}>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Josefin Sans", marginBottom: "10px" }}
                  >
                    {card.text}
                  </p>
                  <p
                    className="card-description"
                    style={{
                      fontFamily: "Josefin Sans",
                      fontSize: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    {card.description}
                  </p>
                  <p
                    className="card-price"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {card.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
