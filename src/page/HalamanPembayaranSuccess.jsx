import React from "react";
import backgroundImage from "../assets/image/coffee shop.jpg";
import Success from "../component/ComponentUser/UserSuccess";

const PembayaranSuccess = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "130%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px",
        }}
      >
        <Success />
      </div>
    </div>
  );
};

export default PembayaranSuccess;
