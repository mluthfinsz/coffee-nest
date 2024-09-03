import React from "react";
import Navbar from "../component/ComponentUser/UserNavbar";
import Promosi from "../component/ComponentUser/UserPromosi";
import UserMenu from "../component/ComponentUser/UserMenu";
import Footer from "../component/ComponentUser/UserFooter";

const PemesananUser = () => {
  return (
    <div style={{ backgroundColor: "#191919", minHeight: "100vh" }}>
      <Navbar />
      <Promosi />
      <UserMenu />
      <Footer />
    </div>
  );
};

export default PemesananUser;
