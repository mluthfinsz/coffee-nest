import React from "react";

import makanan1 from "../../assets/image/Menu/croissant 1.jpg";
import makanan2 from "../../assets/image/Menu/kentang goreng 2.jpg";
import makanan3 from "../../assets/image/Menu/dimsum 3.jpg";
import makanan4 from "../../assets/image/Menu/Spaghetti bolognese 4.jpg";
import makanan5 from "../../assets/image/Menu/beef noodles 5.jpg";
import makanan6 from "../../assets/image/Menu/Croffle 6.jpg";
import makanan7 from "../../assets/image/Menu/Kue 7.jpg";
import makanan8 from "../../assets/image/Menu/Onion Ring 8.jpg";
import makanan9 from "../../assets/image/Menu/Sandwich.jpg";
import makanan10 from "../../assets/image/Menu/Klapertart.jpg";
import makanan11 from "../../assets/image/Menu/Bakso Campur.jpg";
import makanan12 from "../../assets/image/Menu/Mie Ayam.jpg";

const MenuComponent = () => {
  const cards = [
    {
      id: 1,
      image: makanan1,
      text: "Croissant",
      price: "Rp. 20.000",
      description: "Croissant yang renyah dan lezat dengan mentega.",
    },
    {
      id: 2,
      image: makanan2,
      text: "Kentang Goreng",
      price: "Rp. 15.000",
      description: "Kentang goreng gurih dengan bumbu spesial.",
    },
    {
      id: 3,
      image: makanan3,
      text: "Dimsum",
      price: "Rp. 25.000",
      description: "Dimsum pilihan dengan berbagai isian lezat.",
    },
    {
      id: 4,
      image: makanan4,
      text: "Spaghetti bolognese",
      price: "Rp. 23.000",
      description: "Spaghetti dengan saus bolognese kaya rasa.",
    },
    {
      id: 5,
      image: makanan5,
      text: "Beef Noodles",
      price: "Rp. 25.000",
      description: "Mi dengan daging sapi empuk dan kaldu nikmat.",
    },
    {
      id: 6,
      image: makanan6,
      text: "Croffle",
      price: "Rp. 15.000",
      description: "Perpaduan croissant dan waffle yang unik.",
    },
    {
      id: 7,
      image: makanan7,
      text: "Kue",
      price: "Rp. 15.000",
      description: "Kue manis yang lembut dan menggoda.",
    },
    {
      id: 8,
      image: makanan8,
      text: "Onion Ring",
      price: "Rp. 20.000",
      description: "Cincin bawang goreng renyah.",
    },
    {
      id: 9,
      image: makanan9,
      text: "Sandwich",
      price: "Rp. 25.000",
      description: "Sandwich dengan isian segar dan sehat.",
    },
    {
      id: 10,
      image: makanan10,
      text: "Klapertart",
      price: "Rp. 23.000",
      description: "Dessert khas Manado dengan rasa kelapa.",
    },
    {
      id: 11,
      image: makanan11,
      text: "Bakso Campur",
      price: "Rp. 18.000",
      description: "Bakso dengan aneka campuran lezat.",
    },
    {
      id: 12,
      image: makanan12,
      text: "Mie Ayam",
      price: "Rp. 18.000",
      description: "Mie dengan ayam dan kuah gurih.",
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
              color: "#FFD700",
              marginTop: "30px",
            }}
          >
            Menu
          </h1>
          <h2
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#ffff",
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            Makanan
          </h2>
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
                    style={{ fontFamily: "Josefin Sans" }}
                  >
                    {card.text}
                  </p>
                  <p
                    className="card-description"
                    style={{
                      fontFamily: "Josefin Sans",
                      textAlign: "justify",
                      fontSize: "12px",
                    }}
                  >
                    {card.description}
                  </p>
                  <p
                    className="card-price"
                    style={{
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      fontSize: "14px",
                      textAlign: "right",
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
