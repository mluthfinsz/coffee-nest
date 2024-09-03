import React from "react";
import Coffee1 from "../../assets/image/Menu/Espresso.jpg";
import Coffee2 from "../../assets/image/Menu/Cappuccino.jpg";
import Coffee3 from "../../assets/image/Menu/Long Black.jpg";
import Coffee4 from "../../assets/image/Menu/Caramel Macchiato.jpg";
import Coffee5 from "../../assets/image/Menu/Latte Coffee.jpg";
import Coffee6 from "../../assets/image/Menu/Aset1.png";
import Coffee7 from "../../assets/image/Menu/Kopi Susu.jpg";
import Coffee8 from "../../assets/image/Menu/Americano.jpg";

const MenuComponent = () => {
  const cards = [
    {
      id: 1,
      image: Coffee1,
      text: "Espresso",
      price: "Rp. 18.000",
      description: "Kopi kental dengan rasa yang kuat dan kaya.",
    },
    {
      id: 2,
      image: Coffee2,
      text: "Cappuccino",
      price: "Rp. 23.000",
      description: "Campuran sempurna espresso, susu panas, dan busa.",
    },
    {
      id: 3,
      image: Coffee3,
      text: "Long Black",
      price: "Rp. 20.000",
      description: "Dua shot espresso yang dituangkan di atas air panas.",
    },
    {
      id: 4,
      image: Coffee4,
      text: "Caramel Macchiato",
      price: "Rp. 25.000",
      description: "Espresso dengan susu panas dan rasa karamel.",
    },
    {
      id: 5,
      image: Coffee5,
      text: "Latte Coffee",
      price: "Rp. 25.000",
      description: "Espresso halus dengan susu panas dan lapisan busa tipis.",
    },
    {
      id: 6,
      image: Coffee6,
      text: "Coffee House",
      price: "Rp. 18.000",
      description: "Campuran espresso khas kami dengan sentuhan cokelat.",
    },
    {
      id: 7,
      image: Coffee7,
      text: "Kopi Susu",
      price: "Rp. 20.000",
      description:
        "Kopi manis yang dikombinasikan dengan susu untuk rasa yang lembut.",
    },
    {
      id: 8,
      image: Coffee8,
      text: "Americano",
      price: "Rp. 18.000",
      description:
        "Espresso yang diencerkan dengan air panas untuk rasa kopi yang lebih ringan.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
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
            Coffee
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
                      textAlign: "justify",
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
