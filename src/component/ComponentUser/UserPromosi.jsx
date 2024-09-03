import React from "react";

import Image1 from "../../assets/image/Coffee House 1.png";
import Image2 from "../../assets/image/Coffee House 2.png";
import Image3 from "../../assets/image/Coffee House 3.png";

const Promosi = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1
            className="text-center"
            style={{
              fontFamily: "Merriweather, serif",
              color: "#FFD700",
              marginBottom: "30px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Promosi
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            src={Image1}
            alt="Promotion 1"
            className="img-fluid"
            style={{
              border: "2px solid #ECE2C5",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="col">
          <img
            src={Image2}
            alt="Promotion 2"
            className="img-fluid"
            style={{
              border: "2px solid #ECE2C5",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="col">
          <img
            src={Image3}
            alt="Promotion 3"
            className="img-fluid"
            style={{
              border: "2px solid #ECE2C5",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Promosi;
