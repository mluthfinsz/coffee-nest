import React from "react";
import coffee from "../../assets/image/coffee.png";
import food from "../../assets/image/food.png";
import takeaway from "../../assets/image/takeaway.png";

const Service = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col">
          <div
            className="rectangle"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "30px 20px",
              borderRadius: "15px",
              maxWidth: "calc(95vw)",
              margin: "0 45px",
              marginTop: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              src={coffee}
              alt="Font Image"
              style={{ width: "40px", height: "auto", borderRadius: "3px" }}
            />
            <img
              src={food}
              alt="Font Image"
              style={{ width: "40px", height: "auto", borderRadius: "3px" }}
            />
            <img
              src={takeaway}
              alt="Font Image"
              style={{ width: "40px", height: "auto", borderRadius: "3px" }}
            />
            <img
              src={food}
              alt="Font Image"
              style={{ width: "40px", height: "auto", borderRadius: "3px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
