import React from "react";
import Sidebar from "../component/ComponentAdmin/AdminSidebar";
import Order from "../component/ComponentAdmin/AdminReceipt";
import backgroundImage from "../assets/image/coffee shop.jpg";

const PesananAdmin = () => {
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
          height: "100%",
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
        <Sidebar />
        <Order />
      </div>
    </div>
  );
};

export default PesananAdmin;
