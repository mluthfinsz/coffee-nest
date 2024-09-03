import React from "react";
import Navbar from "../component/ComponentUser/UserNavbar";
import Promosi from "../component/ComponentUser/UserPromosi";
import MenuPesanan from "../component/ComponentUser/UserMenuMakanan";
import Minuman from "../component/ComponentUser/UserMenuCoffee";
import NonCoffee from "../component/ComponentUser/UserNonCoffee";
import Chatbot from "../component/ComponentUser/UserRekomendasiMenu";
import Button from "../component/ComponentUser/UserButtonPemesanan";
import Footer from "../component/ComponentUser/UserFooter";

const Menu = () => {
  const backgroundStyle = {
    background: `
      radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(50,50,50,0.6) 70%, rgba(0,0,0,0) 100%),
      radial-gradient(circle, rgba(50,50,50,0.5) 20%, rgba(0,0,0,0) 30%),
      linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.9))
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    color: "#ffffff",
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <Promosi />
      <MenuPesanan />
      <Minuman />
      <NonCoffee />
      <Chatbot />
      <Button />
      <Footer />
    </div>
  );
};

export default Menu;
