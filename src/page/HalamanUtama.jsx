import React from "react";
import backgroundImage from "../assets/image/coffee shop.jpg";
import Halaman from "../component/ComponentUser/UserHalamanUtama";
import Navbar from "../component/ComponentUser/UserNavbar";

const Dashboard = () => {
  const aboutStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    zIndex: 1,
    pointerEvents: "none", 
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  };

  const navbarStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    position: "relative",
    zIndex: 3,
  };

  return (
    <div style={aboutStyle}>
      <Navbar style={navbarStyle} /> 
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <Halaman />
      </div>
    </div>
  );
};

export default Dashboard;
