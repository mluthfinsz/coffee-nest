import React from "react";
import Register from "../component/ComponentAdmin/AdminRegister";
import backgroundImage from "../assets/image/coffee shop.jpg";

const RegisterAdmin = () => {
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
      <Register />
    </div>
  );
};

export default RegisterAdmin;
