import React from "react";
import Login from "../component/ComponentAdmin/AdminLogin";
import backgroundImage from "../assets/image/coffee shop.jpg";

const LoginAdmin = () => {
  const aboutStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={aboutStyle}>
      <Login />
    </div>
  );
};

export default LoginAdmin;
