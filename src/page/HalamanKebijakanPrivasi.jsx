import React from "react";
import Navbar from "../component/ComponentUser/UserNavbar";
import Kebijakan from "../component/ComponentUser/UserKebijakanPrivasi";
import Footer from "../component/ComponentUser/UserFooter";

const KebijakanPrivasiUser = () => {
  return (
    <div style={{ backgroundColor: "#191919", minHeight: "100vh" }}>
      <Navbar />
      <Kebijakan />
      <Footer />
    </div>
  );
};

export default KebijakanPrivasiUser;
