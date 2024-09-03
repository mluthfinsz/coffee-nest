import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import {
  BsHouseDoorFill,
  BsClipboardData,
  BsBox,
  BsChatDots,
  BsBoxArrowRight,
} from "react-icons/bs";
import Logo from "../../assets/image/Logo Coffee.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("currentUser", null);
    navigate("/login");
  };
  const sidebarStyle = {
    width: "200px",
    height: "90vh",
    padding: "20px",
    borderRadius: "50px",
    position: "sticky",
    marginTop: "10px",
    left: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontFamily: "Merriweather, serif",
  };

  const logoStyle = {
    width: "100px",
    height: "auto",
    display: "block",
    margin: "20px auto",
  };

  const navLinkStyle = {
    color: "#191919",
    textDecoration: "none",
    borderBottom: "1px solid #191919",
    paddingBottom: "5px",
    marginBottom: "10px",
  };
  const welcomeTextStyle = {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#191919",
    textAlign: "center",
    fontFamily: "Josefin Sans",
  };

  return (
    <div>
      <div style={sidebarStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
        <Nav className="flex-column" style={{ marginTop: "20px" }}>
          <Nav.Link href="dashboard" style={navLinkStyle}>
            <BsHouseDoorFill /> Dashboard
          </Nav.Link>
          <Nav.Link href="pesanan" style={navLinkStyle}>
            <BsClipboardData /> Pesanan
          </Nav.Link>
          <Nav.Link href="produk" style={navLinkStyle}>
            <BsBox /> Produk
          </Nav.Link>
          <Nav.Link href="ulasan" style={navLinkStyle}>
            <BsChatDots /> Ulasan
          </Nav.Link>
          <Button
            onClick={handleLogout}
            className="mt-2"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#191919",
              borderColor: "#191919",
              color: "#fff",
            }}
          >
            <BsBoxArrowRight style={{ marginRight: "5px" }} /> Logout
          </Button>
          <p style={welcomeTextStyle}>
            Selamat datang, {currentUser?.username}
          </p>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
